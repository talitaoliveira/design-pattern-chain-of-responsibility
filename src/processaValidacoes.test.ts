import ProcessaValidacoes from "./ProcessaValidacoes";

const pessoaInscrita = {
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

    const processaValidacoes = new ProcessaValidacoes();
    // when
    processaValidacoes.process(pessoaInscrita, primeiraValidacao);
    // then
    expect(primeiraValidacao).toHaveBeenCalled();
  });

  it("deve passar por duas validações", () => {
    // given
    const primeiraValidacao = jest.fn();
    const segundaValidacao = jest.fn();

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
    const primeiraValidacao = jest.fn();
    const segundaValidacao = jest.fn();
    const terceiraValidacao = jest.fn();

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
        console.log("validacao 1");
        if (pessoa.carteiraOAB === false) {
          proximaValidacao();
        }
      });
    const segundaValidacao = jest
      .fn()
      .mockImplementation((pessoa, proximaValidacao: Function) => {
        console.log("validacao 2");
      });

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
