import { Component, OnInit } from '@angular/core';
import {RickMortyServiceService} from './rick-morty-service.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  personajes: any[] = [];
  
  constructor(private rickMortyService : RickMortyServiceService) {}

 ngOnInit(): void {
   this.rickMortyService.getpersonajes().subscribe(data =>{
    this.personajes = data.results;
   })
 } 

}
