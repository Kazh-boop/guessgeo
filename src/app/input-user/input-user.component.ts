import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Country } from '../country';

@Component({
  selector: 'app-input-user',
  templateUrl: './input-user.component.html',
  styleUrls: ['./input-user.component.css']
})
export class InputUserComponent  {

  @Input() countries: Country[] = []; // list of countries

  @Output() itemSelected = new EventEmitter<string>(); // item to be selected

  userInput: string = ''; // user input
  showListFlag: boolean = false;

  constructor() { }

  selectCapital(capital : string) {
    this.userInput = capital;
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
