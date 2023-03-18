import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css']
})
export class MarvelComponent implements OnInit {

  constructor(private heroesSvc: HeroesService) { }

  dataMarvel : any = [];

  ngOnInit(): void {
    this.heroesSvc.getMarvelHeroes().subscribe((response: any) => {
      //Datos de Heroes de Marvel
      console.log(response);
      this.dataMarvel = response.data;
    });
  }

}
