
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

let cadenas = [];

while (true) {
    var confirmar = confirm("Deseas ingresar una cadena de texto?");

    if (confirmar = false) {
        break;
    } 

    var cadena = prompt("Ingrese una cadena de texto"); 

    if (cadena === null) {
        break;
    } 

    cadenas.push(cadena);

}

if (cadenas.length > 0) {
 var resultado = cadenas.join("-");
 console.log("Cadenas concatenadas:", resultado);
} else {
    console.log("No se ingresaron cadenas");
}


