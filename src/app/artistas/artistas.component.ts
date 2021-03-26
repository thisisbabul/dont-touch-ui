import { Component, OnInit } from '@angular/core';
import {DonttouchService} from '../donttouch.service';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.css']
})
export class ArtistasComponent implements OnInit {
  allData: any;
  allSalesRepresentative: any;
  constructor(private donttouchService: DonttouchService) { }

  ngOnInit(): void {
    const allData = this.donttouchService.getAllData();
    allData.subscribe((data) => this.allData = data);

    const salesRepresentative = this.donttouchService.getSalesRepresentative();
    salesRepresentative.subscribe((data) => this.allSalesRepresentative = data);
  }
  public getRandomValue() {
    return Math.floor(Math.random() * 2);
  }
}
