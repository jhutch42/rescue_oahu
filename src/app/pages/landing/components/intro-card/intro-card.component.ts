import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-card',
  templateUrl: './intro-card.component.html',
  styleUrls: ['./intro-card.component.css']
})
export class IntroCardComponent implements OnInit {

  @Input() title: string; // Title of the card
  @Input() image: string; // Image url.
  @Input() link: string; // Route.

  constructor() { }

  ngOnInit() {
  }

}
