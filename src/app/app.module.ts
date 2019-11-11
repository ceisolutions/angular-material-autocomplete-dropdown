import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AutocompleteDropdownModule } from 'autocomplete-dropdown';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AutocompleteDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
