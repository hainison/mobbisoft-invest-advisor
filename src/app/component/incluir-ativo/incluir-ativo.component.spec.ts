import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirAtivoComponent } from './incluir-ativo.component';

describe('IncluirAtivoComponent', () => {
  let component: IncluirAtivoComponent;
  let fixture: ComponentFixture<IncluirAtivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncluirAtivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncluirAtivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
