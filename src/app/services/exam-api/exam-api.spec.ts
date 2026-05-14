import { TestBed } from '@angular/core/testing';

import { ExamApi } from './exam-api';

describe('ExamApi', () => {
  let service: ExamApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
