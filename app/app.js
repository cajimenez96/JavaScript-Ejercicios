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
 let number1 = parseInt(prompt("Ingrese su Primer valor"));
 let number2 = parseInt(prompt("Ingrese su Segundo valor"));
 let number3 = parseInt(prompt("Ingrese su Tercer valor"));


 if (number1 == number2 || number1 == number3 || number2 == number3){
   console.log("Dos o mas numeros son iguales");
 }
 else {
   console.log("El mayor numero es:", Math.max(number1, number2, number3));
 }

 /*---------Ejecicio N°2---------*/
 let value = parseInt(prompt("Ingresa un valor para determinar si es par"));

 if (value%2==0) {
   console.log("El primer numero:",number1, "es par");
 }
 else{
   console.log("El primer numero:",number1, "es impar");
 }

 
/*---------Ejecicio N°3---------*/
let numberP = parseInt(prompt("Ingresa un valor para determinar si es primo"));

 function esPrimo(numero) {
   if (numberP <= 1) {
     return false;
   }

   for (let i = 2; i <= Math.sqrt(numberP); i++) {
     if (numberP % i === 0) {
       return false;
     }
   }

   return true;
 }



 if (esPrimo(numberP)) {
   console.log(numberP + " es un número primo.");
 } else {
   console.log(numberP + " no es un número primo.");
 }

/*---------Ejecicio N°4---------*/

let numCalif = parseInt(prompt("Ingresa la calificacion"));

if(numCalif > 10 || numCalif < 1){
  console.log("El valor ingresado no es valido, por favor ingrese un valor entre el 10 y el 1");
  
}
else {
  if (numCalif == 10) {
    console.log("A- Excelente");
  }
  else if(numCalif == 9 || numCalif == 8) {
    console.log("B- Bueno");
  }
  else if(numCalif == 7) {
    console.log("C- Regular");
  }
  else if(numCalif == 6) {
    console.log("D- Suficiente");
  }
  else {
    console.log("F- Insuficiente");
  }  
}

