import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaClasseAtivoComponent } from './lista-classe-ativo.component';

describe('ListaClasseAtivoComponent', () => {
  let component: ListaClasseAtivoComponent;
  let fixture: ComponentFixture<ListaClasseAtivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaClasseAtivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaClasseAtivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
