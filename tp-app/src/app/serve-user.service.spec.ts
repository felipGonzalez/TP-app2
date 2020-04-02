import { TestBed } from '@angular/core/testing';

import { ServeUserService } from './serve-user.service';

describe('ServeUserService', () => {
  let service: ServeUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
