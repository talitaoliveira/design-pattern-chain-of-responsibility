import { acaoEntregarCarteira } from "./actions";

describe("Ações", () => {
  it("Deve retornar a mensagem 'Parabéns, tome aqui sua carteirinha da OAB!'", () => {
    // given
    const pessoa = {
      carteiraOAB: false,
      primeiraFase: true,
      segundaFase: true,
      notaPrimeiraFase: 7,
      notaSegundaFase: 8,
      periodo: 8,
    };
    // when
    const acaoExecutada = acaoEntregarCarteira(pessoa);
    // then
    expect(acaoExecutada).toEqual(
      "Parabéns, tome aqui sua carteirinha da OAB!"
    );
  });
});
