import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoEvolucaoPatrimonioComponent } from './grafico-evolucao-patrimonio.component';

describe('GraficoEvolucaoPatrimonioComponent', () => {
  let component: GraficoEvolucaoPatrimonioComponent;
  let fixture: ComponentFixture<GraficoEvolucaoPatrimonioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoEvolucaoPatrimonioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoEvolucaoPatrimonioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
