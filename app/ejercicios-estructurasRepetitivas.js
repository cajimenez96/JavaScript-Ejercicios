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

3. Crear un programa que pida ingresar usuario y contraseña. El programa debe permitir hasta 3 intentos, cuando el usuario y/o la contraseña sean incorrectos. Si se ingresa correctamente ambos antes de 3 intentos erróneos, debe mostrar un mensaje de bienvenida. Si se ingresan 3 intentos erróneos, debe mostrar un mensaje de error y terminar el programa. El usuario y la contraseña ya deben estar guardadas en variables.
*/

//EJERCICIO 1 

    // let pisos = prompt("Ingrese el numero de pisos para su triangulo")
    // while(pisos<=0||pisos>50||isNaN(pisos)){
    //   alert("Ingrese un numero entre 1 y 50");
    //   pisos=prompt("Ingrese el numero de pisos para su triangulo");
    // }
    // for(let i=1;i<=pisos;i++){
    //   let bloques ='';
    //   for(let j=1;j<=i;j++){
    //     bloques+="*";
    //   }
    //   console.log(bloques);
    // }

//EJERCICIO 2
    // let total = 0;
    // let stop = false;
    //   while(!stop){
    //   let index=prompt("Ingrese un numero")
    //   while (isNaN(index)) {
    //     alert("Ingresa un numero, capo");
    //     index=prompt("meta pone un numero")
    //   }
    //   if(index===null){
    //     stop=true;
    //     console.log(total);
    //   }
    //   total+=parseInt(index);
    //   }

//EJERCICIO 3

    let userPass = "1234";
    let userName = "abcd";
    let indexUser=prompt("User ID");
    let indexPass=prompt("Password");

    let intentos = 0;

      while(indexUser!==userName||indexPass!==userPass){
        alert("User or password incorrect, please retry.")
        indexUser=prompt("User ID");
        indexPass=prompt("Password");
        intentos++;
        if(intentos===2)break;
      } 
      if(indexUser===userName&&indexPass===userPass){
        alert("Bienvenido");
      }else alert("ERROR!");