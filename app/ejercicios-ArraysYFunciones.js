/*
Trabajamos con Arrays

Desarrollar los siguientes problemas:

1. Desarrollar un array con 10 colores diferentes. Mostrarlos en consola, ordenarlos y volverlos a mostrar en consola.
2. Crear un array vacío, generar 20 numeros al azar, guardarlos en el array vacio y luego mostrarlos por consola
3. Crear un array vacío, luego generar N números al azar y guardarlos en un array, N es introducido por el usuario a través de un prompt.
4. Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
5. El usuario ingrese un string con varias palabras separadas por coma en un prompt y se deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5]).

TENER EN CUENTA QUE LAS RESOLUCIONES DE CADA EJERCICIO DEBEN ESTAR EN UNA FUNCION*/

//FUNCIONES

function numerosRamdom (min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function encontrarColor(data){
    for(let i=0;i<array.length;i++){
        if(array[i]==data){
            return true;
        }else{
            return false;
        }
    }
}



//----------------Ejercicio 2--------------

// let array=[];

// for(let i=0; i<20; i++){
//     array.push(numerosRamdom(0,100));
// }

// console.log(array);






//----------------Ejercicio 3--------------
/*
let array=[];
numeros=parseInt(prompt("Ingrese la cantidad de numeros aletorios que desea:"));

for(let i=0;i<numeros;i++){
    array.push(numerosRamdom(0,100));
}

console.log(array);
*/






//----------------Ejercicio 4--------------

let array=["azul", "amarillo", "rojo", "verde", "café", "rosa"];
let color=prompt("Ingrese un color:");

if(encontrarColor(color)==true){
    console.log("El color ingresado está en el array");
}else{
    console.log("El color ingresado no se encotró");
}