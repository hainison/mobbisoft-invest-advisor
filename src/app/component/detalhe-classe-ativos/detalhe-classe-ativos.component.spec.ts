import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheClasseAtivosComponent } from './detalhe-classe-ativos.component';

describe('DetalheClasseAtivosComponent', () => {
  let component: DetalheClasseAtivosComponent;
  let fixture: ComponentFixture<DetalheClasseAtivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheClasseAtivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheClasseAtivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
