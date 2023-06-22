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



//-----------Ejercicio 1-------------


/* 
alert("Ingrese 3 números");
let numero1=parseInt(prompt("Ingrese el primero"));
let numero2=parseInt(prompt("Ingrese el segundo"));
let numero3=parseInt(prompt("Ingrese el tercero"));

if(numero1==numero2 && numero1==numero3){
  console.log(`los 3 numeros ingresados son iguales`);

}else if(numero1==numero2 && numero1>numero3){
  console.log(`El primer (${numero1}) y el segundo (${numero2}) número ingresado son iguales y los mayores`);

}else if(numero2==numero3 && numero2>numero1){
  console.log(`El segundo (${numero2}) y el tercer (${numero3}) número ingresado son iguales y los mayores`);

}else if(numero3==numero1 && numero3>numero2){
  console.log(`El primer (${numero1}) y el tercer (${numero3}) número ingresado son iguales y los mayores`);

}else if(numero1==numero2 && numero1<numero3){
  console.log(`El tercer (${numero3}) número ingresado es el mayor;  el primero (${numero1}) y el segundo (${numero2}) son iguales`);

}else if(numero1==numero3 && numero1<numero2){
  console.log(`El segundo (${numero2}) número ingresado es el mayor;  el primero (${numero1}) y el tercero (${numero3}) son iguales`);

}else if(numero2==numero3 && numero2<numero1){
  console.log(`El primer (${numero1}) número eingresado s el mayor;  el segundo (${numero2}) y el tercero (${numero3}) son iguales`);

}else if(numero1>numero2 && numero1>numero3){
  console.log(`El primer número ingresado (${numero1}) es el mayor`);

}else if(numero2>numero1 && numero2>numero3){
  console.log(`El segundo número ingresado (${numero2}) es el mayor`);

}else if(numero3>numero1 && numero3>numero2){
  console.log(`El tercer número ingresado (${numero3}) es el mayor`);

}
*/




//-----------Ejercicio 2-------------


/*
let numero=prompt("Ingrese un numero");

if(numero%2==0){
  console.log("El número ingresado es par");

}else{
  console.log("El número ingresado es impar");
}

*/



//-----------Ejercicio 3-------------


/*
let numero=prompt("Ingrese un número");

if(numero%numero==0 && numero%1==0){
  console.log("El número ingresado es un numero primo");

}else{
  console.log("El número ingresado no es un numero primo");
}
*/



//--------------Ejercicio 4----------------

/*
let nota=prompt("Ingrese una nota");
nota=nota.toUpperCase();

if(nota=="A"){
  console.log(`El alumno sacó una nota Exelente(${nota})`);

}else if(nota=="B"){
  console.log(`El alumno sacó una nota buena(${nota})`);

}else if(nota=="C"){
  console.log(`El alumno sacó una nota Regular(${nota})`);

}else if(nota=="D"){
  console.log(`El alumno sacó una nota Suficiente(${nota})`);

}else if(nota=="F"){
  console.log(`El alumno sacó una nota No Suficiente(${nota})`);

}¨
*/