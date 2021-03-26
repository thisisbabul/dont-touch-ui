import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ArtistasComponent} from './artistas/artistas.component';
import {ContatoComponent} from './contato/contato.component';
import {FacaParteComponent} from './faca-parte/faca-parte.component';
import {UnidadesComponent} from './unidades/unidades.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {TimeslotComponent} from './timeslot/timeslot.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'artistas', component: ArtistasComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'faca-parte', component: FacaParteComponent},
  {path: 'unidades', component: UnidadesComponent},
  {path: ':id', component: TimeslotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    BrowserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
