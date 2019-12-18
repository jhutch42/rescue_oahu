import { Component, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-rescue-card',
  templateUrl: './rescue-card.component.html',
  styleUrls: ['./rescue-card.component.css']
})
export class RescueCardComponent implements AfterViewInit {

  /* Data is passed from the parent View */
  @Input() name: string; // name of rescue
  @Input() image: any; // rescue logo
  @Input() phone: any; // rescue phone number.
  @Input() url: any; // Url for the rescue website.

  constructor() { }

  ngAfterViewInit() {
  }

}
