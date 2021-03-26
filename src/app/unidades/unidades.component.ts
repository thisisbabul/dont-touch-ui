import { Component, OnInit } from '@angular/core';
import {DonttouchService} from '../donttouch.service';

@Component({
  selector: 'app-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.css']
})
export class UnidadesComponent implements OnInit {

  allSalesRepresentative: any;

  constructor(private donttouchService: DonttouchService) { }

  ngOnInit(): void {
    const salesRepresentative = this.donttouchService.getSalesRepresentative();
    salesRepresentative.subscribe((data) => this.allSalesRepresentative = data);
  }
  public getRandomValue() {
    return Math.floor(Math.random() * 2);
  }
}
