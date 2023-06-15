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

// Ejercicio 2.

let num = parseInt(prompt("Ingrese un numero del 1 al 5"));

switch (num) {
  case 1:
  case 3:  
  case 5:
    console.log("El numero es impar");  
  break;

  case 0:
  case 2:
  case 4:
    console.log("El numero es par");    
  break;

  default:
    console.log("El numero ingresado es mayor a 5, por lo que no se puede evaluar");
}