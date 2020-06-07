import { PessoaInscrita } from "./types";

export default class ProcessaValidacoes {
  process(pessoaInscrita: PessoaInscrita, ...validacoes: Array<Function>) {
    validacoes.forEach((validacao: Function) => {
      validacao();
    });
  }
}
