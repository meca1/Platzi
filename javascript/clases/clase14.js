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

function esMayorDeEdad(persona) {
  return persona.edad >= 18
}

function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`);
  }
  else {
    console.log(`${persona.nombre} es menor de edad`);  
  }
}