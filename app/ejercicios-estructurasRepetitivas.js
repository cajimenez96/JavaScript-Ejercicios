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

//TAREA 1)
// let numero = parseInt(prompt('ingrese un numero'));
// for (let index = 0 ; index < numero; index++) {
//   let astericos = '*' + numero;
//   console.log(`${numero}`);
// }



// //TAREA 2)
  let numeros = parseInt(prompt('ingrese sus numeros'));
 while (numeros >= 0) {
   numeros = parseInt(prompt('ingrese sus numeros'));
  }
 
//  let numeros = parseInt(prompt('ingrese sus numeros'));
//  if (numeros >= 0) {
//   numeros = parseInt(prompt('ingrese sus numeros'));
//  } else { (numeros == '')
//   alert('Esto no es un numero');
  
//  }
