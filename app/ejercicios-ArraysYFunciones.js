
// Trabajamos con Arrays

// Desarrollar los siguientes problemas:

// 1. Desarrollar un array con 10 colores diferentes. Mostrarlos en consola, ordenarlos y volverlos a mostrar en consola.

function puntoUno(){
let colores = ["rojo", "verde", "azul", "amarillo", "naranja", "rosa", "violeta", "gris", "blanco", "negro"];

console.log("Colores originales:");
for(i=0; i < colores.length; i++) {
  console.log(colores[i]);
}

colores.sort();

console.log("Colores ordenados:");
for(i=0; i < colores.length; i++) {
  console.log(colores[i]);
}
}

// 2. Crear un array vacío, generar 20 numeros al azar, guardarlos en el array vacio y luego mostrarlos por consola

function puntoDos(){
let numeros = [];

for (i=0; i<20; i++) {
  numeros.push( Math.floor(Math.random()*50));
  console.log(numeros[i]);
}
}

// 3. Crear un array vacío, luego generar N números al azar y guardarlos en un array, N es introducido por el usuario a través de un prompt.

function puntoTres(){
let numeros = [];
let limite = parseInt(prompt("Ingrese el limite de numeros"));

for (let i=0; i < limite; i++) {
  numeros.push( Math.floor(Math.random() * 100));
  console.log(numeros[i]);
}
}

// 4. Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.

function puntoCuatro(){
let colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
let colorUsuario = prompt("Introduce un color:");

let encontrado = false;

for (let i = 0; i < colores.length; i++) {
  if (colores[i] === colorUsuario) {
    encontrado = true;
    break;
  }
}

if (encontrado) {
  console.log("El color está en el array.");
} else {
  console.log("El color no está en el array.");
}
}

// 5. El usuario ingrese un string con varias palabras separadas por coma en un prompt y se deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5]).

function puntoCinco(){
let texto = prompt("Ingrese palabras separadas por coma");
let array = texto.split(" , ");
console.log(array)
}


// TENER EN CUENTA QUE LAS RESOLUCIONES DE CADA EJERCICIO DEBEN ESTAR EN UNA FUNCION
