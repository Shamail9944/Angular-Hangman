import { TestBed } from '@angular/core/testing';

import { HangmanDataService } from './hangman-data.service';

describe('HangmanDataService', () => {
  let service: HangmanDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HangmanDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
