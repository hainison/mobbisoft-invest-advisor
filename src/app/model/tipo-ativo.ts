export class TipoAtivo {
  /**
    ** Range > 100 - 'Renda Variável'
    ** Range > 200 - 'Renda Fixa'
    ** Range > 300 - 'Fundo de Investimentos'
    ** Range > 400 - 'Previdência Privada'
    ** Range > 500 - 'Criptoativos'
    ** Range > 600 - 'Outros'
     */
  static getTipoAtivoDisponiveis(): { codigo: number, nome: string }[] {
    const tipoAtivo: { codigo: number, nome: string }[] = [
      //  'Renda Variável'
      { codigo: 101, nome: 'Ações' },
      { codigo: 102, nome: 'FIIs' },
      { codigo: 103, nome: 'ETFs BR' },
      { codigo: 104, nome: 'BDRs' },
      { codigo: 105, nome: 'Stocks' },
      { codigo: 106, nome: 'Reits' },
      { codigo: 107, nome: 'ETFs USA' },

      //  'Renda Fixa'
      { codigo: 201, nome: 'Tesouro direto' },
      { codigo: 202, nome: 'CDB, LCI, LCA, LC ' },
      { codigo: 203, nome: 'CRI, CRA, Debentures' },

      //  'Fundos de Investimentos'
      { codigo: 301, nome: 'Fundos de investimento' },

      //  'Previdência'
      { codigo: 401, nome: 'Previdência' },

      //  'Criptoativos'
      { codigo: 501, nome: 'Cripto/NFT' },

      //  'Outros'
      { codigo: 601, nome: 'Outros' }
    ];
    return tipoAtivo;
  }
  static getNomeTipoAtivoPorCodigo(codigo: number): string {
    const tipoAtivo = TipoAtivo.getTipoAtivoDisponiveis().find(tipoAtivo => tipoAtivo.codigo == codigo);
    return tipoAtivo ? tipoAtivo.nome : '';
  }
}
