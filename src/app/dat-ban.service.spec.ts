import { TestBed } from '@angular/core/testing';

import { DatBanService } from './dat-ban.service';

describe('DatBanService', () => {
  let service: DatBanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatBanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
