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


// EJERCICIO NUMERO 1

  const numero1=prompt("Ingresa un Numero");
  const numero2=prompt("Ingresa un Numero");
  const numero3=prompt("Ingresa un Numero");
  let maximo = Math.max(numero1, numero2, numero3);

  if (numero1 == numero2 && numero2 == numero3) {
    console.log("Los numeros son iguales", + numero1);
  }
  else{
    console.log("El numero maximo es " + maximo);
  }

