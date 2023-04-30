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
  selectedCountries: Country[] = [];
  currentIndex: number = 0;
  score: number = 0;
  maxquestion: number = 10;
  answer: boolean = false;
  answerCorrect: boolean=false; 
  isButtonDisabled: boolean = false;

  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
    this.countriesService.getCountries().subscribe(
      data => {
        data.geonames.forEach((country: ICountry) => {
          if (country.capital.trim() !== '' && country.countryName !== 'Panama' && country.countryName !== 'Sao Tomé-et-Principe') { // capital is not empty
            this.countries.push(new Country(country.countryName, country.capital));
          }
        });
        this.selectedCountries = this.getRandomCountries();
        console.log(this.selectedCountries);
      },
    );
  }

  getRandomCountries(): Country[] {
    const randomCountries: Country[] = [];
    for (let i = 0; i < this.maxquestion; i++) {
      const randomIndex = Math.floor(Math.random() * this.countries.length);
      randomCountries.push(this.countries[randomIndex]);
    }
    return randomCountries;
  }

  checkAnswer() {
    this.isButtonDisabled = true;
    this.answer = true;
    if (this.userInput.trim().toLowerCase() === this.selectedCountries[this.currentIndex].capital.toLowerCase()) {
      this.answerCorrect = true;
      this.score++;
    } else {
      this.answerCorrect = false;
    }
  }

  nextQuestion() {
    this.isButtonDisabled = false;
    this.answer = false;
    this.currentIndex++;
    this.userInput = '';
  }

  restart() {    
    this.currentIndex = 0;
    this.score = 0;
    this.selectedCountries = this.getRandomCountries();
    this.answer = false;
    this.userInput = '';
    this.isButtonDisabled = false;
  }

}
