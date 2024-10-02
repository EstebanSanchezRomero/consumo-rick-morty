import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private episodesSource = new BehaviorSubject<any[]>([]);
  currentEpisodes = this.episodesSource.asObservable();

  constructor() {}

  changeEpisodes(episodes: any[]) {
    this.episodesSource.next(episodes);
  }
}
