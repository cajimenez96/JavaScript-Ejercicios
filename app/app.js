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

// Ejercicio 1.

// const num1 = prompt("Ingresa el primer numero");
// const num2 = prompt("Ingresa el segundo numero");
// const num3 = prompt("Ingresa el tercer numero");

// if (num1 > num2 && num1 > num3) {
//   console.log("El primer numero es el mayor");
// }
// else if (num2 > num1 && num2 > num3) {
//   console.log("El segundo numero es el mayor");
// }
// else if (num3 > num1 && num3 > num2) {
//   console.log("El tercer numero es el mayor");
// }
// else {
//  console.log("Los numeros ingresados son iguales");
// }

//////////////////////////////////////////////////////

// Ejercicio 2.

// const num = parseInt(prompt("Ingrese un numero"));

// if (num % 2 == 0) {
//   console.log("El numero ingresado es par");
// }
// else {
//   console.log("El numero ingresado es impar");
// }

//////////////////////////////////////////////////////

// Ejercicio 3. 

// let numero = prompt("ingrese un numero");
// let divisores = 0;

// for(let i = 1 ; i <= numero ; i++)

// if (numero % i == 0) {
//   divisores++;
// }
// if(divisores == 2){
//   console.log("El numero ingresado es primo");
// }
// else{
//   console.log("El numero ingresado no es primo");
// }

//////////////////////////////////////////////////////

// Ejercicio 4.

const nota = prompt("Ingrese su nota").toUpperCase();

if (nota === "A") {
  console.log("Excelente");
}
else if (nota === "B") {
  console.log("Buena");
}
else if (nota === "C") {
  console.log("Regular");
}
else if (nota === "D") {
  console.log("Suficiente");
}
else if (nota === "F") {
  console.log("No Suficiente");
}
else {
  console.log("La nota ingresada no es valida");
}
