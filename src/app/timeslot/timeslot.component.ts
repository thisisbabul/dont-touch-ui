import { Component, OnInit } from '@angular/core';
import {DonttouchService} from '../donttouch.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-timeslot',
  templateUrl: './timeslot.component.html',
  styleUrls: ['./timeslot.component.css']
})
export class TimeslotComponent implements OnInit {
  allData: any;
  artistId: any;
  allSalesRepresentative: any;

  constructor(private donttouchService: DonttouchService, private actRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const allData = this.donttouchService.getAllData();
    allData.subscribe((data) => this.allData = data);
    this.artistId = this.actRoute.snapshot.params.id;

    const salesRepresentative = this.donttouchService.getSalesRepresentative();
    salesRepresentative.subscribe((data) => this.allSalesRepresentative = data);
  }
  public getRandomValue() {
    return Math.floor(Math.random() * 2);
  }
}
