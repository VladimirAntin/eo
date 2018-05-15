import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodebookStandardAddComponent } from './codebook-standard-add.component';

describe('CodebookStandardAddComponent', () => {
  let component: CodebookStandardAddComponent;
  let fixture: ComponentFixture<CodebookStandardAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodebookStandardAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodebookStandardAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
