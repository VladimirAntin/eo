import { TestBed, inject } from '@angular/core/testing';

import { ZvanjeService } from './zvanje.service';

describe('ZvanjeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZvanjeService]
    });
  });

  it('should be created', inject([ZvanjeService], (service: ZvanjeService) => {
    expect(service).toBeTruthy();
  }));
});
