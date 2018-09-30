class persona{
  constructor(nombre, apellido, altura ) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }
  
  saludar(fn){
    var {nombre, apellido} = this

    console.log(`hola me llamo ${nombre} ${apellido}`);
    if (fn) {
      fn(nombre,apellido)
    }
  }
  soyAlto () {
    console.log(`${this.nombre} ${this.altura  >= 1.8 ? 'es una persona':'no es una persona'} alta`);
  }
}
 
class desarrolador extends persona{
  constructor(nombre, apellido,altura){
    super (nombre,apellido,altura)
  }

  saludar(fn){
    var {nombre, apellido} = this

    console.log(`hola, me llamo ${nombre} ${apellido} y soy desarroyllador   `);
     if (fn) {
      fn(nombre,apellido,true)
    }
  }
}

function responderSaludo (nombre, apellido, esDev) {
  console.log(`buen dia ${nombre} ${apellido}`)
  if (esDev) {
    console.log(`ha mira no sabia que eras desarrollador`)
  }
}

var sacha = new persona('sacha', 'ramos', 1.88)
var erika = new persona('erika', 'luna', 1.80)
var arturo = new desarrolador('arturo', 'martinez',1.75)

sacha.saludar()
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)