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

// Ejercicio 1

  // let numero1 = parseInt(prompt("ingrese el numero 1"));
  // let numero2 = parseInt(prompt("ingrese el numero 2"));
  // let numero3 = parseInt(prompt("ingrese el numero 3"));

  // if (numero1 > numero2 && numero1 > numero3 ) {
  //    console.log("el numero 1 es mayor")
  // } 
  // else if (numero2 > numero1 && numero2 > numero3 ) {
  //   console.log("numero 2 es mayor")
  // }
  // else if (numero3 > numero1 && numero3 > numero2 ) {
  //   console.log("numero 3 es mayor")
  // }
  // else {
  //   console.log("Los numeros son iguales")
  // }

// Ejercicio 2

// let numero = parseInt(prompt("ingrese un numero"))

// if (numero % 2 == 0){
//   console.log("numero par")
// }
// else {
//   console.log("numero impar")
// }

// Ejercicio 3

// let numero = parseInt(prompt('ingrese un numero'));

// let divisores=0;

// for(let i =1 ; i <=numero ; i ++) {
//  if(numero % i  == 0)
//    divisores = divisores + 1
// }
// if(divisores==2)
//   console.log('es primo');
// else{
//   console.log('no primo');
// }

// Ejercicio 4

// let nota = prompt("Ingrese la nota").toUpperCase();

// if (nota == "A") {
//   console.log("Excelente");
// }
// else if (nota == "B") {
//   console.log("Buena");
// }
// else if (nota == "C") {
//   console.log("Regular");
// }
// else if (nota == "D") {
//   console.log("Suficiente");
// }
// else if (nota == "F") {
//   console.log("No Suficiente");
// }
// else {
//   console.log("Ingrese una nota valida (A-B-C-D-F)");
// }

///////////////////////////////////////////////////////////////////////////////////////

// EJERCICIOS CON SWITCH

// Ejercicio 2 con switch.

// let num = parseInt(prompt("Ingrese un numero del 1 al 5"));

// switch (num) {
//   case 1:
//   case 3:  
//   case 5:
//     console.log("El numero es impar");  
//   break;

//   case 0:
//   case 2:
//   case 4:
//     console.log("El numero es par");    
//   break;

//   default:
//     console.log("El numero ingresado es mayor a 5, por lo que no se puede evaluar");
// }

// Ejercicio 3 con switch.

// let numero = parseInt(prompt("Ingrese un numero del 1 al 10"));

// switch (numero) {
//   case 2:
//   case 3:  
//   case 5:
//   case 7:
//     console.log("El numero es primo");  
//   break;

//   case 0:
//   case 1:
//   case 4:
//   case 6:
//   case 8:
//   case 9:
//   case 10:
//     console.log("El numero no es primo");    
//   break;

//   default:
//     console.log("El numero ingresado es mayor a 10, por lo que no se puede evaluar");
// }

// Ejercicio 4 con switch.

// let nota = prompt("Ingrese la nota").toUpperCase();

// switch (nota) {
//   case "A":
//     console.log("Excelente");
//   break
//   case "B":
//     console.log("Buena");
//   break
//   case "C":
//     console.log("Regular");
//   break
//   case "D":
//     console.log("Suficiente");
//   break
//   case "F":
//     console.log("No Suficiente");
//   break
//   default:
//     console.log("La nota ingresada no es valida");
// }
