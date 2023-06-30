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


function obtenerOpcionComputadora() {
  const opciones = ['piedra', 'papel', 'tijera'];
  return opciones[Math.floor(Math.random() * opciones.length)];
}

function determinarGanador() {
  let consulta;
  do {
    consulta = confirm('¿Querés jugar?');

    if (consulta === true) {

      const opcionComputadora = obtenerOpcionComputadora();
      let opcionUsuario = prompt("Elegí entre las siguientes opciones: \n- Piedra \n- Papel \n- Tijera").toLowerCase().trim();

      
      while (opcionUsuario != "piedra" && opcionUsuario != "tijera" && opcionUsuario != "papel") {
        opcionUsuario = prompt("Opción inválida. Por favor, elige una opción válida: \n- Piedra \n- Papel \n- Tijera").toLowerCase().trim();
      }

      if (opcionUsuario === opcionComputadora) {
        console.log('empate');
      } else {
        if (
          (opcionUsuario === 'piedra' && opcionComputadora === 'tijera') ||
          (opcionUsuario === 'papel' && opcionComputadora === 'piedra') ||
          (opcionUsuario === 'tijera' && opcionComputadora === 'papel')
        ) {
          console.log('ganaste');
        } else {
          console.log('perdiste');
        }
      }
    }
  } while (consulta === true);
}

determinarGanador();


