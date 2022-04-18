import { TestBed } from '@angular/core/testing';

import { GitInfoService } from './api-request.service';

describe('GitInfoService', () => {
  let service: GitInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
