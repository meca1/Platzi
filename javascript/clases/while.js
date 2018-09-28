var sacha = {
  nombre: 'sacha',
  apellido: 'ramos',
  edad: 21,
  peso: 70
}

const CAMBIO_DE_PESO = 0.2
const PESO_DESEADO = sacha.peso - 3

const subirPeso = persona => persona.peso += CAMBIO_DE_PESO
const bajarPeso = persona => persona.peso -= CAMBIO_DE_PESO


var dias = 0
var hola = true
while (sacha.peso > PESO_DESEADO) {
  let random = Math.random()
  if (random < 0.25) {
    subirPeso(sacha)
  } else if (random < 0.5) {
    bajarPeso(sacha)
  }
    dias++
  
}

console.log(`${sacha.nombre} se demoro ${dias} dias en legar a su peso deseado de: ${PESO_DESEADO} kg `);
