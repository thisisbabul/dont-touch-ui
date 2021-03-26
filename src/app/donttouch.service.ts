import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {FacaParte} from './FacaParte';

@Injectable({
  providedIn: 'root'
})
export class DonttouchService {

  constructor(private http: HttpClient) { }

  public getAllData() {
    return this.http.get('https://api.donttouch.com.br/timeslot');
  }

  public getSalesRepresentative() {
    return this.http.get('https://api.donttouch.com.br/sales-representative');
  }

  public saveFacaParte(facaParte) {
    const params = new HttpParams()
      .set('name', facaParte.name)
      .set('email', facaParte.email)
      .set('facebook', facaParte.facebook)
      .set('instagram', facaParte.instagram);
    return this.http.post('https://api.donttouch.com.br/join-staff', null, {params});
  }

  public saveContato(contato) {
    const params = new HttpParams()
      .set('name', contato.name)
      .set('email', contato.email)
      .set('message', contato.message);
    return this.http.post('https://api.donttouch.com.br/contact', null, {params});
  }
}
