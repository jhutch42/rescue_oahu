import { Component, OnInit } from '@angular/core';
import { AnimalServiceService } from 'src/app/services/animal-service.service';
import { Rescue } from 'src/app/interfaces/rescue';
import { Animal } from 'src/app/interfaces/animal';
import { _ } from 'underscore';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})

/** Filter bar is loaded dynamically.  Only values that can be found in the database are
 * populated into the dropdowns.
 */
export class FilterBarComponent implements OnInit {

  rescues: [Rescue]; // All rescue data.
  animals: [Animal]; // All Animal Data.
  searchFields: [string]; // Array holding all filter fields.
  searchObjects: any; // Objects that hold the search data.
  searchData: any; // Stores possible drop down values.

  constructor(private animalService: AnimalServiceService) {
    this.rescues = animalService.getRescueData();
    this.animals = animalService.getAllAnimals();
    this.searchFields = animalService.getSearchFields();
    this.searchObjects = [];
    this.searchData = []; // Search data is the currently selected options for each filter.
  }

  ngOnInit() {
    /* Build the search objects. */
    this.constructSearchObjects(this.searchFields, this.rescues, this.animals);
    this.setSearchData(); // Initially search data is set to all for each filter. 
  }

  /** When one of the filter drop downs are changed, the search cards need to be updated.
   * @param id: the filter key.
   * @param val: value that needs to be filtered.
   */
  private updateSearch(id: string, val: any): void {
    // Collect all currently selected filter values so that all selected filters are taken into account.
    this.searchData.forEach(e => {
      if (e.id === id) {
        e.value = val;
      }
    });
    // Pass this data to the animalService so it can update the cards.  Changes will be pushed to search page.
    this.animalService.updateSearch(this.searchData);
  }

  /** When the page is first loaded, set all search values to all so that all animals are loaded */
  private setSearchData(): void {
    this.searchFields.forEach(e => {
      this.searchData.push({id: `${e}`, value: 'all'});
    });
  }

  /** This function populates the drop downs.
   * @param fields All filter fields.
   * @param rescues All rescues on oahu.
   * @param animals All animals in the database.
   */
  private constructSearchObjects(fields: [string], rescues: [Rescue], animals: [Animal]): void {
    /* First, for each field, search through each of the rescues and see if there is a key in the
    ** object that matches that search field.  If it does, then this is a filterable field and its value
    ** should be loaded into the results array. */
    fields.forEach(field => {
      let results = []; // Holds the values that match the key.
      rescues.forEach(rescue => {
        Object.keys(rescue).forEach(key => {
          if (key.toLowerCase() === field.toLowerCase()) {
            results.push(rescue[key]);
          }
        });
      });

      /* Just like the previous loop did for rescues, search the animal objects for the key that matches
      ** A field.  If it matches, load all of the values into the results array. */
      animals.forEach(animal => {
        Object.keys(animal).forEach(key => {
          if (key.toLowerCase() === field.toLowerCase()) {
            results.push(animal[key]);
          }
        });
      });

      /* Loop through the results array and set everything to lowercase to make unique filtering easier. */
      results.forEach((e, index) => {
        if (typeof (e) === 'string') {
          results[index] = e.toLowerCase();
        }
      });

      /* Remove any duplicate results from the unique array. */
      results = _.uniq(results);

      /* Fix the text.  Set the first letter of each string to capital letter.  */
      results.forEach((str, index) => {
        if (typeof (str) === 'string') {
          results[index] = str[0].toUpperCase() + str.slice(1, str.length);
        }
      });

      /* Sort all of the data into alpabetical order. */
      try {
        if (typeof (results[0]) === 'number') {
          results.sort((a, b) => a - b);
        } else {
          results.sort();
        }
      } catch (error) {
        // catch the error if error is empty.
      }

      /* Store this object as a search field and all searchable values */
      this.searchObjects.push({
        id: `${field}`,
        data: results
      });
    });
  }


}
