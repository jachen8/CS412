import {Component, Input, OnInit, Output} from '@angular/core';
import {Data} from '../data';
import { weather } from './configs';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  @Input() cities: Data[];
  @Output() selectedCity: Data;

  constructor() { }

  ngOnInit(): void {
  }
  // setCityName(name: string) {
  //   this.selectedCity;
  // }
  submitForm(): void {
    const url = weather.replace('name', this.selectedCity);
    const response = Data[url];
    const newData = response[0];
    this.selectedCity = {
      name: newData.name;
      temp: newData.temp;
      humidity: newData.humidity;
    };
  }

}
