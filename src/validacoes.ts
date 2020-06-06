import { PessoaInscrita } from "./types";

export const validaPossuiACarteira = (
  pessoaInscrita: PessoaInscrita,
  proximaValidacao: Function
) => {
  if (!pessoaInscrita.carteiraOAB) {
    proximaValidacao();
  }
};

export const validaFezProvaDuasFases = (
  pessoaInscrita: PessoaInscrita,
  proximaValidacao: Function
) => {
  if (pessoaInscrita.segundaFase && pessoaInscrita.primeiraFase) {
    proximaValidacao();
  }
};

export const validaNotaSeteAcima = (
  pessoaInscrita: PessoaInscrita,
  proximaValidacao: Function
) => {
  proximaValidacao();
};
