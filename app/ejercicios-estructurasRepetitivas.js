

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

let suma = 0 

do {
	var num = prompt("Ingrese un numero");
	if (Number(num) == num) {
		num = Number(num)
		suma = suma + num;
	} else {
		if(num != undefined) {
			alert(`"${num}" NO es un caracter valido`);
	}
	}
} while (num != undefined);

console.log(suma);


// 3. Crear un programa que pida ingresar usuario y contraseña. El programa debe permitir hasta 3 intentos, cuando el usuario y/o la contraseña sean incorrectos. Si se ingresa correctamente ambos antes de 3 intentos erróneos, debe mostrar un mensaje de bienvenida. Si se ingresan 3 intentos erróneos, debe mostrar un mensaje de error y terminar el programa. El usuario y la contraseña ya deben estar guardadas en variables.

