import {
  validaPossuiACarteira,
  validaFezProvaDuasFases,
  validaNotaSeteAcima,
  validaUltimosPeriodos,
} from "./validacoes";

describe("Valicações", () => {
  describe("Validação da carteirinha", () => {
    it("deve chamar a proxima validação se a pessoa não possui carteirinha", () => {
      // given
      const pessoa = {
        nome: "Alguma Pessoa",
        carteiraOAB: false,
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
      expect(proximaValidacao).toHaveBeenCalled();
    });
    it("não deve chamar a proxima validação se a pessoa já possui carteirinha", () => {
      // given
      const pessoa = {
        nome: "Alguma Pessoa",
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
        nome: "Alguma Pessoa",
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

    it("não deve chamar a proxima validação caso a pessoa não tenha feito a segunda fase da prova", () => {
      //given
      const pessoa = {
        nome: "Alguma Pessoa",
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

    it("não deve chamar a proxima validação caso a pessoa não tenha feito a primeira fase da prova", () => {
      //given
      const pessoa = {
        nome: "Alguma Pessoa",
        carteiraOAB: false,
        primeiraFase: false,
        segundaFase: true,
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

  describe("Validação de notas acima de 7", () => {
    it("deve chamar a proxima validação caso a pessoa tenha a nota das duas provas igual ou maior que 7 ", () => {
      //given
      const pessoa = {
        nome: "Alguma Pessoa",
        carteiraOAB: false,
        primeiraFase: false,
        segundaFase: true,
        notaPrimeiraFase: 7,
        notaSegundaFase: 7,
        periodo: 8,
      };
      const proximaValidacao = jest.fn();
      // when
      validaNotaSeteAcima(pessoa, proximaValidacao);
      // then
      expect(proximaValidacao).toHaveBeenCalled();
    });

    it("não deve chamar a proxima validação caso a pessoa tenha alguma nota menor que 7 ", () => {
      //given
      const pessoa = {
        nome: "Alguma Pessoa",
        carteiraOAB: false,
        primeiraFase: false,
        segundaFase: true,
        notaPrimeiraFase: 5,
        notaSegundaFase: 7,
        periodo: 8,
      };
      const proximaValidacao = jest.fn();
      // when
      validaNotaSeteAcima(pessoa, proximaValidacao);
      // then
      expect(proximaValidacao).not.toHaveBeenCalled();
    });
  });

  describe("Validação de período na faculdade", () => {
    it("deve chamar a proxima validação se a pessoa estiver a 2 periodos de terminar o curso", () => {
      //given
      const pessoa = {
        nome: "Alguma Pessoa",
        carteiraOAB: false,
        primeiraFase: false,
        segundaFase: true,
        notaPrimeiraFase: 5,
        notaSegundaFase: 7,
        periodo: 8,
      };
      const proximaValidacao = jest.fn();
      // when
      validaUltimosPeriodos(pessoa, proximaValidacao);
      // then
      expect(proximaValidacao).toHaveBeenCalled();
    });

    it("não deve chamar a proxima validação se faltar mais de 2 periodos de terminar o curso", () => {
      //given
      const pessoa = {
        nome: "Alguma Pessoa",
        carteiraOAB: false,
        primeiraFase: false,
        segundaFase: true,
        notaPrimeiraFase: 5,
        notaSegundaFase: 7,
        periodo: 6,
      };
      const proximaValidacao = jest.fn();
      // when
      validaUltimosPeriodos(pessoa, proximaValidacao);
      // then
      expect(proximaValidacao).not.toHaveBeenCalled();
    });
  });
});
