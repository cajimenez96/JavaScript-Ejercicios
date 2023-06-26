

// EJERCICIOS CON CICLOS REPETITIVOSSS!!!

// 1. Dibujar un triángulo con asteriscos. El usuario tecleará un valor entero, el programa escribirá con asteriscos tantas lineas como diga ese número. Cada linea estará formada por una serie de astericos tan larga como diga el número de línea en el que está. (No más de 50)

// let num = parseInt(prompt("Ingrese un numero"));
// simbolo = "*";
// if (num <= 50){
// for (let index = 0; index < num; index++) {
//   console.log(simbolo);
//   simbolo = simbolo + "*";
// }
// } else {
//   console.log("El numero debe ser menor que 50")
// }

// 2. Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

// let suma = 0;

// do {
// 	let numero = parseInt(prompt("ingrese un numero"));
// 	if (Number(numero) == numero) {
// 		suma = suma + numero.;
// 	} 
// 	else {
// 		alert("Ingrese un numero valido");
// 	}
// } while (confirm("desea seguir?"))

// console.log(suma)

// 3. Crear un programa que pida ingresar usuario y contraseña. El programa debe permitir hasta 3 intentos, cuando el usuario y/o la contraseña sean incorrectos. Si se ingresa correctamente ambos antes de 3 intentos erróneos, debe mostrar un mensaje de bienvenida. Si se ingresan 3 intentos erróneos, debe mostrar un mensaje de error y terminar el programa. El usuario y la contraseña ya deben estar guardadas en variables.

// contador = 1;
// let usuario = "agustin";
// let contraseña = "123";

// usuario = prompt("ingrese su usuario").toLowerCase();
// contraseña = prompt("ingrese su contraseña").toLowerCase();

// if (usuario != "agustin" || contraseña != "123") {
// while (contador < 3) {
//     usuario = prompt("ingrese su usuario").toLowerCase();
//     contraseña = prompt("ingrese su contraseña").toLowerCase();
//     contador++
// }
// }
// if (usuario == "agustin" && contraseña == "123") {
//     console.log("Bienvenido");
// } else {
//     console.log("Usuario y contraseña incorrectos"); 	
// }