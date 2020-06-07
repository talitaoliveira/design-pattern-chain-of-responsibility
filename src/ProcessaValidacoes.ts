export default class ProcessaValidacoes {
  process(validacao1: Function, validacao2: Function) {
    validacao1();
    validacao2();
  }
}
