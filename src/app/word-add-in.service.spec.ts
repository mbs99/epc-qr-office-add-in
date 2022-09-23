import { TestBed } from '@angular/core/testing';

import { WordAddInService } from './word-add-in.service';

describe('WordAddInService', () => {
  let service: WordAddInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordAddInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
