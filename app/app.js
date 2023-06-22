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


// ejercicio 1:
  const a = prompt('ingrese el primer numero');
  const b = prompt('ingrese el segundo numero');
  const c = prompt('ingrese el tercer numero');
  if(a == b && b == c){
    console.log('Los 3 numeros son iguales');
  }else if(a>=b && b>=c){
    if(a==b){
      console.log('el numero 1 y 2 son iguales y mayores y el tercer numero es el menor');
    }else if(b==c){
      console.log('el primer numero es mayor y el segundo y el tercero son menores e iguales entre si');
    }else{
      console.log('el primero numero es mayor y el tercero es el menor');
    }
  }else if(b>=c && c>=a){
    if(b==c){
      console.log('el segundo y el tercer numero son mayores e iguales y el primero es menor');
    }else if(c==a){
      console.log('el segundo numero es mayor y el segundo y el tercero son los menores e iguales');
    }else{
      console.log('el primer numero es mayor y el tercero es el menor');
    }
  }else if(c>=b && b>=a){
    if(c==b){
      console.log('el tercer y el segundo numero son iguales y mayores y el primero es el menor de todos');
    }else if(b==a){
      console.log('el tercer numero es el mayor y el segundo con el primero son los menores e iguales de los 3');
    }else{
      console.log('el ultimo numero ingresado es el mayor y el primero es el menor');
    }
  }
  
  // ejercicio 2:
  const x = prompt('ingrese un numero para saber si par o impar');
  if(x % 2 == 0){
    console.log('el numero es par');
  }else{
    console.log('es impar');
  }
  
  // ejercicio 3:
  const num = prompt('ingrese un numero para saber si es primo');
  if(num % num === 0 && num/num===1){
    console.log('el numero es primo');
  }else{
    console.log('el numero no es primo');
  }

  // ejercicio 4:
  const nota = prompbt('ingrese la nota del alumno').toUpperCase() ;
  if(nota=='A'){
    console.log('Excelente');
  }else if(nota=='B'){
    console.log('buena');
  }else if(nota=='C'){
    console.log('regular');
  }else if(nota=='D'){
    console.log('suficiente');
  }else if(nota=='E'){
    console.log('insuficiente');
  }