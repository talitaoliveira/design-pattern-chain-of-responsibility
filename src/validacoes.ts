import { PessoaInscrita } from "./types";

export const validaPossuiACarteira = (
  pessoaInscrita: PessoaInscrita,
  proximaValidacao: Function
) => {
  if (!pessoaInscrita.carteiraOAB) {
    proximaValidacao();
  }
  return false;
};

export const validaFezProvaDuasFases = (
  pessoaInscrita: PessoaInscrita,
  proximaValidacao: Function
) => {
  if (pessoaInscrita.segundaFase) {
    proximaValidacao();
  }
};
