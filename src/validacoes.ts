import { PessoaInscrita } from "./types";

export const validaPossuiACarteira = (
  pessoaInscrita: PessoaInscrita,
  proximaValidacao: Function
) => {
  if (!pessoaInscrita.carteiraOAB) {
    proximaValidacao();
  }
  return pessoaInscrita.carteiraOAB;
};
