import { Injectable, HostListener } from '@angular/core';
import { animals } from '../../assets/data/animalData.js';
import { introData } from '../../assets/data/introData.js';
import { rescues } from '../../assets/data/rescues.js';
import { navData } from '../../assets/data/navData.js';
import { searchFields } from '../../assets/data/searchFields.js';
import { Subject } from 'rxjs';
import { Rescue } from '../interfaces/rescue';
import { Animal } from '../interfaces/animal';

@Injectable({
  providedIn: 'root'
})

/** This is the only service on this application.  All data, including animals, rescue, and page content
 * is loaded by this service from js files in JSON format in the assets folder because there is no database
 * currently in use.
 */
export class AnimalServiceService {

  public mobileNavSubject = new Subject<any>(); // Determines which content is displayed
  public animalSubject = new Subject<any>(); // Publishes whichcards should be shown on the search page.

  animals: [Animal]; // Array of all animals in the database.
  mobileBreakpoint: number; // size of screen that determines when to open and close hamburger.
  mobileNavOpen: boolean; // True when mobile nav is displayed, false when hidden.
  innerWidth: number; // Width of the window.

  constructor() {
    /* When the page is loaded, populat the array with all animal data.  Without a database, this is easier than
    trying to get data from a JSON file */
    this.animals = animals;
    this.mobileBreakpoint = 600; // Size of mobile css.
    this.innerWidth = window.innerWidth;  // Set inner width to current screen size.
    this.mobileNavOpen = false; // Mobile nav always begins collapsed.
  }

  /** Returns an animal based on its id number.
   * @param id: the id of the animal to get.
   * @return Animal object.
   */
  public getAnimal(id: number): Animal {
    return this.animals[id];
  }

  /** Gets a random animal.
   * @return Animal Object.
   */
  public getRandomAnimal(): Animal {
    return this.getAnimal(Math.floor(Math.random() * this.animals.length - 1));
  }

  /** Gets content for a specific page. 
   * @param id: Defines which content is necessary.
   * @return the data requested by the component.
   */
  public getData(id: string): object {
    if (id === 'intro') {
      return introData;
    }
  }

  /**  Gets the navigation data.
   * @return A list of titles and routes to populate the navigation bar.
   */
  getNavData(): object {
    return navData;
  }

  /** Toggles the hamburger  */
  toggleMobileNav(): void {
    if (this.innerWidth <= this.mobileBreakpoint) {
      this.mobileNavOpen = !this.mobileNavOpen;
    }
    this.mobileNavSubject.next(this.mobileNavOpen);
  }

/** Updates the screen width size when the page is resized .  Then is used to check to see if
 * we should be concerned about the state of the mobild nav bar.
 * @param val: the value of the current width of the screen.
 */
  updateInnerWidth(val): void {
    this.innerWidth = val;
    if (this.innerWidth > this.mobileBreakpoint) {
      this.mobileNavOpen = true;
      this.mobileNavSubject.next(this.mobileNavOpen);
    }
  }

  /** Returns the entire set of rescue data
   * @return All Rescue data.
   */
  getRescueData(): [Rescue] {
    return rescues;
  }

  /** Gets all of the animal data from the JSON file.
   * @return All Animal Data.
   */
  getAllAnimals(): [Animal] {
    return this.animals;
  }

  /** Gets all of the search fields from the JSON file.
   * @return an array holding all fields that can be filtered.
   */
  getSearchFields(): [string] {
    return searchFields;
  }

  /** Update the Search Data whenever a change is made in the filter bar component.
   * @param searchArray: This array holds the content used to run the search algorithm.  It is an
   * array of objects that contains an id: search field, and value: the currently selected value.  Any
   * animals that match that id (key) and value (value) are to be kept in the array and the rest are to
   * be discarded.
   */
  public updateSearch(searchArray: any): void {
    const updatedAnimals = []; // Empty array that will hold animals that match criteria.
    // Loop through each animal in the datbase.
    this.animals.forEach(animal => {
      let match = true; // Sentinal variable.  Starts as true and becomes false if mismatch of any key value pair.
      // Second loop that goes through the each array and finds matches.
      searchArray.forEach(e => {
        // this is the key that we are searching.
        let val = e.id.toString();
        val = val.toLowerCase(); // everything must be in lowercase to make matching easier.
        // Simple case.  If it is all, we know that all animals match.  Otherwise, continue searching.
        if (e.value.toLowerCase() !== 'all') {
          // If the values of the animal and the value of the search field do not match, fllp sentinal to false.
          if (animal[val].toString().toLowerCase() !== e.value.toLowerCase()) {
            match = false;
          }
        }
      });
      // Match will still be true if the animal passed all tests.  If it did, add it to the array.
      if (match) {
        updatedAnimals.push(animal);
      }
    });
    /* Publis all animals that passed the search tests. */
    this.animalSubject.next(updatedAnimals);
  }
}
