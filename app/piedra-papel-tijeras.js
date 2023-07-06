// piedra papel o tijera
//     Crea un juego de piedra papel o tijera, donde el usuario ingrese su eleccion, y la computadora elija una opcion al azar, luego compare las dos opciones e imprima por consola el resultado del juego. */

//DEFINICIONES
// Math.floor(); -> Redondea un numero para abajo
// Math.random(); -> Devuelve numeros entre 0 y 1;
// opciones.length -> longitud del array


//TAREAS A REALIZAR
//Eliminar espaciados de palabras
//Mostrar un mensaje si el usuario ingresó mal la opcion y vuelva a ingresar
//Utilizar una funcion para que la computadora tome un valor
//Utilizar una funcion para determinar el ganador


// let consulta;
// do {
//   //ESTO SE REPITE SIEMPRE AL MENOS UNA VEZ
//   consulta = confirm('¿Querés jugar?');
  
//   if (consulta === true) {
//     const opciones = ['piedra', 'papel', 'tijera'];
//     const opcionUsuario = prompt("Elegí entre las siguientes opciones: \n- Piedra \n- Papel \n- Tijera").toLocaleLowerCase().trim();
//     const index = Math.floor(Math.random() * opciones.length);
//     const opcionComputadora = opciones[index];
//     if (opcionUsuario === opcionComputadora) {
//       console.log('empate');
//     } else {
//       if (opcionUsuario === 'piedra' && opcionComputadora === 'tijera') {
//         console.log('ganaste');
//       } else if (opcionUsuario === 'papel' && opcionComputadora === 'piedra') {
//         console.log('ganaste');
//       } else if (opcionUsuario === 'tijera' && opcionComputadora === 'papel') {
//         console.log('ganaste');
//       }
//     }
//   }
//   //DETERMINA SI VOLVEMOS A REPETIR
// } while (consulta === true);
