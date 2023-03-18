import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private heroesSvc: HeroesService) { }

  dataAbout : any = {};

  ngOnInit(): void {
    this.heroesSvc.getAbout().subscribe((response: any) => {
      //Información sobre Acerca de en el sitio
      console.log(response);
      this.dataAbout = response.data;
    });
  }

}
