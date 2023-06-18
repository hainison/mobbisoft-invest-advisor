import { TestBed } from '@angular/core/testing';

import { DetalheClasseAtivosService } from './detalhe-classe-ativos.service';

describe('DetalheClasseAtivosService', () => {
  let service: DetalheClasseAtivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalheClasseAtivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
