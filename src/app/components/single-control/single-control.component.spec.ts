import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleControlComponent } from './single-control.component';

describe('SingleControlComponent', () => {
  let component: SingleControlComponent;
  let fixture: ComponentFixture<SingleControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
