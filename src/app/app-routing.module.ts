import { HomeComponent } from './home/home.component';
import { ObservableOptionsExampleComponent } from './observable-options-example/observable-options-example.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'observable',
    component: ObservableOptionsExampleComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [RouterModule],
})
export class AppRoutingModule { }
