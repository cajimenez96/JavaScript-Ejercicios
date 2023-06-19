//Calcular promedio de una cantidad de alumnos


//1° Saber la cantidad de alumnos
// let alumnos = parseInt(prompt("Cuantos alumnos tiene?"));

// //Promedio = a la suma de las notas / cantidad de alumnos

// //Suma de la nota
// let acumulador = 0; //-> Va acumulando o sumando las notas
// //Contador
// let contador = 0; //-> Va CONTANDO los alumnos
// let desaprobado = 0;
// let aprobado = 0;


//Resultado con un ciclo while
// while (contador < alumnos) {
//   let nota = parseInt(prompt(`Ingrese la nota del alumno N° ${contador+1}: `));
//   if (nota >= 6) {
//     aprobado++;
//     // aprobado = aprobado + 1;
//   } else {
//     desaprobado++;
//   }
//   acumulador = acumulador + nota;
//   contador = contador + 1;
//   // contador++;
// }

//Resultado con un ciclo for
// for (let index = 0; index < alumnos; index++) {
//   let nota = parseInt(prompt(`Ingrese la nota del alumno N° ${contador+1}: `));
//   if (nota >= 6) {
//     aprobado++;
//     // aprobado = aprobado + 1;
//   } else {
//     desaprobado++;
//   }
//   acumulador = acumulador + nota;
// }

// let promedio = acumulador / alumnos;
// console.log(`El promedio total de las notas de tus alumnos es de: ${promedio}. La cantidad de alumnos aprobados es de: ${aprobado} y la cantidad de alumnos desaprobados es de: ${desaprobado}`);


//Factorial de un numero = al numero por sus antecesores 
//El factorial de 1 = 0
// let numero = parseInt(prompt("Ingrese el numero para calcular el factorial"));
// let factorial = 1;

// // factorial de 5 = 5 * 4 * 3 * 2 * 1
// if (numero === 1) {
//   console.log('El factorial es 0');
// } else {
//   for (let index = numero; index > 0; index--) {
//     factorial = factorial * index;
//   }
//   console.log(`El factorial es: ${factorial}`);
// }

