import { TestBed, inject } from '@angular/core/testing';

import { DataBaseService } from './database.service';

describe('DatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataBaseService]
    });
  });

  it('should be created', inject([DataBaseService], (service: DataBaseService) => {
    expect(service).toBeTruthy();
  }));
});
