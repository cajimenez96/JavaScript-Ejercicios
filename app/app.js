/* Estructuras condicionales!!

Vamos a crear nuestro app.js y vamos a tratar de resolver lo siguientes ejercicios aplicando el conocimiento que ya tenemos:

1. Crear una aplicación la cual tendremos que crear 3 números, luego vamos a determinar cual es el mayor y/o si son iguales o no.
2. Creamos una aplicación que determine si un determinado número es par o impar.
3. Creamos una aplicación que determine si un determinado número es primo.
4. Crear una aplicación que deduzca la calificación (A-F) de un alumno y emita el mensaje correspondiente de acuerdo a la nota ingresada:
  A- Excelente
  B- Buena
  C- Regular
  D- Suficiente
  F- No Suficiente */


//  TAREA 1
  // const numero1 = prompt('Ingresa un numero')
  // const numero2 = prompt('Ingresa un numero')
  // const numero3 = prompt('Ingresa un numero')

  // if(numero1 > numero2 && numero1 > numero3) {
  // console.log('la variable nnumero1 es la mayor');
  // } else if(numero2 > numero1 && numero2 > numero3){
  // console.log('la variable numero2 es la mayor');
  // } else if(numero3 > numero1 && numero3 > numero2){
  // console.log('la variable numero 3 es la mayor');
  // } else {
  // console.log('los numero son iguales');
  // }

  // TAREA 2
  // let numero = prompt('Ingresa un numero') ;
  // numero = numero %2;
  // console.log(numero);

  // if (numero %2 == 0) {
  //   console.log('El numero es par');
  // } else {
  //   console.log('El numero es impar');
  // }


  // TAREA 4
  let nota = prompt('Ingrese su calificacion').toUpperCase();
  console.log(nota);
  
  if (nota == 'A') {
    console.log('Excelente');

  } else if (nota == 'B'){
    console.log('Buena');
  } else if (nota == 'C'){
    console.log('Regular');
  } else if (nota == 'D'){
    console.log('Suficiente');
  } else if (nota == 'F'){
    console.log('No Suficiente');
  }
