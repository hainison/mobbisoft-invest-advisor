import { TestBed } from '@angular/core/testing';

import { ListaClasseAtivoService } from './lista-classe-ativo.service';

describe('ListaClasseAtivoService', () => {
  let service: ListaClasseAtivoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaClasseAtivoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
