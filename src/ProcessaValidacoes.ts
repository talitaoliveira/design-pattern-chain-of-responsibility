import { PessoaInscrita } from "./types";

export default class ProcessaValidacoes {
  pessoaParaValidar: PessoaInscrita;

  constructor(pessoaParaValidar: PessoaInscrita) {
    this.pessoaParaValidar = pessoaParaValidar;
  }

  process(...validacoes: Array<Function>) {
    validacoes = validacoes.map((validacao: Function, index) => {
      return () => {
        validacao(this.pessoaParaValidar, validacoes[index + 1]);
      };
    });

    validacoes[0]();
  }
}
