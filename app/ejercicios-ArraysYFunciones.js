/*
Trabajamos con Arrays

Desarrollar los siguientes problemas:

1. Desarrollar un array con 10 colores diferentes. Mostrarlos en consola, ordenarlos y volverlos a mostrar en consola.
2. Crear un array vacío, generar 20 numeros al azar, guardarlos en el array vacio y luego mostrarlos por consola
3. Crear un array vacío, luego generar N números al azar y guardarlos en un array, N es introducido por el usuario a través de un prompt.
4. Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
5. El usuario ingrese un string con varias palabras separadas por coma en un prompt y se deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5]).

TENER EN CUENTA QUE LAS RESOLUCIONES DE CADA EJERCICIO DEBEN ESTAR EN UNA FUNCION*/

// ejercicio 1
// function colores () {

//  let array = ['verde', 'azul', 'rojo', 'amarillo', 'marron', 'violeta','naranja','gris','negro','blanco']

//  for (let index = 0; index < array.length; index++) {
//      console.log (array[index]);
    
//  }
// }
// colores ();

// ejercicio 2

// function arreglo () {

//  let array = []

//  for (let index = 0; index < 20; index++) {
//      array.push(Math.floor( Math.random()*100));  
//  }
//  console.log (array);
// }
// arreglo ();

// ejercicio 3

// function numero () {

// // let numero = parseInt (prompt ('Ingresar la cantidad de N al azar a generar'));

// // let azar = []

// // for (let index = 0; index < numero; index++) {
// //     azar.push(Math.floor( Math.random()*100));     
// // }
// // console.log (azar);
// }
// numero();


// ejercicio 4


// function color () {

// let colores = prompt ('Averigua la disponibilidad de este color');

// let colors = ["azul", "amarillo", "rojo", "verde", "café", "rosa"]

// if (colores === colors [0] || colores === colors [1] || colores === colors [2] || colores === colors [3] || colores === colors [4] || colores === colors [5] ) {
//     console.log ('Este color esta disponible');
// } 
// else {
//     console.log ('Este color no esta disponible');
// }
// }
// color ();


// ejercicio 5

// function palabras () {
//  let string = prompt ('Ingrese las palabras que quiera separadas con comas').split(',');

// console.log (string );
// }
// palabras ();