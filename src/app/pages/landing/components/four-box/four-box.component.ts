import { Component, OnInit, Input } from '@angular/core';
import { AnimalServiceService } from 'src/app/services/animal-service.service';


@Component({
  selector: 'app-four-box',
  templateUrl: './four-box.component.html',
  styleUrls: ['./four-box.component.css']
})
export class FourBoxComponent implements OnInit {

  @Input() type: string; // Defines what data to load into the cards.
  data: any;

  constructor(private animalService: AnimalServiceService) {
   }

  ngOnInit() {
    this.data = this.animalService.getData(this.type);
  }

}
