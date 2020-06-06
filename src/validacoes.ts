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
  if (
    pessoaInscrita.notaPrimeiraFase >= 7 &&
    pessoaInscrita.notaSegundaFase >= 7
  ) {
    proximaValidacao();
  }
};

export const validaUltimosPeriodos = (
  pessoaInscrita: PessoaInscrita,
  proximaValidacao: Function
) => {
  if (pessoaInscrita.periodo >= 8) {
    proximaValidacao();
  }
};
