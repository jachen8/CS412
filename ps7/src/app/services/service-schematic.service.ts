import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {config} from '../configs';


@Injectable({
  providedIn: 'root'
})
export class ServiceSchematicService {

  constructor(private http: HttpClient) { }

  getWeather(): Observable<any> {
    return this.http.get(config.url + config.apiKey,
      {observe: 'body', responseType: 'json'});
  }
}
