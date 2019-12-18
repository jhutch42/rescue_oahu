import { Component, OnInit } from '@angular/core';
import { AnimalServiceService } from '../../../../services/animal-service.service';
import { Animal } from 'src/app/interfaces/animal';

@Component({
  selector: 'app-forty-sixty',
  templateUrl: './forty-sixty.component.html',
  styleUrls: ['./forty-sixty.component.css']
})
export class FortySixtyComponent implements OnInit {

  animal: Animal;
  randomInterval: any;

  constructor(private animalService: AnimalServiceService) {
    this.randomAnimal();
   }

  ngOnInit() {
  }

  /** Gets a random animal data from the animal service. */
  randomAnimal(): void {
    this.animal = this.animalService.getRandomAnimal();
  }

}
