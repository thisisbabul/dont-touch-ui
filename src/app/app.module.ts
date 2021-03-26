import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArtistasComponent } from './artistas/artistas.component';
import { ContatoComponent } from './contato/contato.component';
import { FacaParteComponent } from './faca-parte/faca-parte.component';
import { UnidadesComponent } from './unidades/unidades.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DonttouchService} from './donttouch.service';
import {HttpClientModule} from '@angular/common/http';
import { TimeslotComponent } from './timeslot/timeslot.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistasComponent,
    ContatoComponent,
    FacaParteComponent,
    UnidadesComponent,
    TimeslotComponent,
    HeaderComponent,
    FooterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        ToastrModule.forRoot({
            timeOut: 1000,
            progressBar: true,
            progressAnimation: 'increasing'
        }),
        ReactiveFormsModule
    ],
  providers: [DonttouchService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
