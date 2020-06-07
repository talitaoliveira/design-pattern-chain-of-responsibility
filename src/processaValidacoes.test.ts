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
});
