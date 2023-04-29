import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeoNames } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private readonly URL = 'http://api.geonames.org';
  private readonly USERNAME = 'guessgeowe';

  constructor(private http: HttpClient) { }

  getCountries(): Observable<GeoNames> {
    return this.http.get<GeoNames>(this.URL+'/countryInfoJSON?lang=fr&username='+this.USERNAME);
  }
}
