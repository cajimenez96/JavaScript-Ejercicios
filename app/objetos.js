let persona = {
  // String, Number, Boolean, Function, Array, Objeto
  nombre: "",
  apellido: "",
  altura: 0,
  auto: {
    color: 'gris',
    anio: 2009,
  },
  familiares: ["mama", "papa", "hermano", "hermana"],
};

persona.peso = 0;

persona.nombre = "Agustin";
persona.apellido = "Perez";
persona.altura = 173;
persona.peso = 60;

let llaves = Object.keys(persona);
for (let index = 0; index < llaves.length; index++) {
  let llave = llaves[index];
  console.log(persona[llaves[index]]);
}

console.log('--------------------------');
// alert(`Bienvenido ${persona.nombre} ${persona.apellido}, gracias por venir!`);
// console.log(persona);

persona.apellido = "Tarancón";
delete persona.peso;
// console.log(persona);
// alert(`Bienvenido ${persona.nombre} ${persona.apellido}, gracias por venir!`);


console.log(persona["auto"]);
console.log(persona.auto.anio);
console.log(persona.familiares[2]);

let productos = [
  {id: 0, name: 'Leche', price: 120, categories: ["familiar", "comida"]},
  {id: 1, name: 'dulce de leche', price: 300, categories: ["familiar", "comida"]},
];


for (let index = 0; index < productos.length; index++) {
  let producto = productos[index];
  let caracteristicasProducto = Object.keys(producto);


  caracteristicasProducto.map((key) => console.log(`${key}: ${producto[key]}`));

  // console.log(producto.name);
  // console.log('ID: ', producto.id);
  // console.log('PRICE: ', producto.price);
  // console.log('Categories: ', producto.categories);
}

//Buscar información sobre:
// FOREACH - FORIN - MAP - FILTER - FIND
console.log('--------------------------');

/*---------------- FOREACH ----------------*/
/* Un forEach nos permite iterar los elemetos de una matriz y/o de un array */

// const objeto = {
//   nombre: "Ejemplo",
//   matriz: [[1, 2], [3, 4], [5, 6]]
// };

// objeto.matriz.forEach(function(element) {
//   element.forEach(function(subElement) {
//     console.log(subElement);
//   });
// });

/* Puede llegar a servir si dentro de un  objeto tenemos un array que contiene un subarray es decir objeto {array = [2,3][3,2][1,2]} */



// productos[0].categories.forEach(function(Element) {
//  console.log(Element);});
/* tambien podriamos iterar un parametro de array qe se encuentra dentro de un parametro de array */


// Object.values(persona.auto).forEach(function (values) {
//   console.log(values);
//   /* De esta manera podemos obtener los valores de cada parametro y, si asi se desea, ver tambien los valores de los subParametros */
// })

/* ACLARACIONES: recordemos que la funcion de forEach recibe parametros {elementos, index o matriz} utilizamos el (index) para que nos muestre la posicion de cada elemento y podemos usar (array) para que nos muestre todos los elementos contenidos en un array */

/*---------------- FORIN ----------------*/

/*--------------------Que hace?
Itera sobre todas las propiedades enumerables de un objeto, incluyendo las propiedades heredadas del prototipo del objeto. */

/* -------------------Propiedades heredads del prototipo?:  
En JavaScript, los objetos pueden tener un prototipo del cual heredan propiedades y métodos. El bucle for...in también itera sobre las propiedades heredadas del prototipo.
Ejemplo:

// Definimos un objeto 'persona' con una propiedad 'nombre'
const persona = {
  nombre: "Juan"
};

// Creamos otro objeto 'empleado' que hereda de 'persona' y tiene una propiedad adicional 'profesion'
const empleado = Object.create(persona);
empleado.profesion = "Ingeniero";

// Iteramos sobre las propiedades del objeto 'empleado' utilizando 'for...in'
for (let propiedad in empleado) {
  console.log(propiedad + ": " + empleado[propiedad]);
}

En este ejemplo, tenemos un objeto persona con una propiedad nombre. Luego, creamos otro objeto empleado utilizando Object.create(persona) para heredar las propiedades de persona. El objeto empleado también tiene una propiedad adicional llamada profesion.

Al utilizar foá tanto la propiedad r...in para iterar sobre las propiedades del objeto empleado, se incluirnombre heredada de persona, como la propiedad profesion específica de empleado.

Para evitar heredar las propiedades de prototipo podemos usar .hasOwnProperty() 
en un if de la siguiente manera: 

for (let propiedad in empleado) {
  if (empleado.hasOwnProperty(propiedad)) {
    console.log(propiedad + ": " + empleado[propiedad]);
  }
}

/* ------------------- Diferencia con el forEach
la principal diferencia entre forEach y for...in es que forEach se utiliza para iterar sobre los valores de una matriz o los valores de las propiedades de un objeto, mientras que for...in se utiliza para iterar sobre las propiedades de un objeto, incluyendo las propiedades heredadas del prototipo.
*/


/*---------------- MAP ----------------*/

/*  El método map() en JavaScript se utiliza para transformar cada elemento de un array y generar un nuevo array con los resultados de aplicar una función a cada elemento del array original. 

ejemplo:

const array = [1, 2, 3, 4, 5];

const newArray = array.map(function(element) {
  return element * 2;
});

console.log(newArray);


En este ejemplo, tenemos un array llamado array con cinco elementos. Luego, utilizamos el método map() en array y pasamos una función anónima como argumento. La función anónima se ejecutará para cada elemento del array y devolverá el resultado de multiplicar cada elemento por 2. El resultado se almacenará en un nuevo array llamado newArray.


mismo ejemplo pero con funcion flecha

const array = [1, 2, 3, 4, 5];

const newArray = array.map(element => element * 2);

console.log(newArray);

*/


/*---------------- FILTER ----------------*/

/*  El método filter() en JavaScript se utiliza para crear un nuevo array que contiene solo los elementos del array original que cumplen una condición específica. Aquí tienes un ejemplo básico de cómo funciona:

const array = [1, 2, 3, 4, 5];

const newArray = array.filter(function(element) {
  return element % 2 === 0;
});

console.log(newArray);

En este ejemplo, tenemos un array llamado array con cinco elementos. Utilizamos el método filter() en array y pasamos una función anónima como argumento. La función anónima se ejecutará para cada elemento del array y devuelve true o false dependiendo de si el elemento cumple o no con una condición (en este caso, si es divisible por 2 sin residuo). El nuevo array newArray contendrá solo los elementos que cumplan con la condición.
*/



/*---------------- FILTER ----------------*/

/*El método find() en JavaScript se utiliza para encontrar el primer elemento en un array que cumple con una condición específica. Aquí tienes un ejemplo básico de cómo funciona:

const array = [1, 2, 3, 4, 5];

const foundElement = array.find(function(element) {
  return element > 3;
});

console.log(foundElement);

En este ejemplo, tenemos un array llamado array con cinco elementos. Utilizamos el método find() en array y pasamos una función anónima como argumento. La función anónima se ejecutará para cada elemento del array y devuelve true o false dependiendo de si el elemento cumple o no con una condición (en este caso, si es mayor que 3). find() devolverá el primer elemento que cumpla con la condición.

Da como resultado "4"
*/