import ProcessaValidacoes from "./ProcessaValidacoes";

describe("Processa validações", () => {
  it("deve passar pela primeira validação", () => {
    // given
    const primeiraValidacao = jest.fn();

    const processaValidacoes = new ProcessaValidacoes();
    // when
    processaValidacoes.process(primeiraValidacao);
    // then
    expect(primeiraValidacao).toHaveBeenCalled();
  });

  it("deve passar por duas validações", () => {
    // given
    const primeiraValidacao = jest.fn();
    const segundaValidacao = jest.fn();

    const processaValidacoes = new ProcessaValidacoes();
    // when
    processaValidacoes.process(primeiraValidacao, segundaValidacao);
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
    const primeiraValidacao = jest.fn();
    const segundaValidacao = jest.fn();

    const processaValidacoes = new ProcessaValidacoes();
    // when
    processaValidacoes.process(primeiraValidacao, segundaValidacao);
    // then
    expect(primeiraValidacao).toHaveBeenCalled();
    expect(segundaValidacao).not.toHaveBeenCalled();
  });
});
