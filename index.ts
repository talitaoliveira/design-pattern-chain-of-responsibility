import { PessoaInscrita } from "./src/types";
import {
  validaPossuiACarteira,
  validaFezProvaDuasFases,
  validaNotaSeteAcima,
  validaUltimosPeriodos,
} from "./src/validacoes";

import { acaoEntregarCarteira } from "./src/acoes";

import ProcessaValidacoes from "./src/ProcessaValidacoes";

const pessoasInscritas = [
  {
    nome: "Pessoa 1",
    carteiraOAB: false,
    primeiraFase: true,
    segundaFase: true,
    notaPrimeiraFase: 7,
    notaSegundaFase: 8,
    periodo: 8,
  },
  {
    nome: "Pessoa 2",
    carteiraOAB: false,
    primeiraFase: true,
    segundaFase: true,
    notaPrimeiraFase: 6,
    notaSegundaFase: 9,
    periodo: 8,
  },
];

pessoasInscritas.forEach((pessoaInscrita: PessoaInscrita) => {
  console.log(` ===== Iniciando validações de ${pessoaInscrita.nome}: =====`);
  const processaValidacoes = new ProcessaValidacoes(pessoaInscrita);
  processaValidacoes
    .setValidacoes(
      validaPossuiACarteira,
      validaFezProvaDuasFases,
      validaNotaSeteAcima,
      validaUltimosPeriodos
    )
    .setAcoes(acaoEntregarCarteira)
    .process();
});
