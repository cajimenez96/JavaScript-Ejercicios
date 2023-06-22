/* 

EJERCICIOS CON CICLOS REPETITIVOSSS!!!

1. Dibujar un triángulo con asteriscos. El usuario tecleará un valor entero, el programa escribirá con asteriscos tantas lineas como diga ese número. Cada linea estará formada por una serie de astericos tan larga como diga el número de línea en el que está. (No más de 50)

  Para separar una linea de la siguiente en console o en alert debes usar "\n". En este ejercicio usa console.log. 

  Por ejemplo: Le tecleamos el valor 5. El resultado será:
    *
    **
    ***
    ****
    *****

2. Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

3. Crear un programa que pida ingresar usuario y contraseña. El programa debe permitir hasta 3 intentos, cuando el usuario y/o la contraseña sean incorrectos. 
Si se ingresa correctamente ambos antes de 3 intentos erróneos, debe mostrar un mensaje de bienvenida. Si se ingresan 3 intentos erróneos, debe mostrar un mensaje de error
 y terminar el programa. El usuario y la contraseña ya deben estar guardadas en variables.
*/





//-----------Ejercicio 1-------------

/*
let lineas=prompt("Ingrese la cantidad de líneas que desea no tiene que ser mayor de 50");

while(lineas>50){
  alert("Las lineas ingresadas superan el máximo permitido");
  lineas=prompt("Ingrese nuevamente la cantidad de lineas");
}

for(let index=0;index<=lineas;index++){

  for(let a=0;a<index;a++){
    console.log("*");
  }
  console.log("\n");
}
*/






//-----------Ejercicio 2-------------

/*
let numero=0;

numero=parseInt(prompt("Ingrese un numero"));
let numero2=Number(numero);

while(!Number(numero)){
    alert("El dato ingresado NO es un número");
    numero=prompt("Ingrese un número");
}

if(confirm("Desea seguir escribiendo otro numero?")==true){
    
    do{
        numero=prompt("Ingrese un número");
        if(Number(numero)){
            numero2=Number(numero2)+Number(numero);
        }else{
            while(!Number(numero)){
                alert("El dato ingresado NO es un número");
                numero=prompt("Ingrese nuevamente un número");
            }
            numero2=Number(numero2)+Number(numero);
        }
        
    }while(confirm("Desea seguir escribiendo otro numero?")==true);

    console.log(`la suma total de los numeros ingresados es igual a ${numero2}`);
    
}else{
  console.log(`la suma total de los numeros ingresados es igual a ${numero2}`);
}
*/





//-----------Ejercicio 3-------------

let usuario="franco";
let contraseña="0000";

let usuarioIn=prompt("Ingrese el usuario");
let contraseñaIn=prompt("Ingrese la contraseña");

for(let index=2;index>=0;index--){

  if(usuario==usuarioIn && contraseña==contraseñaIn){
    alert("Bienvenido a nuestra app");
    index=-1;

  }else if(usuario==usuarioIn && contraseña!=contraseñaIn){
    alert(`Contraseña incorrecta, ingrese nuevamente. (quedan ${index} intentos)`);
    usuarioIn=prompt("Ingrese el usuario");
    contraseñaIn=prompt("Ingrese la contraseña");

  }else if(contraseña==contraseñaIn && usuario!=usuarioIn){
    alert(`Usuario incorrecto, ingrese nuevamente. (quedan ${index} intentos)`);
    usuarioIn=prompt("Ingrese el usuario");
    contraseñaIn=prompt("Ingrese la contraseña");

  }else if(usuario!=usuarioIn && contraseña!=contraseñaIn){
    alert(`Usuario y contraseña incorrectos, ingrese nuevamente. (quedan ${index} intentos)`);
    usuarioIn=prompt("Ingrese el usuario");
    contraseñaIn=prompt("Ingrese la contraseña");
  }
    
  if(index==0){
    alert("ERROR - Maximos intentos superado. Intente de nuevo mas tarde")
  }
}