import { PessoaInscrita } from "./types";

export default class ProcessaValidacoes {
  pessoaParaValidar: PessoaInscrita;
  validacoes: Array<Function>;
  acoes: Array<Function>;

  constructor(pessoaParaValidar: PessoaInscrita) {
    this.pessoaParaValidar = pessoaParaValidar;
    this.validacoes = [];
    this.acoes = [];
  }

  setValidacoes(...validacoes: Array<Function>) {
    this.validacoes = validacoes;
    return this;
  }

  setAcoes(...acoes: Array<Function>) {
    this.acoes = acoes;
    return this;
  }

  process() {
    let validacoesEAcoes = [...this.validacoes, ...this.acoes];

    validacoesEAcoes = validacoesEAcoes.map((validacao: Function, index) => {
      return () => {
        validacao(this.pessoaParaValidar, validacoesEAcoes[index + 1]);
      };
    });

    validacoesEAcoes[0]();
  }
}
