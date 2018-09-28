const signo = prompt('¿Cual es tu signo?')




const horoscopos = [
  '21 marzo - 19 abril',
  '20 abril - 20 mayo',
  '21 mayo - 20 junio',
  '21 junio - 22 julio',
  '23 julio - 22 agosto',
  '23 agosto - 22 septiembre',
  '23 septiembre - 22 octubre',
  '23 octubre - 21 noviembre',
  '22 noviembre - 21 diciembre',
  '22 diciember - 19 enero',
  '20 enero - 18 febrero',
  '19 febrero - 20 marzo'
]

const calcularSigno = function (signo) {
  switch (signo.toLowerCase()) {
    case'aries':
      console.log(horoscopos[0])
      break
    case'tauro':
      console.log(horoscopos[1])
      break
    case'géminis':
      console.log(horoscopos[2])
      break
    case'cáncer':
      console.log(horoscopos[3])
      break
    case'leo':
      console.log(horoscopos[4])
      break
    case'virgo':
      console.log(horoscopos[5])
      break
    case'libra':
      console.log(horoscopos[6])
      break
    case'escorpión':
      console.log(horoscopos[7])
      break
    case'sagitario':
      console.log(horoscopos[8])
      break
    case'capricornio':
      console.log(horoscopos[9])
      break
    case'acuario':
      console.log(horoscopos[10])
      break
    case'piscis':
      console.log(horoscopos[11])
      break
    default:
      console.log('Ese signo no existe')
      break
  }
}


calcularSigno(signo)