import { TestBed, inject } from '@angular/core/testing';

import { TipDokumentaService } from './tip-dokumenta.service';

describe('TipDokumentaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipDokumentaService]
    });
  });

  it('should be created', inject([TipDokumentaService], (service: TipDokumentaService) => {
    expect(service).toBeTruthy();
  }));
});
