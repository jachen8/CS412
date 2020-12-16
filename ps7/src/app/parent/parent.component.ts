import { Component } from '@angular/core';
import { Data } from '../data';
import { weather } from '../configs';
import {ServiceSchematicService} from '../services/service-schematic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class ParentComponent {
  title = 'PS7';
  cities: Data[] = [];
  selectedCity: Data;
  selectedTemp: number;
  selectedHumidity: number;
  clicked = false;

  constructor(private service: ServiceSchematicService) {
    this.getCities();
  }
  setSelectedCity(city: string): void {
    this.selectedCity = name;
  }
  setSelectedTemp(temp: number): void {
    this.selectedTemp = temp;
  }
  setSelectedHumidity(humidity: number): void{
    this.selectedHumidity = humidity;
  }
  getCities(): void {
    this.service.getWeather().subscribe(
      response => {
        console.log(`Response: ${response}`);
        this.selectedCity = response.city;
        this.selectedHumidity = response.humidity;
        this.selectedTemp = response.temp;
      }
    );
  }

  submitForm(): void {
    const url = weather.replace('name', this.selectedCity);
    const response = Data[url];
    const newData = response[0];
    this.selectedCity = {
      name: newData.name;
      temp: newData.temp;
      humidity: newData.humidity;
    };
    this.clicked = true;
  }
}
