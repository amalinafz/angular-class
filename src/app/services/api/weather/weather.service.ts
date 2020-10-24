import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Weather } from 'src/app/model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  API_KEY = environment.OPENWEATHER_APIKEY

  constructor(
    private http: HttpClient
  ) {

   }

   async forecast16(city: string): Promise<Weather>{
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&cnt=6&appid=${this.API_KEY}`;
     return await this.http.get<Weather>(url).toPromise();
   }
   
}


