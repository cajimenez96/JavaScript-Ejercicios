// let persona = {
//   // String, Number, Boolean, Function, Array, Objeto
//   nombre: "",
//   apellido: "",
//   altura: 0,
//   auto: {
//     color: 'gris',
//     anio: 2009,
//   },
//   familiares: ["mama", "papa", "hermano", "hermana"],
// };

// persona.peso = 0;

// persona.nombre = "Agustin";
// persona.apellido = "Perez";
// persona.altura = 173;
// persona.peso = 60;

// let llaves = Object.keys(persona);
// for (let index = 0; index < llaves.length; index++) {
//   let llave = llaves[index];
//   console.log(persona[llaves[index]]);
// }
// // alert(`Bienvenido ${persona.nombre} ${persona.apellido}, gracias por venir!`);
// // console.log(persona);

// persona.apellido = "Tarancón";
// delete persona.peso;
// // console.log(persona);
// // alert(`Bienvenido ${persona.nombre} ${persona.apellido}, gracias por venir!`);


// console.log(persona["auto"]);
// console.log(persona.auto.anio);
// console.log(persona.familiares[2]);

// let productos = [
//   {id: 0, name: 'Leche', price: 120, categories: ["familiar", "comida"]},
//   {id: 1, name: 'dulce de leche', price: 300, categories: ["familiar", "comida"]},
// ];


// for (let index = 0; index < productos.length; index++) {
//   let producto = productos[index];
//   let caracteristicasProducto = Object.keys(producto);

//   console.log('--------------------------');
//   caracteristicasProducto.map((key) => console.log(`${key}: ${producto[key]}`));

//   // console.log(producto.name);
//   // console.log('ID: ', producto.id);
//   // console.log('PRICE: ', producto.price);
//   // console.log('Categories: ', producto.categories);
// }

// //Buscar información sobre:
// // FOREACH - FORIN - MAP - FILTER - FIND



/*Formas de crear objetos */

//Funcion constructora -> Es la estructura que va a tener los futuros objetos
// function Persona (name, lastName, document, height) {
//   this.nombre = name;
//   this.apellido = lastName;
//   this.documento = document;
//   this.altura = height;
// };

// let alejo = new Persona("Alejo", "Perez", 12123123);

//Constructor Object() -> Crea un objeto genérico, sin keys
// let franco = new Object();
// console.log(franco);
// franco.nombre = "Franco";
// franco.apellido = "Perez";
// console.log(franco);

//Object.create(objetoAnterior) -> Crea un objeto en base a objetoAnterior
// let vehiculo = Object.create(auto);
// vehiculo.precio = 10;
// console.log(vehiculo);

// let persona1 = {nombre: 'Juan'}
// let persona2 = persona1;

// persona2.nombre = 'mati';
// persona2.apellido = 'juanca';

// console.log(persona1 == persona2);


class Persona {
  //Creamos nuestras key
  constructor (nombre, apellido, documento) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.documento = documento;
  }

  //Creamos nuestros métodos
  comer () {
    console.log(`El objeto ${this.nombre} está comiendo`);
  }

  dormir () {
    console.log(`El objeto ${this.nombre} está durmiendo`);
  }
};


let guada = new Persona();
guada.nombre = "Guadalupe";
guada.comer();
guada.dormir();

let carlos = new Persona();
carlos.nombre = "Carlos";
carlos.comer();
carlos.dormir();
