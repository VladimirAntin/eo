import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPredmetComponent } from './add-edit-predmet.component';

describe('AddEditPredmetComponent', () => {
  let component: AddEditPredmetComponent;
  let fixture: ComponentFixture<AddEditPredmetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditPredmetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPredmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
