import { Component, OnInit } from '@angular/core';
import { CarsService } from './cars.service';
import { Car } from './models/car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cars-app';
  cars: Car[] = [];

  constructor(private carsService: CarsService) {}

  ngOnInit() {
    this.carsService.getCars().subscribe((data:any) => {
      this.cars = data;
      console.log(data);  
    });
  }
}