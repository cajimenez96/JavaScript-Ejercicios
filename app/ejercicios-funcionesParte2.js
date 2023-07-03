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

//EJERCICIO 1 

let suma = (a,b) => a+b;

//EJERCICIO 2 

let invertirPalabra = (str)=> str.split('').reverse();

//EJERCICIO 3 

let esPalindromo = (word)=> invertirPalabra(word).join('')===word;

//EJERCICIO 4 

