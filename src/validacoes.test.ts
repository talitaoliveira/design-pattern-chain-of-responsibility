describe("Valicações", () => {
  it("deve validar se a pessoa já possui a carteirinha ou nao", () => {
    // given
    const pessoa = {
      carteiraOAB: false,
      notaPrimeiraFase: 7,
      notaSegundaFase: 8,
      periodo: 8,
    };
    // when
    const possuiCarteira = validaPossuiACarteira(pessoa);
    // then
    expect(possuiCarteira).toBe(false);
  });
});
