// var sacha = {
//   nombre: 'sacha',
//   apellido: 'ramos',
//   edad: 28
// }

// var daniel = {
//   nombre: 'daniel',
//   apellido: 'ruiz',
//   edad: 21 
// }

// function inprmirNombreEnMayusculas(persona) {
//    var nombre = persona.nombre.toUpperCase()
//   console.log(nombre);
// }

// function inprmirNombreEnMayusculas(persona) {
//   console.log(persona.nombre.toUpperCase());
// }

// function inprmirNombreEnMayusculas(persona) {
//   // var nombre = persona.nombre
//   var {nombre} = persona
//   console.log(nombre.toUpperCase());
// }


// inprmirNombreEnMayusculas(sacha);
// inprmirNombreEnMayusculas(daniel);
// inprmirNombreEnMayusculas({nombre: 'pepito'})
// inprmirNombreEnMayusculas()

// function imprimirNombreYEdad(persona) {
//   var {nombre} = persona, {edad} = persona
//   console.log(` Hola, me llamo ${nombre} y tengo ${edad} años `); 
// }

var sacha = {
  nombre: 'sacha',
  apellido: 'ramos',
  edad: 28
}

var daniel = {
  nombre: 'daniel',
  apellido: 'ruiz',
  edad: 21 
}

function imprimirNombreYEdad({nombre,edad}) {
  console.log(` Hola, me llamo ${nombre} y tengo ${edad} años `); 
}

