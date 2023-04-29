import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { CountriesService } from './countries.service';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './weather/weather.component';
import { FilterCapitalsPipe } from './filter-capitals.pipe';
import { InputUserComponent } from './input-user/input-user.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    WeatherComponent,
    FilterCapitalsPipe,
    InputUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
