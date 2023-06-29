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

//FUNCIONES

const suma= function (A,B){
  return A + B;
}

const invertirPalabra= function (text){
  let cadena="";
  for(i=text.length-1; i>=0 ;i--){
    cadena=cadena+text[i];
  }
  return cadena;
}

const esPalindromo= function (text1,text2){
  if(text1.split(" ").join("")==text2.split(" ").join("")){
    return true;

  } else{
    return false;

  }
}

const aleatorio=function (arreglo){
  return arreglo[Math.floor(Math.random()*arreglo.length)]
}

function validacion (data){
  if(data==="piedra"){
    return true;
  }else if(data === "papel"){
    return true;
  }else if(data==="tijera"){
    return true;
  }else{
    return false;
  }
}

const comprobacion= function (jugadaUser,jugadaIa){

  if(jugadaUser===jugadaIa){
    return `Empate. Usuario="${jugadaUser}"  Computadora="${jugadaIa}"`;

  }else if(jugadaUser==="piedra" && jugadaIa === "tijera"){
    return `Usted gana. Usuario="${jugadaUser}"  Computadora="${jugadaIa}"`;

  }else if(jugadaUser==="papel" && jugadaIa === "piedra"){
    return `Usted gana. Usuario="${jugadaUser}"  Computadora="${jugadaIa}"`;

  }else if(jugadaUser==="tijera" && jugadaIa === "papel"){
    return `Usted gana. Usuario="${jugadaUser}"  Computadora="${jugadaIa}"`;

  }else if(jugadaUser==="piedra" && jugadaIa === "papel"){
    return `Usted pierde. Usuario="${jugadaUser}"  Computadora="${jugadaIa}"`;

  }else if(jugadaUser==="papel" && jugadaIa === "tijera"){
    return `Usted pierde. Usuario="${jugadaUser}"  Computadora="${jugadaIa}"`;

  }else if(jugadaUser==="tijera" && jugadaIa === "piedra"){
    return `Usted pierde. Usuario="${jugadaUser}"  Computadora="${jugadaIa}"`;
    
  }

}



//-----------Ejercicio 1-------------
/*
let num1=parseInt(prompt("Ingrese un número"));
let num2=parseInt(prompt("Ingrese el segundo número"));
 
console.log(`La suma de los numeros es igual a ${suma(num1,num2)}`);
*/






//-----------Ejercicio 2-------------
/*
let cadena=prompt("Ingrese el texto que desea invertir");

console.log(`El texto invertido es: ${invertirPalabra(cadena)}`);
*/







//-----------Ejercicio 3-------------
/*
let cadena=prompt("Ingrese una palabra o frase que sea palindromo").toLowerCase();

let cadenaInvertida=invertirPalabra(cadena);

if(esPalindromo(cadena,cadenaInvertida)===true){
  console.log(`la palabra o frase ingresada es un palindromo: normal=>(${cadena}) invertida=>(${cadenaInvertida})`);
}else{
  console.log(`Lla palabra o frase ingresada NO es un palindromo: normal=>(${cadena}) invertida=>(${cadenaInvertida})`);
}
*/



//---------------Ejercicio 4---------------

const maquina=["piedra","papel","tijera"];
let jugadaUsuario;
let jugadaMaquina;
let resultado;

do{
  jugadaUsuario=prompt("Ingrese piedra, papel o tijera");

  if(validacion(jugadaUsuario)===true){

    jugadaMaquina=aleatorio(maquina);
    resultado = comprobacion(jugadaUsuario,jugadaMaquina);
    alert(resultado);
    
  }else{
    
    while(validacion(jugadaUsuario)===false){
      alert("No valido. Ingrese nuevamente");
      jugadaUsuario=prompt("Elija entre piedra,papel y tijera");
    }

    jugadaMaquina=aleatorio(maquina);
    resultado = comprobacion(jugadaUsuario,jugadaMaquina);
    alert(resultado);
  }
    

}while(confirm("Desea seguir jugando?")===true)


alert("GRACIAS POR JUGAR CON NOSOTROS");