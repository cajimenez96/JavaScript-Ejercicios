/*
Trabajamos con Arrays

Desarrollar los siguientes problemas:

1. Desarrollar un array con 10 colores diferentes. Mostrarlos en consola, ordenarlos y volverlos a mostrar en consola.
2. Crear un array vacío, generar 20 numeros al azar, guardarlos en el array vacio y luego mostrarlos por consola
3. Crear un array vacío, luego generar N números al azar y guardarlos en un array, N es introducido por el usuario a través de un prompt.
4. Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
5. El usuario ingrese un string con varias palabras separadas por coma en un prompt y se deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5]).

TENER EN CUENTA QUE LAS RESOLUCIONES DE CADA EJERCICIO DEBEN ESTAR EN UNA FUNCION*/


//ACTIVIDAD 1
// let colores = ['turquesa','verde','rojo','azul','morado','lila','negro','blanco','amarillo','rosa']

// for (let i = 0; i<colores.length;i++){
//   console.log(colores[i])
// }
// console.log('------');
// colores.sort();
// for (let i = 0; i<colores.length;i++){
//   console.log(colores[i])
// }

//ACTIVIDAD 2
let numeros = [];
for(i=0;i<20;i++){
  numeros.push(Math.floor(Math.random()*100));
  console.log(numeros[i]);
}