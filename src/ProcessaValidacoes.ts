export default class ProcessaValidacoes {
  process(...validacoes: Array<Function>) {
    validacoes.forEach((validacao: Function) => {
      validacao();
    });
  }
}
