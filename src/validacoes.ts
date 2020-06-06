import { PessoaInscrita } from "./types";

export const validaPossuiACarteira = (pessoaInscrita: PessoaInscrita) => {
  return pessoaInscrita.carteiraOAB;
};
