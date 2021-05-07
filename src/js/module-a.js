export function arrow() {
  //Uso de flecha
  let a = 4;
  let b = 2;
  () => a + b + 100;
}
//Funcion clases

export function clases() {
  const cuadrado = new Rectangulo(10, 10);
  class Rectangulo {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
  }
}

//Uso de let y const + template string
export function templateString() {
  let pruebaTexto = `Esto es la prueba de el uso de let`;
  const prueba = `Este es el uso de const con Template String`;
}
