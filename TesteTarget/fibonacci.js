const fibonacci = [0, 1];

function addFibonacci(valor) {
  const ultimoElemento = fibonacci[fibonacci.length - 1];
  const penultimoElemento = fibonacci[fibonacci.length - 2];

  if (valor === (ultimoElemento + penultimoElemento)) {
    fibonacci.push(valor);
    console.log(`O número ${valor} foi devidamente inserido e pertence à sequência de Fibonacci.`);
    console.log(fibonacci);
  } else {
    console.log(`O número ${valor} não pertence à sequência de Fibonacci.`);
  }
}
addFibonacci(1);
addFibonacci(2);
addFibonacci(3);