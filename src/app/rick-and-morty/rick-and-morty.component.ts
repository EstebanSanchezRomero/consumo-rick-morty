import { Component, OnInit } from '@angular/core';
import { RickMortyServiceService } from '../rick-morty-service.service';
import { DataService } from '../data.service'; // Asegúrate de importar tu DataService

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.component.html',
  styleUrls: ['./rick-and-morty.component.css']
})
export class RickAndMortyComponent implements OnInit {
  characters: any[] = [];
  selectedCharacter: any = null;
  episodes: any[] = [];

  constructor(
    private rickMortyService: RickMortyServiceService, 
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.rickMortyService.getpersonajes().subscribe(data => {
      this.characters = data.results;

      // Seleccionar automáticamente el primer personaje si hay personajes disponibles
      if (this.characters.length > 0) {
        this.selectCharacter(this.characters[0]);
      }
    });
  }

  selectCharacter(character: any): void {
    if (this.selectedCharacter === character) {
      // Si ya está seleccionado, lo deseleccionamos
      this.selectedCharacter = null;
      this.episodes = [];
      console.log('Deseleccionando personaje:', character.name);
    } else {
      // Seleccionar el personaje y obtener sus episodios
      this.selectedCharacter = character;
      this.getEpisodes(character.id);
      console.log('Seleccionando personaje:', character.name);
    }

    console.log('Selected Character:', this.selectedCharacter);
    console.log('Episodes:', this.episodes);
  }
  
  private getEpisodes(characterId: number): void {
    this.rickMortyService.getpersonaje(characterId).subscribe(data => {
      console.log('Episodios recibidos:', data);
      this.episodes = data.episode.map((episodeUrl: string) => {
        const episodeId = episodeUrl.split('/').pop(); // Extraer el ID del episodio de la URL
        return {
          id: episodeId,
          url: episodeUrl,
          name: `Episode ${episodeId}`, // Aquí puedes personalizar el nombre como desees
          air_date: data.air_date // Asegúrate de obtener la fecha de aire correctamente
        };
      });
      this.dataService.changeEpisodes(this.episodes); // Cambiar episodios en el servicio
    });
  }
}
