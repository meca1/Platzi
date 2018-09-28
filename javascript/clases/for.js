var sacha = {
  nombre: 'sacha',
  apellido: 'ramos',
  edad: 28,
  peso: 75
}

const CAMBIO_DE_PESO = 0.2
const DIAS_DEL_AÑO = 365  

const aumentarDePeso = persona => persona.peso += CAMBIO_DE_PESO
const disminuirDePeso = persona => persona.peso -= CAMBIO_DE_PESO



console.log(`Al incio del año ${sacha.nombre} pesaba ${sacha.peso} kg`);

for (let i = 1; i <= DIAS_DEL_AÑO; i++) {
  let  random  = Math.random()
  if (random < 0.25){
    aumentarDePeso(sacha)
  }else if (random < 0.5){
    disminuirDePeso(sacha)
  }  
}

console.log(`al final de año ${sacha.nombre} pesa ${sacha.peso.toFixed(1)} kg`);
