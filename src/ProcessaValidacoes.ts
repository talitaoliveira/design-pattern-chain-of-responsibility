import { PessoaInscrita } from "./types";

export default class ProcessaValidacoes {
  pessoaParaValidar: PessoaInscrita;
  validacoes: Array<Function>;

  constructor(pessoaParaValidar: PessoaInscrita) {
    this.pessoaParaValidar = pessoaParaValidar;
    this.validacoes = [];
  }

  setValidacoes(...validacoes: Array<Function>) {
    this.validacoes = validacoes;
    return this;
  }

  process() {
    this.validacoes = this.validacoes.map((validacao: Function, index) => {
      return () => {
        validacao(this.pessoaParaValidar, this.validacoes[index + 1]);
      };
    });

    this.validacoes[0]();
  }
}
