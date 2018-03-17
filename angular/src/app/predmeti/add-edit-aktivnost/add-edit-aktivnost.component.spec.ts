import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAktivnostComponent } from './add-edit-aktivnost.component';

describe('AddEditAktivnostComponent', () => {
  let component: AddEditAktivnostComponent;
  let fixture: ComponentFixture<AddEditAktivnostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditAktivnostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditAktivnostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
