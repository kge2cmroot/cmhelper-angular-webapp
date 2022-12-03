import { TestBed } from '@angular/core/testing';

import { LinkCompletionService } from './link-completion.service';

describe('LinkCompletionService', () => {
  let service: LinkCompletionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkCompletionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
