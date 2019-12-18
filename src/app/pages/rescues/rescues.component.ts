import { Component, OnInit } from '@angular/core';
import { AnimalServiceService } from '../../services/animal-service.service';
import { Rescue } from '../../interfaces/rescue';
@Component({
  selector: 'app-rescues',
  templateUrl: './rescues.component.html',
  styleUrls: ['./rescues.component.css']
})
export class RescuesComponent implements OnInit {

  title: string;
  subtitle: string;
  coverImageUrl: string;
  rescues: [Rescue]; // All Oahu Animal Rescue Data


  /** Set all component content in constructor  */
  constructor(private animalService: AnimalServiceService) {
    this.title = 'Local Rescue Organizations';
    this.subtitle = 'Explore the many animal rescues on Oahu.';
    this.coverImageUrl = '../assets/images/rescues.jpg';
    this.rescues = this.animalService.getRescueData();
   }

  ngOnInit() {
  }

}
