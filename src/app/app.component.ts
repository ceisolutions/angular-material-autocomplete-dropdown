import { FormGroup, FormControl } from '@angular/forms';
import { SelectListItem } from './../../projects/autocomplete-dropdown/src/lib/select-list-item';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formGroup: FormGroup = new FormGroup(
    {
      dropdownOptions: new FormControl(),
      observableOptions: new FormControl()
    }
  );

  floatLabel = 'Enter an Employee Name';
  placeholder = 'Look for someone';
  hint = 'Enter a name';
  controlId = 'dropdownOptions';
  options: SelectListItem[] = [
    {
      value: 'Steven Hook',
      viewValue: 'Steve H.',
      isSelected: false
    },
    {
      value: 'Aaron Cooper',
      viewValue: 'Aaron C.',
      isSelected: false
    },
    {
      value: 'John Ha',
      viewValue: 'John H.',
      isSelected: false
    },
    {
      value: 'Mike Oles',
      viewValue: 'Mike O.',
      isSelected: false
    },
    {
      value: 'Alec Trievel',
      viewValue: 'Alec T.',
      isSelected: false
    }
  ];

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

}
