import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa el módulo de pruebas
import { RickMortyServiceService } from './rick-morty-service.service';

describe('RickMortyServiceService', () => {
  let service: RickMortyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Asegúrate de incluir este módulo para pruebas de HTTP
    });
    service = TestBed.inject(RickMortyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
