var daniel = {
  nombre: 'daniel',
  apellido: 'ramos',
  altura: 1.75,
  libros: 52,
}
var diego = {
  nombre: 'diego',
  apellido: 'ramos',
  altura: 1.69,
  libros: 75,
}
var yuli = {
  nombre: 'yuliana',
  apellido: 'perez',
  altura: 1.57,
  libros: 90,
}
var diana = {
  nombre: 'diana',
  apellido: 'hoyos',
  altura: 1.71,
  libros: 15,
}
var jhordan = {
  nombre: 'jhordan',
  apellido: 'medina',
  altura: 1.65,
  libros: 142,
}
var felipe = {
  nombre: 'felipe',
  apellido: 'hoyos',
  altura: 1.78,
  libros: 151,
}

var personas = [daniel, diego, yuli, diana, jhordan, felipe]

// var totalDeLibros = 0

// for (let i = 0; i < personas.length; i++) {
//   totalDeLibros = totalDeLibros + personas[i].libros
// }

// const reducer = (acum, persona) => {
//   return acum + persona.libros
// }

// var totalDeLibros = personas.reduce(reducer, 0)

const reducer = (acum, { libros }) =>
  acum + libros

var totalDeLibros = personas.reduce(reducer, 0)


console.log(`En total todos tiene ${totalDeLibros} libros`);
