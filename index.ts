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
    carteiraOAB: false,
    primeiraFase: true,
    segundaFase: true,
    notaPrimeiraFase: 7,
    notaSegundaFase: 8,
    periodo: 8,
  },
  {
    carteiraOAB: true,
    primeiraFase: true,
    segundaFase: true,
    notaPrimeiraFase: 10,
    notaSegundaFase: 9,
    periodo: 8,
  },
];

const processaValidacoes = new ProcessaValidacoes();
pessoasInscritas.forEach((pessoaInscrita: PessoaInscrita) => {
  processaValidacoes.process(
    pessoaInscrita,
    validaPossuiACarteira,
    validaFezProvaDuasFases,
    validaNotaSeteAcima,
    validaUltimosPeriodos,
    acaoEntregarCarteira
  );
});
