/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NoticiasService } from './noticias.service';

describe('NoticiasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoticiasService]
    });
  });

  it('should ...', inject([NoticiasService], (service: NoticiasService) => {
    expect(service).toBeTruthy();
  }));
});
