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

let nota = prompt("Ingrese la nota").toUpperCase();

switch (nota) {
  case "A":
    console.log("Excelente");
  break
  case "B":
    console.log("Buena");
  break
  case "C":
    console.log("Regular");
  break
  case "D":
    console.log("Suficiente");
  break
  case "F":
    console.log("No Suficiente");
  break
  default:
    console.log("La nota ingresada no es valida");
}
