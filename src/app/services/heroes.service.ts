import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }
  
  getMarvelHeroes() {
    return this.http.get(`${environment.API_BASE_URL}/marvel`);
  }

  getDCHeroes() {
    return this.http.get(`${environment.API_BASE_URL}/dc`);
  }

  getAbout() {
    return this.http.get(`${environment.API_BASE_URL}/about`);
  }
}
