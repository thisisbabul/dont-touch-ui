import {Component, OnInit, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef} from '@angular/core';
import {DonttouchService} from '../donttouch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private donttouchService: DonttouchService, private changeDetection: ChangeDetectorRef) { }
  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  map: google.maps.Map;
  lat = -23.6073136;
  lng = -46.6592159;
  coordinates = new google.maps.LatLng(this.lat, this.lng);
  allData: any;
  allSalesRepresentative: any;
  activeHome: 'active';
  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 16
  };

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
    icon: 'assets/images/pin.png'
  });

  ngOnInit(): void {
    const allData = this.donttouchService.getAllData();
    allData.subscribe((data) => this.allData = data);

    const salesRepresentative = this.donttouchService.getSalesRepresentative();
    salesRepresentative.subscribe((data) => this.allSalesRepresentative = data);
  }
  public getRandomValue(): number {
    // this.changeDetection.detectChanges();
    return Math.floor(Math.random() * 2);
  }

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement,
      this.mapOptions);
    this.marker.setMap(this.map);
  }
}
