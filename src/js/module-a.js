//Uso de flecha
let a = 4;
let b = 2;
() => a + b + 100;
//Funcion clases
class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
}
const cuadrado = new Rectangulo(10, 10);
//Uso de let y const + template string
let pruebaTexto = `Esto es la prueba de el uso de let`;
const prueba = `Este es el uso de const con Template String`;
