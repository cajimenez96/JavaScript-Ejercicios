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

//   const numero1 = prompt ('ingrese un numero')
//   const numero2 = prompt ('ingrese un numero')
//   const numero3 = prompt ('ingrese un numero')

// if (numero1 > numero2 && numero1 > numero3)
// console.log ('la variable numero 1 es la mayor') {
//   else if (numero2 > numero1 && numero2 > numero3)
//   }
//   else if (numero3 > numero1 && numero3 > numero2) {
//     console
//   }

// EJERCICIO 1 - DETERMINO CUAL ES EL NUMERO MAYOR Y SI SON IGUALES O NO

// let numero1 = parseInt(prompt ("ingrese un numero")) 
// let numero2 = parseInt(prompt ("ingrese un numero"))
// let numero3 = parseInt(prompt ("ingrese un numero"))

// if (numero1 > numero2 && numero1 > numero3) {
//   console.log ("numero 1 es mayor")
// }
// else if (numero2 > numero1 && numero2 > numero3) {
//   console.log ("numero 2 es mayor")
// }
// else if (numero3 > numero1 && numero3 > numero2) {
//   console.log ("numero 3 es mayor")
// }
// else { 
// console.log ("los 3 numero ingresados son iguales") }



// EJERCICIO NUMERO 2 - DETERMINAR SI ES PAR O IMPAR EL NRO INGRESADO
// let numero = parseInt (prompt("ingrese un numero"))

// if (numero%2==0) {
// console.log ("Este numero es par")
// }

// else {
//   console.log ("Este numero es impar")
// }

// PRUEBA EJERCICIO 3
// let numero = parseInt(prompt("Ingrese un numero"))
// let divisores=0 

// for (let i=1 ; i <= numero ; i++) 
// {  if (numero % i == 0) }

// if (divisores==2){
//   console.log("Es un numero primo")
// }

// else {
//   console.log("No es un numero primo")
// }


// EJERCICIO NRO 4 - DETERMINAR SI UN NUMERO ES PRIMO O NO

let numero = parseInt(prompt('ingrese un numero'));

let divisores=0;

for(let i =1 ; i <=numero ; i ++) {
 if(numero % i  == 0)
   divisores = divisores + 1
}
if(divisores==2)
  console.log('es primo');
else{
  console.log('no primo');
}