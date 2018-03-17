import { TestBed, inject } from '@angular/core/testing';

import { AktivnostService } from './aktivnost.service';

describe('AktivnostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AktivnostService]
    });
  });

  it('should be created', inject([AktivnostService], (service: AktivnostService) => {
    expect(service).toBeTruthy();
  }));
});
