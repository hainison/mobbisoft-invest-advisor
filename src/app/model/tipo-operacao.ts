export class TipoOperacao {
  /**
    ** 1 - Compra
    ** 2 - Venda
     */
  static getTipoOperacaoDisponiveis(): { codigo: number, nome: string }[] {
    const tipo: { codigo: number, nome: string }[] = [
      { codigo: 1, nome: 'Compra' },
      { codigo: 2, nome: 'Venda' }
    ];
    return tipo;
  }
  static getNomeTipoOperacaoPorCodigo(codigo: number): string {
    const tipo = TipoOperacao.getTipoOperacaoDisponiveis().find(tipo => tipo.codigo == codigo);
    return tipo ? tipo.nome : '';
  }
}
