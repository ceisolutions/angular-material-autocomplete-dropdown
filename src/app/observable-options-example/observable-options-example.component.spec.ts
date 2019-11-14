import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableOptionsExampleComponent } from './observable-options-example.component';

describe('ObservableOptionsExampleComponent', () => {
  let component: ObservableOptionsExampleComponent;
  let fixture: ComponentFixture<ObservableOptionsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableOptionsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableOptionsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
