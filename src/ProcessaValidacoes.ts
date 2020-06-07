import { PessoaInscrita } from "./types";

export default class ProcessaValidacoes {
  process(pessoaInscrita: PessoaInscrita, ...validacoes: Array<Function>) {
    validacoes = validacoes.map((validacao: Function, index) => {
      return () => {
        validacao(pessoaInscrita, validacoes[index + 1]);
      };
    });

    validacoes[0]();
  }
}
