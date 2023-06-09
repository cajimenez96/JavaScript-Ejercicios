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


  //TAREA 1 

// let num1 = prompt("Ingrese el primer numero");
// let num2 = prompt("Ingrese el segundo numero");
// let num3 = prompt("Ingrese el tercer numero");

// if(num1==num2==num3)console.log("Los numeros son iguales.");
// else {console.log("El numero mas grande es: " + Math.max(num1,num2,num3))};
  //TAREA 2
// let num=parseInt(prompt("Ingrese un numero para saber si es par"));

// if(num%2==0){
//   console.log("Su numero es par");
// }else console.log("Su numero es impar");

  //TAREA 3

let num=prompt("Ingrese un numero para saber si es Primo");
let esPrimo = true;

if(num<=1){
  esPrimo=false;
}else{
  for(let div=2;div<num;div++){
    if(num%div==0){
      esPrimo=false;
      break;
    }
  }
}
if(esPrimo)console.log("Su numero es primo.");
else console.log("Su numero no es primo");