import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Weather, Notes } from '../model';
import { WeatherService } from '../services/api/weather/weather.service';
import { StorageService } from '../services/storage/storage.service';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.scss']
})
export class ThirdPageComponent implements OnInit {

  forecast: Weather;

  notesForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.min(3)]),
    body: new FormControl('', [Validators.required, Validators.min(3)]),
  });

  constructor(
    private weatherAPI: WeatherService,
    private storage: StorageService
  ) { }

  async ngOnInit(){
    this.forecast = await this.weatherAPI.forecast16("Kuala Lumpur");
    console.log(this.forecast.coord);
  }

  onSubmit(){
    try{
      const notes: Notes = { ...this.notesForm.value, weather: this.forecast};
      this.storage.set(this.storage.NOTES, notes)
      console.log(this.notesForm.value)
      alert("Success!")
    } catch(e){
      if(!e.hasOwnProperty("message")){
        return alert(e);
      }
      alert(e.message);
    }
    
  }

}
