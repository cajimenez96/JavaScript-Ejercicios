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

//  function esPrimo(numero5) {
//   if (numero5 <= 1) {
//     return false;
//   }

//   for (let i = 2; i < numero5; i++) {
//     if (numero5 % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// // Obtener el número del usuario
// const numero5 = prompt("Ingrese un número:");

// // Verificar si el número es primo
// if (esPrimo(numero5)) {
//   console.log(numero5 + " es un número primo.");
// } else {
//   console.log(numero5 + " no es un número primo.");
// }


// EJERCICIO NUMERO 4

// const numero6=prompt("Ingresa un Numero");

// if (numero6 == 1 || numero6 == 2 || numero6 == 3)   {
//  console.log("Su nota es una F");
//  } else if(numero6 == 4 || numero6 == 5) {
//    console.log("Su nota es una D")
//  } else if (numero6 == 6 || numero6 == 7) {
//    console.log("Su nota es una C");
//  } else if (numero6 == 8) {
//    console.log("Su nota es una B")
//   } else if (numero6 == 9 || numero6 == 10) {
//    console.log("Su nota es una A");
//  }

// EJERCICIO NUMERO 1 - SWITCH

// let numero1 = prompt("Ingrese el primer numero");
// let numero2 = prompt("Ingrese el segundo numero");
// let numero3 = prompt("Ingrese el tercer numero");


// switch(true) { 
//   case (numero1 > numero2 && numero1 > numero3):
//     console.log(numero1 + "  es el mayor numero.");
//     break;

//   case (numero2 > numero1 && numero2 > numero3):
//     console.log(numero2 + " es el mayor numero.");
//     break;

//   case (numero3 > numero1 && numero3 > numero2):
//     console.log(numero3 + "es el mayor numero");
//     break;

//   case (numero1 == numero2 && numero2 == numero3):
//     console.log("los numeros son iguales" + numero1);

// }

// EJERCICIO NUMERO 2 - SWITCH

// let numero1 = prompt("Ingrese el primer numero");

// switch (numero1 % 2){
//   case 0:
//     console.log("Es un numero par");
//     break;

//   case 1:
//       console.log("Es un numero impar");

//   }


// EJERCICIO NUMERO 3 - SWITCH

// let numero = parseInt(prompt("Ingrese un numero"));

// function esPrimo (numero) {

//   switch (true) {
//     case (numero === 1):
//       console.log(numero + " no es primo");
      
      
//     case (numero === 2):
//       console.log(numero + " es primo");
      
    
//     default:

//     for (let i = 2; i < numero; i++) {
      
//       if( numero % i === 0) {
//         console.log(numero + " no es primo");
       
//       }
//     }
//     console.log(numero + " es primo");
    
//   }
// }


// EJERCICIO 4 - SWITCH

let nota = prompt("Ingrese la nota del alumno").toUpperCase();

switch (nota){
  case "A":
    console.log("Excelente");
    break;
  
  case "B":
    console.log("Buena");
    break;
  
  case "C":
    console.log("Regular");
    break;

  case "D":
    console.log("Suficiente");
    break;
  
  case "F":
    console.log("No suficiente");
    break;
}