const soma = function (x, y) {
  return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
  console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(4, 7, soma)
imprimirResultado(1, 5, function (x, y) {
  return x - y
})
imprimirResultado(5, 9, (x, y) => x * y)
const pessoa = {
  falar: function () {
    console.log('Opa')
  }
}

pessoa.falar()