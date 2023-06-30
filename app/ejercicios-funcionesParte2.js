
// Fácil:
//   Escribir una función llamada suma que reciba dos números como parámetros y devuelva la suma de ambos. Luego, llamar a la función con dos números e imprimir el resultado.



// const suma = (num1, num2) => num1 + num2

// console.log(suma(2, 2))



// Intermedio:
//   Escribir una función llamada invertirPalabra que reciba una cadena de texto como parámetro y devuelva la cadena invertida. Por ejemplo, si se pasa la palabra "Hola", la función debería devolver "aloH". Luego, llamar a la función con una palabra e imprimir el resultado.



// const invertirPalabra = (texto) => texto.split("").reverse().join("");

// console.log(invertirPalabra("hola"))




// Difícil:
//   Escribir una función llamada esPalindromo que reciba una cadena de texto como parámetro y determine si es un palíndromo. Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda, ignorando los espacios y los caracteres no alfabéticos. Por ejemplo, la función debería devolver true para la palabra "radar" y false para la palabra "hola". Luego, llamar a la función con una palabra o frase e imprimir si es un palíndromo o no.




// const esPalindromo = (texto) => texto === texto.split("").reverse().join("")

// console.log(esPalindromo("radar"));
// console.log("---------");
// console.log(esPalindromo("hola"));




// Muy dificil:
//   piedra papel o tijera
// Crea un juego de piedra papel o tijera, donde el usuario ingrese su eleccion, y la computadora elija una opcion al azar, luego compare las dos opciones e imprima por consola el resultado del juego. 

// function obtenerOpcionComputadora() {
//   const opciones = ['piedra', 'papel', 'tijera'];
//   return opciones[Math.floor(Math.random() * opciones.length)];
// }

// function determinarGanador() {
//   let consulta;
//   do {
//     consulta = confirm('¿Querés jugar?');

//     if (consulta === true) {

//       const opcionComputadora = obtenerOpcionComputadora();
//       let opcionUsuario = prompt("Elegí entre las siguientes opciones: \n- Piedra \n- Papel \n- Tijera").toLowerCase().trim();

      
//       while (opcionUsuario != "piedra" && opcionUsuario != "tijera" && opcionUsuario != "papel") {
//         opcionUsuario = prompt("Opción inválida. Por favor, elige una opción válida: \n- Piedra \n- Papel \n- Tijera").toLowerCase().trim();
//       }

//       if (opcionUsuario === opcionComputadora) {
//         console.log('empate');
//       } else {
//         if (
//           (opcionUsuario === 'piedra' && opcionComputadora === 'tijera') ||
//           (opcionUsuario === 'papel' && opcionComputadora === 'piedra') ||
//           (opcionUsuario === 'tijera' && opcionComputadora === 'papel')
//         ) {
//           console.log('ganaste');
//         } else {
//           console.log('perdiste');
//         }
//       }
//     }
//   } while (consulta === true);
// }

// determinarGanador();


