import { Component, OnInit } from '@angular/core';
import {DonttouchService} from '../donttouch.service';
import {ToastrService} from 'ngx-toastr';
import {Contato} from '../Contato';
import {LoginResponse} from '../LoginResponse';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  form: FormGroup;
  private loginResponse: LoginResponse = new LoginResponse(false, 'Failed');
  contato: Contato = new Contato('', '', '');
  message: any;
  allSalesRepresentative: any;
  constructor(private fb: FormBuilder, private donttouchService: DonttouchService, private toastrService: ToastrService) { }

  ngOnInit() {
    const salesRepresentative = this.donttouchService.getSalesRepresentative();
    salesRepresentative.subscribe((data) => this.allSalesRepresentative = data);
  }

  public saveContato() {
    if (!this.contato.name) {
      this.toastrService.error('Name is required', '');
    } else if (!this.contato.email) {
      this.toastrService.error('Email is required', '');
    } else if (!this.contato.message) {
      this.toastrService.error('Mensagem is required', '');
    } else {
      const response = this.donttouchService.saveContato(this.contato);
      response.subscribe(data => {
          this.loginResponse = JSON.parse(JSON.stringify(data));

          if (this.loginResponse.status === true) {
            this.toastrService.success(this.loginResponse.message, '');
            this.contato = new Contato('', '', '');
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
