import { Component, OnInit } from '@angular/core';
import { AnimalServiceService } from 'src/app/services/animal-service.service';
import { Animal } from '../../interfaces/animal';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  animals: [Animal]; // Array holding animals to display in the search cards.

  constructor(private animalService: AnimalServiceService) {
    // On Load, all animals should be displayed.
    this.animals = this.animalService.getAllAnimals();
   }

  ngOnInit() {
    // Subscribe to animal subject.  Animals that match filter criteria are pushed by this subject.
    this.animalService.animalSubject.subscribe({
      next: value => {
        this.animals = value;
      }
    });
  }
}
