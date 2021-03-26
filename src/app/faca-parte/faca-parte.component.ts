import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {DonttouchService} from '../donttouch.service';
import {FacaParte} from '../FacaParte';
import {LoginResponse} from '../LoginResponse';

@Component({
  selector: 'app-faca-parte',
  templateUrl: './faca-parte.component.html',
  styleUrls: ['./faca-parte.component.css']
})
export class FacaParteComponent implements OnInit {
  private loginResponse: LoginResponse = new LoginResponse(false, 'Failed');
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  facaParte: FacaParte = new FacaParte('', '', '', '');
  private message: any;
  allSalesRepresentative: any;
  constructor(private donttouchService: DonttouchService, private router: Router, private toastrService: ToastrService) { }

  ngOnInit() {
    const salesRepresentative = this.donttouchService.getSalesRepresentative();
    salesRepresentative.subscribe((data) => this.allSalesRepresentative = data);
  }
  public saveFacaParte() {
    if (!this.facaParte.name) {
      this.toastrService.error('Name is required', '');
    } else if (!this.facaParte.email) {
      this.toastrService.error('Email is required', '');
    } else if (!this.facaParte.facebook) {
      this.toastrService.error('Facebook is required', '');
    } else if (!this.facaParte.instagram) {
      this.toastrService.error('Instagram is required', '');
    } else {
      const response = this.donttouchService.saveFacaParte(this.facaParte);
      response.subscribe(data => {
          this.loginResponse = JSON.parse(JSON.stringify(data));

          if (this.loginResponse.status === true) {
            this.toastrService.success(this.loginResponse.message, '');
            this.facaParte = new FacaParte('', '', '', '');
          }
        },
        error => alert(error),
        () => console.log('Request completed'));
    }
    this.gotoTop();
  }

  public gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  public getRandomValue() {
    return Math.floor(Math.random() * 2);
  }
}
