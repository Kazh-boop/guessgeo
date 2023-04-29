import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather } from '../weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  @Input() city!: string;
  currentWeather!: Weather;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeather(this.city).subscribe(
      data => {
        this.currentWeather = new Weather(
          data.current.temperature,
          data.current.weather_descriptions,
          data.current.weather_icons,
          data.current.wind_speed
        )
      }
    );
  }
}
