

// Fácil:
//   Escribir una función llamada suma que reciba dos números como parámetros y devuelva la suma de ambos. Luego, llamar a la función con dos números e imprimir el resultado.


//  function suma (a,b) {
//    console.log (a+b);
//  }
//  suma (3,5);

// Intermedio:
//   Escribir una función llamada invertirPalabra que reciba una cadena de texto como parámetro y devuelva la cadena invertida. Por ejemplo, si se pasa la palabra "Hola", la función debería devolver "aloH". Luego, llamar a la función con una palabra e imprimir el resultado.


// function invertirPalabra (texto) {
// return texto. split (''). reverse (''). join ('');
// }
// console.log (invertirPalabra ('matias'));

// Difícil:
//   Escribir una función llamada esPalindromo que reciba una cadena de texto como parámetro y determine si es un palíndromo. Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda, ignorando los espacios y los caracteres no alfabéticos. Por ejemplo, la función debería devolver true para la palabra "radar" y false para la palabra "hola". Luego, llamar a la función con una palabra o frase e imprimir si es un palíndromo o no.


  // let esPalindromo = function (palabras) {
  //   if (palabras === palabras. split (''). reverse (''). join ('') ) {
  //    console.log ('Su palabra es un palindromo');
  //   }
  //   else {
  //     console.log ('Su palabra no es un palindromo');
  //  }
  // }
  // esPalindromo ('neuquen');

//   Muy dificil:
//   piedra papel o tijera
// Crea un juego de piedra papel o tijera, donde el usuario ingrese su eleccion, y la computadora elija una opcion al azar, luego compare las dos opciones e imprima por consola el resultado del juego. */




//  const opciones = [piedra, papel, tijera];

//  const usuario = prompt ('Ingresar piedra, papel o tijera');
// const index = Math.floor(Math.random() * opciones.length);
//  const computadora = opciones[index];

//  if (usuario === computadora) {
//    console.log ('Empate');
//  } else {
//  if (usuario === piedra && computadora === tijera ) {
//    console.log ('Ganaste');
//  }
//  else if (usuario === tijera && computadora == papel) {
//    console.log ('Ganaste');
//  }
//  else if (usuario === papel && computadora == piedra) {
//    console.log ('ganaste');
//  }
//  }

function opcionesCompu () {
  const opciones = ['piedra', 'papel', 'tijera'];
  return opciones [ Math.floor(Math.random() * opciones.length)];
}


function determinaGanador () {

 let pregunta 

 do { 
   pregunta = confirm ('Desea jugar?');
   if (pregunta === true) {
    let opcionComputadora = opcionesCompu ();
    let usuario = prompt('Elegí entre las siguientes opciones: \n- piedra \n- papel \n- tijera').toLocaleLowerCase().trim();

    while (usuario != 'piedra' && usuario != 'papel' && usuario != 'tijera') {
      usuario = prompt('Error, vuelva a elegir : \n- piedra \n- papel \n- tijera').toLocaleLowerCase().trim();
    }

  if (usuario === opcionComputadora) {
    console.log ('Empate');
  } 
  else {
  if ( (usuario === 'piedra' && opcionComputadora === 'tijera') || (usuario === 'tijera' && opcionComputadora === 'papel') || (usuario === 'papel' && opcionComputadora === 'piedra') ) {
    console.log ('Ganaste');
  }
  else  {
    console.log ('Perdiste');
  }
  }
  }
 } while (pregunta === true);

}
 determinaGanador ();
