export class ClasseAtivo {

  static getClassesDisponiveis(): { codigo: number, nome: string }[] {
    const classes: { codigo: number, nome: string }[] = [
      { codigo: 1, nome: 'Renda Variável' },
      { codigo: 2, nome: 'Renda Fixa' },
      { codigo: 3, nome: 'Fundo de Investimentos' },
      { codigo: 4, nome: 'Previdência Privada' },
      { codigo: 5, nome: 'Criptoativos' },
      { codigo: 6, nome: 'Outros' }
    ];
    return classes;
  }
  static getNomeClassePorCodigo(codigo: number): string {
    const classe = ClasseAtivo.getClassesDisponiveis().find(classe => classe.codigo == codigo);
    return classe ? classe.nome : '';
  }
}
