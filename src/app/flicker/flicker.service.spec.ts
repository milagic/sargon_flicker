import { TestBed } from '@angular/core/testing';

import { FlickerService } from './flicker.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('FlickerService', () => {
  let service: FlickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(FlickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
