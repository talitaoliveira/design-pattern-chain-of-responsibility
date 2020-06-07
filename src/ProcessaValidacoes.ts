import { PessoaInscrita } from "./types";

export default class ProcessaValidacoes {
  process(pessoaInscrita: PessoaInscrita, ...validacoes: Array<Function>) {
    let handlers = [];

    handlers = validacoes.map((validacao: Function, index) => {
      return () => {
        validacao(pessoaInscrita, validacoes[index + 1]);
      };
    });

    handlers[0]();
  }
}
