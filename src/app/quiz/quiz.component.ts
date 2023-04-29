import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Country, ICountry } from '../country';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  countries: Country[] = []; // list of countries
  userInput: string = ''; // user input


  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
    this.countriesService.getCountries().subscribe(
      data => {
        data.geonames.forEach((country: ICountry) => {
          console.log(country.capital);
          if (country.capital !== '') { // capital is not empty
            this.countries.push(new Country(country.countryName, country.capital));
          }
        });
      },
    );
  }
}
