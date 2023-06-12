/* Estructuras condicionales!!

Vamos a crear nuestro app.js y vamos a tratar de resolver lo siguientes ejercicios aplicando el conocimiento que ya tenemos:

1. Crear una aplicación la cual tendremos que crear 3 números, luego vamos a determinar cual es el mayor y/o si son iguales o no.
2. Creamos una aplicación que determine si un determinado número es par o impar.
3. Creamos una aplicación que determine si un determinado número es primo.
4. Crear una aplicación que deduzca la calificación (A-F) de un alumno y emita el mensaje correspondiente de acuerdo a la nota ingresada:
  A- Excelente
  B- Buena
  C- Regular
  D- Suficiente
  F- No Suficiente */


// EJERCICIO NUMERO 1

  // const numero1=prompt("Ingresa un Numero");
  // const numero2=prompt("Ingresa un Numero");
  // const numero3=prompt("Ingresa un Numero");
  // let maximo = Math.max(numero1, numero2, numero3);

  // if (numero1 == numero2 && numero2 == numero3) {
  //   console.log("Los numeros son iguales", + numero1);
  // }
  // else{
  //   console.log("El numero maximo es " + maximo);
  // }

// EJERCICIO NUMERO 2

// const numero4=prompt("Ingresa un Numero");

// if(numero4 % 2 === 0) {
//   console.log("Es un numero par")
// } else {
//   console.log("Es un numero impar")
// }

// EJERCICIO NUMERO 3

 function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  }

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

// Obtener el número del usuario
const numero = prompt("Ingrese un número:");

// Verificar si el número es primo
if (esPrimo(numero)) {
  console.log(numero + " es un número primo.");
} else {
  console.log(numero + " no es un número primo.");
}




