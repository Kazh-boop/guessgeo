import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IWeather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly APIKEY = '135d97065d056a646231ad30ecdfcbbc';
  private readonly URL = 'http://api.weatherstack.com/current?';

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<IWeather> {
    return this.http.get<IWeather>(this.URL + 'access_key=' + this.APIKEY + '&query=' + city);
  }

}
