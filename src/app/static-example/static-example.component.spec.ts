import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticExampleComponent } from './static-example.component';

describe('StaticExampleComponent', () => {
  let component: StaticExampleComponent;
  let fixture: ComponentFixture<StaticExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
