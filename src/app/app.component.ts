import { FormGroup, FormControl } from '@angular/forms';
import { SelectListItem } from './../../projects/autocomplete-dropdown/src/lib/select-list-item';
import { Component } from '@angular/core';

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
}
