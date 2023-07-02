/*
Fácil:
  Escribir una función llamada suma que reciba dos números como parámetros y devuelva la suma de ambos. Luego, llamar a la función con dos números e imprimir el resultado.

Intermedio:
  Escribir una función llamada invertirPalabra que reciba una cadena de texto como parámetro y devuelva la cadena invertida. Por ejemplo, si se pasa la palabra "Hola", la función debería devolver "aloH". Luego, llamar a la función con una palabra e imprimir el resultado.

Difícil:
  Escribir una función llamada esPalindromo que reciba una cadena de texto como parámetro y determine si es un palíndromo. Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda, ignorando los espacios y los caracteres no alfabéticos. Por ejemplo, la función debería devolver true para la palabra "radar" y false para la palabra "hola". Luego, llamar a la función con una palabra o frase e imprimir si es un palíndromo o no.

Muy dificil:
  piedra papel o tijera
Crea un juego de piedra papel o tijera, donde el usuario ingrese su eleccion, y la computadora elija una opcion al azar, luego compare las dos opciones e imprima por consola el resultado del juego. */


//EJERCICIO NUMERO 1

/* function sumar(){
  let numero1 = parseInt(prompt("Ingrese el primer numero"));
  let numero2 = parseInt(prompt("Ingrese el segundo numero"));

  var suma = numero1 + numero2;
  console.log(suma);
  
  
}

sumar(); */

// EJERCICIO NUMERO 2

// function invertirPalabra(){
// let texto = prompt("Ingrese una cadena de texo").toString();
// var textinv = "";
// for (i = texto.length - 1; i >= 0; i-- ) {
//     textinv += texto.charAt(i);
    
//   }
  
//   console.log(textinv); 
// }

// invertirPalabra

// EJERCICIO NUMERO 3

// function esPalindromo(){
// let texto = prompt("Ingrese una cadena de texo").toString().toLowerCase();
// var textinv = "";
// const texto2= texto.split(" ").join("");

// for (i = texto2.length - 1; i >= 0; i-- ) {
//   textinv += texto2.charAt(i);

// }

// if (texto2 == textinv) {
//   console.log("Es un palindromo");

// } else {
//   console.log("No es un palindromo");
// }

// }

// esPalindromo();





//EJERCICIO NUMERO 4

// piedra > tijera
// papel < piedra
// tijera > papel
// ===

/* const opciones = ["piedra", "papel", "tijera"];
let consulta;

do {
  const opcionUsuario = prompt("Elegi entre las siguientes opciones: \n- Piedra \n- Papel \n- Tijera").toLowerCase().trim();

  const index = Math.floor(Math.random() * opciones.length);
  const opcionPc = opciones [index];

  if(opcionUsuario === opcionPc) {
  console.log("Empate");
  } else {
  if(opcionUsuario === "piedra" && opcionPc === "tijera") {
    console.log("Ganaste");
  
  } else if(opcionUsuario === "papel" && opcionPc === "piedra") {
    console.log("Ganaste");
  
  } else if(opcionUsuario === "tijera" && opcionPc === "papel") {
    console.log("Ganaste");
  
  } 

  consulta = confirm("Queres jugar");
}

} while (consulta === true);

// Eliminar espaciados de palabras p i e d r a
// Mostrar un mensaje si el usuario ingreso mal la opcion y vuelva a ingresar
// Utilizar funciones para que la computadora tome un valor y otra para que determine quien gano. */

