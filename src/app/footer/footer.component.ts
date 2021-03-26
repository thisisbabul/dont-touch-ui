import { Component, OnInit } from '@angular/core';
import {DonttouchService} from '../donttouch.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  allSalesRepresentative: any;
  constructor(private donttouchService: DonttouchService) { }

  ngOnInit(): void {
    const salesRepresentative = this.donttouchService.getSalesRepresentative();
    salesRepresentative.subscribe((data) => this.allSalesRepresentative = data);
  }

}
