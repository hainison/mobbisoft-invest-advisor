export interface TransacaoAtivo {
  idTransacao: number;
  idClasseAtivo: number;
  codigoAtivo: string;
  /**1 - Compra / 2 - Venda */
  codigoTipoOperacao: number;
  nomeCorretora: string;
  quantidadeTransacionada: number;
  valorUnitarioTransacionado: number;
  dataTransacao: Date;

}
