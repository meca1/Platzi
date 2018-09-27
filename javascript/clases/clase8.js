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

// function cumpleaños(persona) {
//   // persona.edad = persona.edad + 1 
//   // persona.edad += 1 
//   persona.edad ++ 
// }
// AQUI ESTOY MODIFICANO EL ATRIBUTO EDAD

// function cumpleaños(edad) {
//   edad += 1  
// }
// AQUI NO MODIFICO EL OBJETO

function cumpleaños(persona) {
  // persona.edad = persona.edad + 1 
  // persona.edad += 1 
  // persona.edad ++ 
  return {
    ...persona,
    edad: persona.edad + 1
  }
}
var sachaViejo = cumpleaños(sacha)
var viejo = cumpleaños(sachaViejo)
