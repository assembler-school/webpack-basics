export function sum(a, b) {
  return a + b;
}

console.log(sum(2, 2));

export class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.alto * this.ancho;
  }
}

export const paragraph = `This a paragraph using a Template String`;

let cuadrado = new Rectangulo(10, 10);

console.log(cuadrado.area);

console.log(paragraph);
