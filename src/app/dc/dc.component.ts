import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {

  constructor(private heroesSvc: HeroesService) { }

  dataDC : any = [];

  ngOnInit(): void {
    this.heroesSvc.getDCHeroes().subscribe((response: any) => {
      //Datos de Heroes de DC
      console.log(response);
      this.dataDC = response.data;
    });
  }

}
