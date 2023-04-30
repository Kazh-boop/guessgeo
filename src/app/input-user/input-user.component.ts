import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Country } from '../country';

@Component({
  selector: 'app-input-user',
  templateUrl: './input-user.component.html',
  styleUrls: ['./input-user.component.css']
})
export class InputUserComponent {

  @Input() countries: Country[] = []; // list of countries

  @Output() itemSelected = new EventEmitter<string>(); // item to be selected

  @Input() userInput: string = ''; // user input
  showListFlag: boolean = false;

  constructor() { }

  selectCapital(capital: string) {
    this.userInput = capital.toLowerCase().split(' ')
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' '); // utile pour les capitales composées de plusieurs mots comme "Le Caire" ou "La Havane"
    this.itemSelected.emit(this.userInput);
  }

  selectCapitalList(capital: string) {
    this.userInput = capital.toLowerCase().split(' ')
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' '); // utile pour les capitales composées de plusieurs mots comme "Le Caire" ou "La Havane"
    this.itemSelected.emit(this.userInput);
    this.hideList();
  }

  showList() {
    this.showListFlag = true;
  }

  hideList() {
    this.showListFlag = false;
  }

}
