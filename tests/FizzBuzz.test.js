const {expect} = require("@jest/globals");
const FizzBuzz = require("../FizzBuzz.js");


describe("Test que valida los multiplos de 3 y 5", () => {
    const fizzBuzz = new FizzBuzz();
  
    const runTest = (numero_ingresado, respuesta_esperada) => {
      const respuesta_recibida = fizzBuzz.validar_primos_3_5(numero_ingresado);
      expect(respuesta_recibida).toBe(respuesta_esperada);
    };
  
    test("Test devuelve el mismo numero ingresado cuando no es divisible por 3 y 5", () => {
      runTest(11, 11);
    });

    test("Test devuelve FizzBuzz cuando divisible por 3 y 5", () => {
      runTest(15, "FizzBuzz");
    });

    test("Test devuelve Fizz cuando divisible por 3", () => {
      runTest(3, "Fizz");
    });
  
    test("Test devuelve Buzz cuando divisible por 5", () => {
      runTest(5, "Buzz");
    });
  
    
  });