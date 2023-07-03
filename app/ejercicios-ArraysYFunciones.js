/*
Trabajamos con Arrays

Desarrollar los siguientes problemas:

1. Desarrollar un array con 10 colores diferentes. Mostrarlos en consola, ordenarlos y volverlos a mostrar en consola.
2. Crear un array vacío, generar 20 numeros al azar, guardarlos en el array vacio y luego mostrarlos por consola
3. Crear un array vacío, luego generar N números al azar y guardarlos en un array, N es introducido por el usuario a través de un prompt.
4. Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
5. El usuario ingrese un string con varias palabras separadas por coma en un prompt y se deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5]).

TENER EN CUENTA QUE LAS RESOLUCIONES DE CADA EJERCICIO DEBEN ESTAR EN UNA FUNCION*/


//EJERCICIO 1 

function sortColors(){
    const colors = ['red','blue','green','black','white','brown','purple','orange','grey','pink']
    console.log(colors);
    colors.sort();
    console.log(colors);
}

//EJERCICIO 2

function randomNumbers(){
    let numbers = [];
    for (let index = 0; index < 20; index++) {
        numbers.push(Math.round(Math.random()*20));   
    }
    console.log(numbers);
}

//EJERCICIO 3

function randomNumbers2() {
  let numbers=[];
  let n = parseInt(prompt());
  for (let index = 0; index < n; index++) {
    numbers.push(Math.round(Math.random()*100));   
  }
  return numbers;
}
//EJERCICIO 4
function isThere(){
  const colors=["azul", "amarillo", "rojo", "verde", "café", "rosa"];
  let userColor = prompt('Ingrese un color');
  let isThere = false;
  colors.forEach(element => {
    if(element===userColor){
      isThere=true;
    }
  });
  return isThere;
}
//EJERCICIO 5 
const makeArray = () => prompt('ingrese varias palabras separadas por "comas"').split(',');


