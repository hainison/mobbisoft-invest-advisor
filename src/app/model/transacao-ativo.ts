export interface TransacaoAtivo {
  idClasseAtivo: number;
  idTipoAtivo: number;
  codigoAtivo: string;
  /**1 - Compra / 2 - Venda */
  codigoTipoOperacao: number;
  nomeCorretora: string;
  quantidadeTransacionada: any;
  valorUnitarioTransacionado: any;
  dataTransacao: Date;
}
