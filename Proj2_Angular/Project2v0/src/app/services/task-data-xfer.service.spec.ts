import { TestBed } from '@angular/core/testing';

import { TaskDataXferService } from './task-data-xfer.service';

describe('TaskDataXferService', () => {
  let service: TaskDataXferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskDataXferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
