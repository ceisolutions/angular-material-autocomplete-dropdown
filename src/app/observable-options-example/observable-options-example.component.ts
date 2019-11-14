import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SelectListItem } from 'projects/autocomplete-dropdown/src/lib/select-list-item';
import { FormGroup, FormControl } from '@angular/forms';
import { map } from 'rxjs/internal/operators/map';
import { JsonPipe } from '@angular/common';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-observable-options-example',
  templateUrl: './observable-options-example.component.html',
  styleUrls: ['./observable-options-example.component.scss']
})
export class ObservableOptionsExampleComponent implements OnInit {
  formValues: Observable<string>;
  formGroup: FormGroup = new FormGroup(
    {
      observableOptions: new FormControl()
    }
  );

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
  constructor() { }

  ngOnInit() {
    this.formValues = this.formGroup.controls.observableOptions.valueChanges;
  }

}
