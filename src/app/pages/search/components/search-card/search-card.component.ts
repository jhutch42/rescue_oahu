import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})
export class SearchCardComponent implements OnInit {

  // All data is passed from parent component.
  @Input() name: string; // Animal Name
  @Input() sex: string; // male or female.
  @Input() age: number; // Animal age, in whole numbers.
  @Input() size: string; // small, medium, large
  @Input() location: string; // Rescue that has the animal
  @Input() image: string; // Image URL of the image.  May be local.
  @Input() description: string; // Animal description.
  @Input() url: string; // Url of the the actual rescue website.
  @Input() date: Date; // Date animal became available for adoption.
  @Input() color: string; // Color of animal.
  @Input() species: string; // Species of animal.

  constructor() { }

  ngOnInit() {
  }

}
