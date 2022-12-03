import { TestBed } from '@angular/core/testing';

import { LinksDictionaryService } from './links-dictionary.service';

describe('LinksDictionaryService', () => {
  let service: LinksDictionaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinksDictionaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
