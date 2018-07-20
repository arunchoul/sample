import { TestBed, inject } from '@angular/core/testing';

import { ViewEditService } from './view-edit.service';

describe('ViewEditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewEditService]
    });
  });

  it('should be created', inject([ViewEditService], (service: ViewEditService) => {
    expect(service).toBeTruthy();
  }));
});
