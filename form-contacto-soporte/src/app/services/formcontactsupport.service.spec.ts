import { TestBed } from '@angular/core/testing';

import { FormcontactsupportService } from './formcontactsupport.service';

describe('FormcontactsupportService', () => {
  let service: FormcontactsupportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormcontactsupportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
