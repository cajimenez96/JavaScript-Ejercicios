
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

const PPT = (usuario) => { 

  let computadora = Math.floor(Math.random() * 3 + 1 );

switch (computadora) {
  case 1:
    computadora = "piedra"
    break;
    case 2:
      computadora = "papel"
      break
      case 3:
    computadora = "tijera"
    break
};

if (usuario === "piedra" || usuario === "papel" || usuario === "tijera"  ) {

  console.log(`El usuario eligio ${usuario}.`);
  console.log("---");
  console.log(`La computadora eligio ${computadora}.`);
  console.log("---");
  
  if (usuario === computadora) {
    return  ("Empate.");
  } else if ((usuario === "piedra" && computadora === "tijera") || (usuario === "tijera" && computadora === "papel") || (usuario === "papel" && computadora === "piedra")) {
    return ("Ganaste.");
  } else {
    return ("Perdiste.");
  }
} else {
 return("Ingrese un valor valido.");
}
}
console.log(PPT("piedra"));


