/* En esta clase veremos cómo transformar un array.El método map() itera sobre los elementos 
de un array en el orden de inserción
 y devuelve array nuevo con los elementos modificados.

Función Map
A diferencia de filter, la función Map nos devuelve un nuevo array que modifica a todos 
los elementos del array original.

Para no planchar los valores del array original, es necesario retornar un
 nuevo objeto desglosando al objeto original.
*/

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
  altura: 1.78
}

var personas = [daniel, diego, yuli, diana, jhordan, felipe]

// var pasarAlturaEnCms = persona => {
//   // persona.altura *= 100
//   // return persona

//   return {
//     ...persona,
//     altura: persona.altura*100
//   }
// }

var pasarAlturaEnCms = persona => ({
  ...persona,
  altura: persona.altura * 100
}
)


var personasCms = personas.map(pasarAlturaEnCms)



console.log(personasCms);
