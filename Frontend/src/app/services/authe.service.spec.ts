/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AutheService } from './authe.service';

describe('Service: Authe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutheService]
    });
  });

  it('should ...', inject([AutheService], (service: AutheService) => {
    expect(service).toBeTruthy();
  }));
});
