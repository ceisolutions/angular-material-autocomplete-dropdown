import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { SelectListItem } from './select-list-item';
import { FormGroup, AbstractControl, FormControl } from '@angular/forms';
import { MatAutocompleteTrigger, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { debounceTime, switchMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
@Component({
  selector: 'cei-autocomplete-dropdown',
  templateUrl: './autocomplete-dropdown.component.html',
  styles: ['./autocomplete-multiselect.component.scss']
})
export class AutocompleteDropdownComponent implements OnInit {
  @ViewChild('input', { static: false, read: MatAutocompleteTrigger }) trigger: MatAutocompleteTrigger;
  @Input() formGroup: FormGroup;
  @Input() floatLabel: string;
  @Input() placeholder: string;
  @Input() hint: string;
  @Input() options: SelectListItem[];
  @Input() controlId: string;
  viewFormGroup: FormGroup = new FormGroup({});
  control: AbstractControl;


  options$: Observable<SelectListItem[]>;
  constructor() { }

  ngOnInit() {
    this.control = this.formGroup.controls[this.controlId];
    if (!(this.control.value instanceof Array) || !this.control.value) {
      this.control.setValue([]);
    }
    this.viewFormGroup.addControl(this.controlId, new FormControl());

    this.options$ = this.viewFormGroup.controls[this.controlId].valueChanges
      .pipe(
        debounceTime(200),
        switchMap(q => {
          if (!q) {
            return of(
              this.control.value.map((item) => ({
                value: item.value,
                viewValue: item.viewValue,
                isSelected: true
              })));
          } else {
            return of(this.options.filter(items => items.viewValue.toLocaleLowerCase().includes(q))
              .map(data => ({
                value: data.value,
                viewValue: data.viewValue,
                isSelected: this.indexOfItem(data) >= 0
              })));
          }
        })
      );
  }

  onOptionSelected(e: MatAutocompleteSelectedEvent) {
    if (!e.option && !e.option.value) {
      return;
    }
    setTimeout(() => {
      this.trigger.openPanel();
    });
    const index = this.indexOfItem(e.option.value.value);
    if (index >= 0) {
      e.option.value.isSelected = false;
      this.remove(index);
    } else {
      e.option.value.isSelected = true;
      this.add(e.option.value);
    }
    this.control.markAsDirty();
    this.viewFormGroup.controls[this.controlId].setValue(undefined);
    this.control.updateValueAndValidity();
  }

  private add(item: SelectListItem): void {
    this.control.value.push(item);
  }

  private remove(index: number): void {
    const controlArr = <any[]>(this.control.value);
    controlArr.splice(index, 1);
  }

  indexOfItem(itemValue: any): number {
    return this.control.value.findIndex(arrayItem => arrayItem.value === itemValue);
  }

  autocompleteDisplay(option?: SelectListItem): string | undefined {
    return option ? option.viewValue : undefined;
  }

  clearControl() {
    this.control.setValue([]);
    this.viewFormGroup.controls[this.controlId].setValue(undefined);
  }
}
