import { PessoaInscrita } from "./types";

export const validaPossuiACarteira = (
  pessoaInscrita: PessoaInscrita,
  proximaValidacao: Function
) => {
  if (!pessoaInscrita.carteiraOAB) {
    console.log(
      `[PASSOU]: ${pessoaInscrita.nome} passou na validação da carteirinha... indo para a proxima validação...`
    );
    proximaValidacao();
  }
  console.log(
    `[NÃO PASSOU]: ${pessoaInscrita.nome} NÃO passou na validação da carteirinha... não vai para proxima validação`
  );
};

export const validaFezProvaDuasFases = (
  pessoaInscrita: PessoaInscrita,
  proximaValidacao: Function
) => {
  if (pessoaInscrita.segundaFase && pessoaInscrita.primeiraFase) {
    console.log(
      `[PASSOU]: ${pessoaInscrita.nome} passou na validação das fases da prova... indo para a proxima validação...`
    );
    proximaValidacao();
  }
  console.log(
    `[NÃO PASSOU]: ${pessoaInscrita.nome} NÃO passou na validação das fases da prova... não vai para proxima validação`
  );
};

export const validaNotaSeteAcima = (
  pessoaInscrita: PessoaInscrita,
  proximaValidacao: Function
) => {
  if (
    pessoaInscrita.notaPrimeiraFase >= 7 &&
    pessoaInscrita.notaSegundaFase >= 7
  ) {
    console.log(
      `[PASSOU]: ${pessoaInscrita.nome} passou na validação das notas... indo para a proxima validação...`
    );
    proximaValidacao();
  }
  console.log(
    `[NÃO PASSOU]: ${pessoaInscrita.nome} NÃO passou na validação das notas... não vai para proxima validação`
  );
};

export const validaUltimosPeriodos = (
  pessoaInscrita: PessoaInscrita,
  proximaValidacao: Function
) => {
  if (pessoaInscrita.periodo >= 8) {
    console.log(
      `[PASSOU]: ${pessoaInscrita.nome} passou na validação das notas... Fim das validações, indo para ação...`
    );
    proximaValidacao();
  }
  console.log(
    `[NÃO PASSOU]: ${pessoaInscrita.nome} NÃO passou na validação das notas... não vai para ação`
  );
};
