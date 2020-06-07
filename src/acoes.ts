import { PessoaInscrita } from "./types";

export const acaoEntregarCarteira = (pessoaInscrita: PessoaInscrita) => {
  console.log(
    `Parabéns ${pessoaInscrita.nome}, tome aqui sua carteirinha da OAB!`
  );
  return "Parabéns, tome aqui sua carteirinha da OAB!";
};
