var sacha = {
  nombre: 'sacha',
  apellido: 'ramos',
  edad: 28
}

var daniel = {
  nombre: 'daniel',
  apellido: 'ruiz',
  edad: 17 
}

const MAYORIA_DE_EDAD = 18

// const esMayorDeEdad = function (persona) {
//   return persona.edad >= MAYORIA_DE_EDAD
// }
const esMayorDeEdad =  ({edad}) => edad >= MAYORIA_DE_EDAD


var imprimirSiEsMayorDeEdad = persona => {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`);
  }
  else {
    console.log(`${persona.nombre} es menor de edad`);  
  }
}
const permitirAcceso = persona => console.log(`${!esMayorDeEdad(persona) ? 'ACCESO DENEGADO':''}`)
const acceso = ({ edad }) => edad < MAYORIA_DE_EDAD ?  'ACCESO DENEGADO' : 'Todo bien'
