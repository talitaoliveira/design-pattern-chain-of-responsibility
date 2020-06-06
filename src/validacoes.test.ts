import { validaPossuiACarteira, validaFezProvaDuasFases } from "./validacoes";

describe("Valicações", () => {
  describe("Validação da carteirinha", () => {
    it("deve chamar a proxima validacao se a pessoa não possui carteirinha", () => {
      // given
      const pessoa = {
        carteiraOAB: false,
        primeiraFase: true,
        segundaFase: true,
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
    it("não deve chamar a proxima validacao se a pessoa já possui carteirinha", () => {
      // given
      const pessoa = {
        carteiraOAB: true,
        primeiraFase: true,
        segundaFase: true,
        notaPrimeiraFase: 7,
        notaSegundaFase: 8,
        periodo: 8,
      };
      const proximaValidacao = jest.fn();
      // when
      validaPossuiACarteira(pessoa, proximaValidacao);
      // then
      expect(proximaValidacao).not.toHaveBeenCalled();
    });
  });

  describe("Validação das duas fases da prova", () => {
    it("deve chamar a proxima validação caso a pessoa tenha feito as duas fases da prova", () => {
      //given
      const pessoa = {
        carteiraOAB: false,
        primeiraFase: true,
        segundaFase: true,
        notaPrimeiraFase: 7,
        notaSegundaFase: 8,
        periodo: 8,
      };
      const proximaValidacao = jest.fn();
      // when
      validaFezProvaDuasFases(pessoa, proximaValidacao);
      // then
      expect(proximaValidacao).toHaveBeenCalled();
    });

    it("não deve chamar a proxima validação caso a pessoa não tenha feito as duas fases da prova", () => {
      //given
      const pessoa = {
        carteiraOAB: false,
        primeiraFase: true,
        segundaFase: false,
        notaPrimeiraFase: 7,
        notaSegundaFase: 0,
        periodo: 8,
      };
      const proximaValidacao = jest.fn();
      // when
      validaFezProvaDuasFases(pessoa, proximaValidacao);
      // then
      expect(proximaValidacao).not.toHaveBeenCalled();
    });
  });
});
