import { TestBed } from '@angular/core/testing';
import { FundsListService } from './funds-list.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FundsListService', () => {
  let service: FundsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(FundsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getFunds function', () => {
    const service: FundsListService = TestBed.get(FundsListService);
    expect(service.getFunds).toBeTruthy();
  });
});
