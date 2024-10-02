import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; // Importa el servicio

@Component({
  selector: 'app-capitulos',
  templateUrl: './capitulos.component.html',
  styleUrls: ['./capitulos.component.css']
})
export class CapitulosComponent implements OnInit {
  episodes: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.currentEpisodes.subscribe(episodes => {
      this.episodes = episodes; // Obtener episodios del servicio
    });
  }
}
