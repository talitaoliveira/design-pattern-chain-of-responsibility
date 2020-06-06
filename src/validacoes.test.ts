import { validaPossuiACarteira } from "./validacoes";

describe("Valicações", () => {
  it("deve validar se a pessoa já possui a carteirinha ou nao", () => {
    // given
    const pessoa = {
      carteiraOAB: false,
      notaPrimeiraFase: 7,
      notaSegundaFase: 8,
      periodo: 8,
    };
    const proximaValidacao = jest.fn();
    // when
    const possuiCarteira = validaPossuiACarteira(pessoa, proximaValidacao);
    // then
    expect(possuiCarteira).toBe(false);
  });

  it("deve chamar a proxima validacao se a pessoa não possui carteirinha", () => {
    // given
    const pessoa = {
      carteiraOAB: false,
      notaPrimeiraFase: 7,
      notaSegundaFase: 8,
      periodo: 8,
    };
    const proximaValidacao = jest.fn();

    // when
    const possuiCarteira = validaPossuiACarteira(pessoa, proximaValidacao);

    // then
    expect(proximaValidacao).toHaveBeenCalled();
  });
});
