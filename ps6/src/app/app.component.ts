import { Component } from '@angular/core';
import { Data } from './data';
import { mockData } from './mockData';
import { weather } from './configs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS6';
  cities: Data[] = [];
  selectedCity: string;
  clicked = false;
  selectedTemp: number;
  selectedHumidity: number;

  constructor() {
    this.getCities();
  }

  getCities(): void {
    for (const city of mockData) {
      this.cities.push(city);
    }
    this.selectedCity = null;
    this.selectedTemp = this.cities[0].temp;
    this.selectedHumidity = this.cities[0].humidity;
  }

  setSelectedCity(name: string): void {
    this.selectedCity = name;
  }
  setSelectedTemp(temp: number): void {
    this.selectedTemp = temp;
  }
  setSelectedHumidity(humidity: number): void {
    this.selectedHumidity = humidity;
  }

  submitForm(): void {
    const url = weather.replace('name', this.selectedCity);
    const response = Data[url];
    const mock = response[response.length - 1];
    this.selectedCity = mock.name;
    this.selectedTemp = mock.temp;
    this.selectedHumidity = mock.humidity;
    this.clicked = true;
  }
}
