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
  