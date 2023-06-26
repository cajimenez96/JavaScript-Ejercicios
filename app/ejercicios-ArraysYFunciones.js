/*
Trabajamos con Arrays

Desarrollar los siguientes problemas:

1. Desarrollar un array con 10 colores diferentes. Mostrarlos en consola, ordenarlos y volverlos a mostrar en consola.
2. Crear un array vacío, generar 20 numeros al azar, guardarlos en el array vacio y luego mostrarlos por consola
3. Crear un array vacío, luego generar N números al azar y guardarlos en un array, N es introducido por el usuario a través de un prompt.
4. Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
5. El usuario ingrese un string con varias palabras separadas por coma en un prompt y se deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5]).

TENER EN CUENTA QUE LAS RESOLUCIONES DE CADA EJERCICIO DEBEN ESTAR EN UNA FUNCION*/



// ACTIVIDAD NRO 1  ARRAYS

// let colores = ["amarillo","rojo","azul","negro","blanco","marron","naranja","verde","morado","celeste"]
// console.log(colores)

// for (i=0; i<colores.length; i++) {
//     console.log(colores[i])
// }

// colores.sort()
// console.log ("Aqui los ordeno")

// for (i=0; i<colores.length; i++) {
//     console.log(colores[i])
// }    

// ACTIVIDAD NRO2 - CREAR 20 NUMEROS AL AZAR Y MOSTRARLOS POR CONSOLA

// let numeros=[]
// console.log(Math.floor(Math.random()*100))

// numeros.push(Math.floor(Math.random()*100))
// console.log(numeros)

// for (i=0; i<20; i++) {
//     numeros.push(Math.floor(Math.random()*100))
//     console.log(numeros[i])
// }
// console.log(numeros)

// let numeros = [];
// let limite = parseInt(prompt("Ingrese el limite de numeros"));

// for (let i=0; i < limite; i++) {
//   numeros.push( Math.floor(Math.random() * 100));
//   console.log(numeros[i]);
// }


 let colores = ["azul", "amarillo", "rojo", "verde", "cafe", "rosa"];

 let color = prompt('ingresar un color');

 for (i=0;i<colores.length;i++){
   let valor = colores[i];
   if(valor == color){
     console.log('el color esta en el array');
     i=10;
   }else{
     console.log('el color no esta en el array');
   }
 }