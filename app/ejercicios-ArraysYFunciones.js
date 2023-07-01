/*
Trabajamos con Arrays

Desarrollar los siguientes problemas:

1. Desarrollar un array con 10 colores diferentes. Mostrarlos en consola, ordenarlos y volverlos a mostrar en consola.
2. Crear un array vacío, generar 20 numeros al azar, guardarlos en el array vacio y luego mostrarlos por consola
3. Crear un array vacío, luego generar N números al azar y guardarlos en un array, N es introducido por el usuario a través de un prompt.
4. Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
5. El usuario ingrese un string con varias palabras separadas por coma en un prompt y se deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5]).

TENER EN CUENTA QUE LAS RESOLUCIONES DE CADA EJERCICIO DEBEN ESTAR EN UNA FUNCION*/

// EJERCICIO NUMERO 1

// const colores = ['rojo', 'azul', 'verde', 'amarillo', 'naranja', 'rosa', 'morado', 'blanco', 'negro', 'gris'];
// console.log("Colores originales " + colores);

// function ordenarColores() {
      
//     const ordenados = colores.sort();
//     console.log("Colores ordenados " + ordenados);
//   }
  
//   ordenarColores()

// EJERCICIO NUMERO 2

// const array = [];

// for (let i = 0; i < 20; i++){
//     const numero = Math.random() * 100;
//     const entero = parseInt(numero);
//     array.push(entero);
//     array.join(",");
// }

// console.log(array);

// EJERCICIO NUMERO 3

// let array = [];
// let cantnumeros = prompt("Cuantos numeros desea generar?");

// for (let i = 0; i < cantnumeros; i++){
// let numero = Math.random() * 100;
// let entero = parseInt(numero);

// array.push(entero);
// }
// console.log(array);

// EJERCICIO NUMERO 4

// const array = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];

// let color = prompt("Ingrese su color favorito");

// if(array.includes(color)){
//    console.log("El color se encuentra dentro del array"); 
// } else {
//     console.log("No esta en el array");
// }

// EJERCICIO NUMERO 5

// function creadorArrays() {

// const string = prompt("Ingrese texto o numeros, seguidos de una coma");

// const separado = string.split(",");

// console.log(separado);

// }

// creadorArrays();
