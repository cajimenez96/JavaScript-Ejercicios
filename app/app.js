/* Estructuras condicionales!!

Vamos a crear nuestro app.js y vamos a tratar de resolver lo siguientes ejercicios aplicando el conocimiento que ya tenemos:

1. Crear una aplicación la cual tendremos que crear 3 números, luego vamos a determinar cual es el mayor y/o si son iguales o no. ✔
2. Creamos una aplicación que determine si un determinado número es par o impar.✔
3. Creamos una aplicación que determine si un determinado número es primo.

4. Crear una aplicación que deduzca la calificación (A-F) de un alumno y emita el mensaje correspondiente de acuerdo a la nota ingresada:
  A- Excelente
  B- Buena
  C- Regular
  D- Suficiente
  F- No Suficiente */
  
  // alert('ACTIVIDAD 1');

  alert('esta es una aplicacion para determinar cual de los 3 numeros es mayor');
  const n1 = prompt('ingresa el primer numero');
  const n2 = prompt('ingresa el segundo numero');
  const n3 = prompt('ingresa el tercer numero');


  if((n1==n2) && (n1==n3) && (n3==n2)){
   alert('los tres numeros son iguales, el numero es: '+ n1)
  }
   else{
     alert('el numero mayor es: ' + Math.max(n1,n2,n3))
  }

  // --------------------------------------------------------------- //
  // ACTIVIDAD 2
  alert('ACTIVIDAD 2');
  alert('esta es una aplicacion para determinar si un numero es par o impar');
  const num = prompt('ingresa el numero');

  if(num % 2 == 0){
    alert('el numero '+num+' es par ');
  }else{
    alert('el numero '+num+' es impar ');

  }
  // --------------------------------------------------------------- //
  // ACTIVIDAD 3
  // alert('ACTIVIDAD 3');
  // alert('esta es una aplicacion para determinar si un numero es primo');

  // --------------------------------------------------------------- //
  // ACTIVIDAD 4
   
  alert('ACTIVIDAD 4');
  alert('esta es una aplicacion para deducir la calificación (A-F) de un alumno');
  let cal = prompt('ingresa tu calificacion (A, B, C, D, E o F)');
  
  if(cal=='A' || cal=='a'){
    alert('tu calificacion es exelente');
  }else if((cal=='B' || cal=='b')){
    alert('tu calificacion es buena');
  }else if((cal=='C' || cal=='c')){
    alert('tu calificacion es regular');
  }else if((cal=='D' || cal=='d')){
    alert('tu calificacion es suficiente');
  }else if((cal=='F' || cal=='f')){
    alert('tu calificacion es No Suficiente');
  }else{
    alert('introducir una letra valida');
  }
  

  

  


