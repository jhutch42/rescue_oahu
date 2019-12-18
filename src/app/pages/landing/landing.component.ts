import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  title: string;
  subtitle: string;
  sixtyFortyTitle: string;
  coverImageUrl: string;
  fourBoxTitle: string;

  constructor() {
    // Set all content for the template.
    this.title = 'Rescue Oahu';
    this.subtitle = 'All of the animals available for adoption on Oahu in one place.  Save a life today.';
    this.sixtyFortyTitle = 'Featured Pet';
    this.coverImageUrl = 'assets/images/cover.png';
    this.fourBoxTitle = 'Animals Available for Adoption Today';
   }

  ngOnInit() {
  }

}
