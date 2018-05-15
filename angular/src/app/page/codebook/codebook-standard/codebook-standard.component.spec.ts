import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodebookStandardComponent } from './codebook-standard.component';

describe('CodebookStandardComponent', () => {
  let component: CodebookStandardComponent;
  let fixture: ComponentFixture<CodebookStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodebookStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodebookStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
