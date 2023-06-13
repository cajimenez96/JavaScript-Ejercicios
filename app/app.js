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


/* Ejercicio N°1*/
const numero1 = prompt("ingresa un numero");
const numero2 = prompt("ingresa un numero");
const numero3 = prompt("ingresa un numero");

if (numero1 > numero2 && numero1 > numero3){
  console.log("el numero1 es mayor");
}else if (numero2 > numero1 && numero2 > numero3){
  console.log("el numero2 es mayor");
}else if (numero3 > numero1 && numero3 > numero2){
  console.log("el numero3 es mayor");
} else{
  console.log('son iguales');
}

