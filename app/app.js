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

/*---------Ejecicio N°1---------*/
let number1 = prompt("Ingresa un Valor");
let number2 = prompt("Ingresa un Valor");
let number3 = prompt("Ingresa un Valor");


if (number1 == number2 || number1 == number3 || number2 == number3){
  console.log("Dos o mas numeros son iguales");
}
else {
  console.log("El mayor numero es:", Math.max(number1, number2, number3));
}
