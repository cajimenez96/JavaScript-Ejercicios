
// switch(true){
    //     case (numero1 > numero2):
    //         console.log(numero1 + " es el numero mas grande");
    //     break;
    
    //     default: console.log(numero2 + " es el mas grande");
    // }


    // let numero2 = parseInt(prompt("ingrese el segundo numero"));
    // let numero3 = parseInt(prompt("ingrese el tercer numero"));
    
    // let maximo = Math.max(numero1, numero2, numero3);
    // console.log(maximo);


    
    // switch (numero % 2){
        //     case 0:
        //         console.log("El numero es divisible por 2");
        //     break;
        
        //     default:
        //         console.log("El numero no es divisible por 2");
        
        // }
        
        
        // let numero = parseInt(prompt("ingrese un numero"));
        // var divisibles = []

        // if (numero % 2 === 0) {
        //     divisibles.push(2);
        // }

        // if (numero % 3 === 0) {
        //     divisibles.push(3);
        // }

        // if (numero % 5 ===0) {
        //     divisibles.push(5);
        // }

        // if (numero % 7 === 0) {
        //     divisibles.push(7);
        // }

        // if (divisibles.length === 0) {
        //     console.log("El numero no es divisible por 2, 3, 5 o 7");

        // } else {
        //     console.log("El numero es divisible por los siguientes numeros:", divisibles.join(", "));

        // }


// let numero = parseInt(prompt("Ingrese su edad"));

// if (numero > 18) {
//     console.log("Ya puede conducir");
// } else if (numero <= 18) {
//     console.log("No puede conducir");
// } else {
//     console.log("No es un numero valido");
// }


// let nota = parseInt(prompt("Ingrese una nota del 1 al 10"));
// var calificacion;

// if (nota < 0 || nota > 10) {
//     alert("Numero erroneo");

// } else if (nota >= 0 && nota <=2) {
//     calificacion = "Muy deficiente.";

// } else if (nota >= 3 && nota <=4) {
//     calificacion = "Insuficiente";

// } else if (nota >= 5 && nota <= 6) {
//     calificacion = "Suficiente";

// } else if (nota == 7) {
//     calificacion = "Bien";

// } else if (nota >= 8 && nota <= 9) {
//     calificacion = "Notable";

// } else if (nota = 10){
//     calificacion = "Sobresaliente";
// } else {
//     alert("Ingrese un numero valido")
// }

// alert("Su calificacion es " + calificacion);

// let cadenas = [];

// while (true) {
//     var confirmar = confirm("Deseas ingresar una cadena de texto?");

//     if (confirmar = false) {
//         break;
//     } 

//     var cadena = prompt("Ingrese una cadena de texto"); 

//     if (cadena === null) {
//         break;
//     } 

//     cadenas.push(cadena);

// }

// if (cadenas.length > 0) { 
//  var resultado = cadenas.join("-");
//  console.log("Cadenas concatenadas:", resultado);
// } else {
//     console.log("No se ingresaron cadenas");
// }




// let suma = 0;
// let numero;

// while (true) {
//   numero = prompt("Introduce un número:");

//   // Comprobar si se pulsó "cancelar" o no se introdujo un número válido
//   if (numero === null || numero.trim() === "") {
//     break;
//   }

//   // Comprobar si el valor introducido es un número válido
//   if (isNaN(numero)) {
//     alert("No es un número válido. Inténtalo de nuevo.");
//     continue;
//   }

//   // Convertir el número a tipo numérico y sumarlo a la variable 'suma'
//   numero = Number(numero);
//   suma += numero;
// }

// // Mostrar la suma total de los números introducidos
// alert("La suma total es: " + suma);

// EJERCICIO NUMERO 6

// let i = 1

// while (i <=30){
//     console.log(String(i).repeat(i));
//     i = i + 1;

// }


// EJERCICIO NUMERO 7

// let numero = parseInt(prompt("Ingrese un numero"));
// if (numero > 50){
//     console.log("El numero es mayor a 50")
// } else{
//  for (let i = numero; i >= 1; i--) {
//     console.log(String(i).repeat(i));
//     }
// }

// EJERCICIO NUMERO 8

// const number = prompt('Ingrese un número (no mayor de 50): ');

// if (number > 50) {
//   console.log('El número ingresado es mayor a 50. Por favor, ingrese un número válido.');
// } else {
//   let pyramid = '';
//   let row = '';
//   for (let i = 1; i <= number; i++) {
//     row += i;
//     pyramid += row + '\n';
//   }
//   console.log(pyramid);
// }

// EJERCICIO NUMERO 5

// function valorLetra(){

// let seguir;

// do {
        
// const dni = parseInt(prompt("Ingrese un numero entre el 0 y el 99999999"));

// var resto = dni % 23;

// if (isNaN(dni) || dni > 999999999) {
//     alert("No es un numero valido");
// } 


// if (resto == 0) {
//     alert("Te corresponde la T");

// } else if (resto == 1){
//     alert("Te corresponde la R");

// } else if( resto == 2){
//     alert("Te corresponde la W");

// } else if( resto == 3) {
//     alert("Te corresponde la A");

// } else if( resto == 4) {
//     alert("Te corresponde la G"); 

// } else if ( resto == 5) {
//     alert("Te corresponde la M");    
// }

// seguir = confirm("Desea iniciar otra vez?");
// }

//  while (seguir === true);
    
// }

// valorLetra();

// EJERCICIO NUMERO 7 CAMPUS1

// let numero1 = parseInt(prompt("Ingrese el primer numero"));
// let numero2 = parseInt(prompt("Ingrese el segundo numero"));
// let numero3 = parseInt(prompt("Ingrese el tercer numero"));

// alert(`El numero mas grande es ${Math.max(numero1, numero2, numero3)}`);


// EJERCICIO NUMERO 9 CAMPUS1

// let frase = prompt("Ingrese una frase");
// let vocales = [];

// if (frase.includes("a")) {
//     vocales.push("a");

// } 

// if (frase.includes("e")) {
//     vocales.push("e");

// } 

// if (frase.includes("i")) {
//     vocales.push("i");

// } 

// if (frase.includes("o")) {
//     vocales.push("o");

// } 

// if (frase.includes("u")) {
//     vocales.push("u");

// } 

// alert(vocales);


//EJERCICIO 9 - CAMPUS2

/* for(i = 1; i <= 500; i++){

    var numeros = i;
    
    if (i % 4 === 0){
        numeros += " Multiplo de 4";
    }
    
    if (i % 9 === 0){
        numeros += " Multiplo de 9";
    }

    if (i % 5 === 0) {
        console.log("----------------------")
    }
    console.log(numeros);
} */

// EJERCICIO 10 - CAMPUS2

// let fila = parseInt(prompt("Ingrese el numero de filas"));
// let columna = parseInt(prompt("Ingrese el numero de columnas"));

// var cantNum = fila * columna;
// var row = "";

// for (i = cantNum; i >= 1; i--) {
// row += i;
// console.log(row);
// } 


