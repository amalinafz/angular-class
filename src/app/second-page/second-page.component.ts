import { Component, OnInit } from '@angular/core';
import {Notes} from '../model';
import {StorageService} from '../services/storage/storage.service'

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {
  notes: Array<Notes> = [];
  constructor(
    private storage: StorageService
  ) { }

  //method yg kena implement
  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(){
    //<> this generate return type 
    this.notes = this.storage.get<Array<Notes>>(this.storage.NOTES);
    console.log(this.notes);
  }
}
