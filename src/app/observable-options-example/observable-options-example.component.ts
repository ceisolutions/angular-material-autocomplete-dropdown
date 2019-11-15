import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SelectListItem } from 'projects/autocomplete-dropdown/src/lib/select-list-item';
import { FormGroup, FormControl } from '@angular/forms';
import { DropdownConfig } from 'projects/autocomplete-dropdown/src/lib/dropdown-config';

@Component({
  selector: 'app-observable-options-example',
  templateUrl: './observable-options-example.component.html',
  styleUrls: ['./observable-options-example.component.scss']
})
export class ObservableOptionsExampleComponent implements OnInit {
  controlOneValues: Observable<string>;
  controlTwoValues: Observable<string>;
  formGroup: FormGroup = new FormGroup(
    {
      observableOptions: new FormControl(),
      observableOptionsWithObjects: new FormControl()
    }
  );

  dropdownConfig: DropdownConfig = {
    size: 'xl'
  };

  floatLabel = 'Search for a color of fruit';
  placeholder = 'Find a fruit!';
  hint = 'Enter a name';
  options$: Observable<SelectListItem[]> = of([
    {
      value: 'Cantoloupe',
      viewValue: 'Green Fruit',
      isSelected: false
    },
    {
      value: 'Banana',
      viewValue: 'Yellow Fruit',
      isSelected: false
    },
    {
      value: 'Apple',
      viewValue: 'Red fruit',
      isSelected: false
    },
    {
      value: 'Grape',
      viewValue: 'Purple fruit',
      isSelected: false
    },
    {
      value: 'Orange',
      viewValue: 'Orange fruit',
      isSelected: false
    }
  ]);

  optionsWithObjectViewValue$: Observable<SelectListItem[]> = of([
    {
      value: {name: 'Cantaloupe', color: 'Green'},
      viewValue: 'Green Fruit',
      isSelected: false
    },
    {
      value: {name: 'Banana', color: 'Yellow'},
      viewValue: 'Yellow Fruit',
      isSelected: false
    },
    {
      value: {name: 'Apple', color: 'Red'},
      viewValue: 'Red fruit',
      isSelected: false
    },
    {
      value: {name: 'Grape', color: 'Purple'},
      viewValue: 'Purple fruit',
      isSelected: false
    },
    {
      value: {name: 'Orange', color: 'Orange'},
      viewValue: 'Orange fruit',
      isSelected: false
    }
  ]);

  constructor() { }

  ngOnInit() {
    this.controlOneValues = this.formGroup.controls.observableOptions.valueChanges;
    this.controlTwoValues = this.formGroup.controls.observableOptionsWithObjects.valueChanges;
  }

}
