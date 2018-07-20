import { TestBed, inject } from '@angular/core/testing';

import { AdddetailsService } from './adddetails.service';

describe('AdddetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdddetailsService]
    });
  });

  it('should be created', inject([AdddetailsService], (service: AdddetailsService) => {
    expect(service).toBeTruthy();
  }));
});
