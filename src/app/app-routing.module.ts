import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DcComponent } from './dc/dc.component';
import { HomeComponent } from './home/home.component';
import { MarvelComponent } from './marvel/marvel.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'marvel', component: MarvelComponent },
  { path: 'dc', component: DcComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
