import { Component, Input, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'grafico-evolucao-patrimonio',
  template: `
    <div class="grafico">
      <canvas baseChart
              [datasets]="data"
              [labels]="labels"
              [options]="options"
              [legend]="legend"
              [plugins]="plugins">
      </canvas>
    </div>
  `,
  styleUrls: ['./grafico-evolucao-patrimonio.component.scss']
})
export class GraficoEvolucaoPatrimonioComponent implements OnInit {
  @Input() data: ChartDataset[] = [];
  @Input() labels: string[] = [];
  @Input() options: ChartOptions = {};
  @Input() legend = true;
  @Input() type: ChartType = 'line';
  plugins = [];

  ngOnInit(): void {
    // Gerando um conjunto de dados fictício para exibir no gráfico
    const dataset: ChartDataset = {
      label: 'Evolução do Patrimônio',
      data: [1000, 1200, 1500, 1800, 2000, 2300, 2500],
      borderColor: 'blue',
      backgroundColor: 'rgba(0, 123, 255, 0.2)',
    };

    this.data = [dataset];
    this.labels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'];

    // Configurando as opções do gráfico
    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };
  }
}
