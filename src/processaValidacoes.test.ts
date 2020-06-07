import ProcessaValidacoes from "./ProcessaValidacoes";

const pessoaInscrita = {
  nome: "Fulano de Tal",
  carteiraOAB: true,
  primeiraFase: true,
  segundaFase: true,
  notaPrimeiraFase: 7,
  notaSegundaFase: 8,
  periodo: 8,
};

describe("Processa validações", () => {
  it("deve passar pela primeira validação", () => {
    // given
    const primeiraValidacao = jest.fn();

    const processaValidacoes = new ProcessaValidacoes(pessoaInscrita);
    // when
    processaValidacoes.process(primeiraValidacao);
    // then
    expect(primeiraValidacao).toHaveBeenCalled();
  });

  it("deve passar por duas validações", () => {
    // given
    const primeiraValidacao = jest
      .fn()
      .mockImplementation((pessoa, proximaValidacao: Function) => {
        if (true) {
          proximaValidacao();
        }
      });
    const segundaValidacao = jest
      .fn()
      .mockImplementation((pessoa, proximaValidacao: Function) => {});

    const processaValidacoes = new ProcessaValidacoes();
    // when
    processaValidacoes.process(
      pessoaInscrita,
      primeiraValidacao,
      segundaValidacao
    );
    // then
    expect(primeiraValidacao).toHaveBeenCalled();
    expect(segundaValidacao).toHaveBeenCalled();
  });

  it("deve passar por tres validações", () => {
    // given
    const primeiraValidacao = jest
      .fn()
      .mockImplementation((pessoa, proximaValidacao: Function) => {
        if (true) {
          proximaValidacao();
        }
      });
    const segundaValidacao = jest
      .fn()
      .mockImplementation((pessoa, proximaValidacao: Function) => {
        if (true) {
          proximaValidacao();
        }
      });

    const terceiraValidacao = jest
      .fn()
      .mockImplementation((pessoa, proximaValidacao: Function) => {});

    const processaValidacoes = new ProcessaValidacoes();
    // when
    processaValidacoes.process(
      pessoaInscrita,
      primeiraValidacao,
      segundaValidacao,
      terceiraValidacao
    );
    // then
    expect(primeiraValidacao).toHaveBeenCalled();
    expect(segundaValidacao).toHaveBeenCalled();
    expect(terceiraValidacao).toHaveBeenCalled();
  });

  it("não deve passar para segunda validação se a primeira não for válida", () => {
    // given
    const primeiraValidacao = jest
      .fn()
      .mockImplementation((pessoa, proximaValidacao: Function) => {
        if (false) {
          proximaValidacao();
        }
      });

    const segundaValidacao = jest
      .fn()
      .mockImplementation((pessoa, proximaValidacao: Function) => {});

    const processaValidacoes = new ProcessaValidacoes();
    // when
    processaValidacoes.process(
      pessoaInscrita,
      primeiraValidacao,
      segundaValidacao
    );
    // then
    expect(primeiraValidacao).toHaveBeenCalled();
    expect(segundaValidacao).not.toHaveBeenCalled();
  });
});
