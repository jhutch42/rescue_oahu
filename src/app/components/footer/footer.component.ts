import { Component, OnInit } from '@angular/core';
import { AnimalServiceService } from 'src/app/services/animal-service.service';
import { Rescue } from 'src/app/interfaces/rescue';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // Contains all rescue data.  Loaded from Animal Service.
  private rescues: [Rescue];

  constructor(private animalService: AnimalServiceService) {
    this.rescues = this.animalService.getRescueData();
   }

  ngOnInit() {
  }

}
