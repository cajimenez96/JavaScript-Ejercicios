/* 

EJERCICIOS CON CICLOS REPETITIVOSSS!!!


2. Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.


  ejercicio 2

  suma = 0;

  do {
    numero = prompt ('Ingresar un numero a acumular');     
   if (Number(numero) == numero) {
   numero = Number(numero);
   suma = suma + numero;
   }
   else {
    if (numero != undefined) {
       alert ('Este no es un numero'); 
   }
   }
   } while ( numero != undefined);
    console.log (suma);

3. Crear un programa que pida ingresar usuario y contraseña. El programa debe permitir hasta 3 intentos, cuando el usuario y/o la contraseña sean incorrectos. Si se ingresa correctamente ambos antes de 3 intentos erróneos, debe mostrar un mensaje de bienvenida. Si se ingresan 3 intentos erróneos, debe mostrar un mensaje de error y terminar el programa. El usuario y la contraseña ya deben estar guardadas en variables.
*/



// ejercicio 3 


  // repeticion = 1;
  // let usuario = "matias";
  // let contraseña = "maldonado";


//  usuario = prompt("ingrese su usuario").toLowerCase();
//  contraseña = prompt("ingrese su contraseña").toLowerCase();


//   if (usuario != "matias" || contraseña != "maldonado") {
//    while (repeticion < 3) {
//       usuario = prompt("ingrese su usuario").toLowerCase();
//       contraseña = prompt("ingrese su contraseña").toLowerCase();
//       repeticion++
//   }
//   }

//   if (usuario == "matias" && contraseña == "maldonado" ) {
//    console.log ("Bienvenido");
//   }
//   else {
//   console.log ("error");
//   }







// 1. Dibujar un triángulo con asteriscos. El usuario tecleará un valor entero, el programa escribirá con asteriscos tantas lineas como diga ese número. Cada linea estará formada por una serie de astericos tan larga como diga el número de línea en el que está. (No más de 50)

//   Para separar una linea de la siguiente en console o en alert debes usar "\n". En este ejercicio usa console.log. 

//   Por ejemplo: Le tecleamos el valor 5. El resultado será:
//     *
//     **
//     ***
//     ****
//     *****


// ejercicio 1

// numero1 = parseInt ( prompt ('Ingresa un numero entero para formar piramide de asteriscos'));

// for (numero = 1; numero <= numero1; numero++) {
//  let resultado = '';
//  for (let index = 0; index < numero; index++) {
//    resultado += '*';
  
//  }
//   console.log (resultado);
// }


// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

// suma = '';


// do {
//   let palabras =  prompt ('Ingresar una cadena de texto');
//   suma = suma + '-' + palabras
// } while ( confirm ('Desea seguir?'));
// console.log (suma);


// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

// suma = 0;

// do {
//   let numeros = parseInt (prompt ('Ingresa los numeros a acumular'));
//   if (numeros == Number (numeros)) {
//   numeros = Number (numeros);
//   suma = suma + numeros
//   }
//   else if (numeros != undefined) {
//     alert ('Este no es un numero');
//   }
// } while (confirm ('Desea seguir?'));
// console.log (suma);


// 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

// 1
// 22
// 333
// 4444
// 55555
// 666666
// …….


for ( index = 1; index <= 30; index++) {
  let resultado = '';
  for (columnas = 30; columnas index; columnas++) {
    resultado = resultado + index
  }
console.log (resultado);
}
