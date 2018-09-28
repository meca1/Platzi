var daniel = {
  nombre: 'daniel',
  apellido: 'ramos',
  altura: 1.75
}
var diego = {
  nombre: 'diego',
  apellido: 'ramos',
  altura: 1.69
}
var yuli = {
  nombre: 'yuliana',
  apellido: 'perez',
  altura: 1.57
}
var diana = {
  nombre: 'diana',
  apellido: 'hoyos',
  altura: 1.71
}
var jhordan = {
  nombre: 'jhordan',
  apellido: 'medina',
  altura: 1.65
}
var felipe = {
  nombre: 'felipe',
  apellido: 'hoyos',
  altura: 1.10
}
// for (let i = 0; i < personas.length; i++) {
//   const persona = personas[i];
//   console.log(`${persona.nombre} mide ${persona.altura} mts`);

// }

var personas = [daniel, diego, yuli, diana, jhordan, felipe]




// var personasAltas = personas.filter(function esAlta (persona){
//   return persona.altura > 1.70
// } )

// const esAlta = ({altura}) => altura >= 1.70
// var personasAltas = personas.filter(esAlta)

var personasAltas = personas.filter(esAlta = ({ altura }) => altura > 1.70)
console.log(personasAltas);

var personasBajas = personas.filter(esAlta = ({ altura }) => altura < 1.70)
console.log(personasBajas);

