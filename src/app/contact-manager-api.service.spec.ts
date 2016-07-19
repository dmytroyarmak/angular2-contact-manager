/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { ContactManagerApiService } from './contact-manager-api.service';

describe('ContactManagerApi Service', () => {
  beforeEachProviders(() => [ContactManagerApiService]);

  it('should ...',
      inject([ContactManagerApiService], (service: ContactManagerApiService) => {
    expect(service).toBeTruthy();
  }));
});
