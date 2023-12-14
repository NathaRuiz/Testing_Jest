class FizzBuzz {
    validar_primos_3_5(numero) {
        return (numero % 3 === 0 && numero % 5 === 0) ? "FizzBuzz" :
               (numero % 3 === 0) ? "Fizz" :
               (numero % 5 === 0) ? "Buzz" :
               numero;
    }
}

module.exports = FizzBuzz;