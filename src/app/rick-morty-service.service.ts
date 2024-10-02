import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickMortyServiceService {
  private apiUrl= 'https://rickandmortyapi.com/api';
  
  constructor(private http:HttpClient) { }

  getpersonajes(): Observable<any>{

    return this.http.get<any>(`${this.apiUrl}/character`)
  }
  getpersonaje(id:number): Observable<any>{

    return this.http.get<any>(`${this.apiUrl}/character/${id}`)
  }
  
}
