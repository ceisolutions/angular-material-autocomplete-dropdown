import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { SelectListItem } from './select-list-item';
import { AbstractControl, FormControl } from '@angular/forms';
import { MatAutocompleteTrigger, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { debounceTime, switchMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
@Component({
  selector: 'cei-autocomplete-dropdown',
  templateUrl: './autocomplete-dropdown.component.html',
  styleUrls: ['./autocomplete-dropdown.component.scss']
})
export class AutocompleteDropdownComponent implements OnInit {
  @ViewChild('input', { static: false, read: MatAutocompleteTrigger }) trigger: MatAutocompleteTrigger;
  @Input() floatLabel: string;
  @Input() placeholder: string;
  @Input() hint: string;
  @Input() options: SelectListItem[];
  @Input() control: AbstractControl;
  @Input() size: 's' | 'm' | 'l' | 'xl' | 'auto' = 'm';

  viewControl: AbstractControl;


  options$: Observable<SelectListItem[]>;
  constructor() { }

  ngOnInit() {
    if (!(this.control.value instanceof Array) || !this.control.value) {
      this.control.setValue([]);
    }

    this.viewControl = new FormControl('');

    this.options$ = this.viewControl.valueChanges
      .pipe(
        debounceTime(200),
        switchMap((q: string) => {
          if (!q) {
            return of(this.displayOnEmpty());
          } else {
            return of(this.options.filter(items => items.viewValue.toLocaleLowerCase().includes(q.toLocaleLowerCase()))
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
    const index = this.indexOfItem(e.option.value);
    if (index >= 0) {
      e.option.value.isSelected = false;
      this.remove(index);
    } else {
      e.option.value.isSelected = true;
      this.add(e.option.value);
    }
    this.control.markAsDirty();
    this.viewControl.setValue(undefined);
    this.control.updateValueAndValidity();
  }

  private add(item: SelectListItem): void {
    this.control.value.push(item);
  }

  private remove(index: number): void {
    const controlArr = <any[]>(this.control.value);
    controlArr.splice(index, 1);
  }

  displayOnEmpty(): SelectListItem[] {
    return this.options.map(item => {
      if (this.control.value.findIndex((controlVal: SelectListItem) => controlVal.viewValue === item.viewValue) > -1) {
        item.isSelected = true;
      } else {
        item.isSelected = false;
      }
      return item;
    }).sort((first, second) => {
      if (first.isSelected && !second.isSelected) {
        return -1;
      } else if (!first.isSelected && second.isSelected) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  indexOfItem(itemValue: any): number {
    return this.control.value.findIndex(arrayItem => arrayItem.value === itemValue);
  }

  autocompleteDisplay(option?: SelectListItem): string | undefined {
    return option ? option.viewValue : undefined;
  }

  clearControl() {
    this.control.setValue([]);
    this.viewControl.setValue(undefined);
  }
}
