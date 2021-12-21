import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-don',
  templateUrl: './don.component.html',
  styleUrls: ['./don.component.css']
})
export class DonComponent implements OnInit {

  date1: Date= new Date();
  amount=50;
  power=5;
  factor=1;
  constructor() { }

  ngOnInit(): void {
  }

}
