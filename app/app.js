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

// 1:
  
function comparacion(a,b,c){
if (a==b==c){
  console.log("Son Iguales");
}
let numbers=[a,b,c]
let max=Math.max(...numbers)
console.log(max);

}

// 2:
  
function Paridade(n){
  if (n%2==0){
    console.log("Es Par");
  }
else{
  console.log("Es Impar")
}
  
  }


// 3:
  
function Primo(n){
let div=[]
  for(let i=1;i<n+1;i++){
    if(n%i==0){
      div.push(i)
    }
  }
  d=div.length
  if(d==2){
    console.log("Es Primo")
  }
  else {
    console.log("No es Primo")
  }
  }

  // 4:
  
  function Qualificacion(nota){
    if (nota >= 90 && nota <= 100) {
      console.log("A: Excelente ");
    } else if (nota >= 80 && nota <= 89) {
      console.log("B: Buena");
    } else if (nota >= 70 && nota <= 79) {
      console.log("C: Regular");
    } else if (nota >= 60 && nota <= 69) {
      console.log("D: Suficiente");
    } else if (nota >= 0 && nota <= 59) {
      console.log("F: No Suficiente");
    }
  }
  
