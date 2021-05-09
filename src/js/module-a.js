//Make use of the arrow function
$('.btn').on('click', (showAlert = () => alert("Hello Assembler")));

//Make use of the new ECMAScript 6 class structure
class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
    // Getter
    get area() {
        return this.calcArea();
    }
    // Método
    calcArea() {
        return this.alto * this.ancho;
    }
}

const cuadrado = new Rectangulo(10, 10);
console.log(cuadrado.area);

//Make use of the Template Strings
let a = 10;
let b = 10;
console.log(`JavaScript first appeared ${a+b} years ago. Wow!`);