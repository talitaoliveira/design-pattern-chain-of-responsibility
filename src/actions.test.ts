describe("Ações", () => {
  it("Deve retornar a mensagem 'Parabéns, tome aqui sua carteirinha da OAB!'", () => {
    // given
    // when
    const acaoExecutada = acaoEntregarCarteira(pessoaInscrita);
    // then
    expect(acaoExecutada).toEqual('Parabéns, tome aqui sua carteirinha da OAB!')
  });
});
