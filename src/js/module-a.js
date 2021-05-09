//Make use of the arrow function
$("#btn").on(
  "click",
  (showAlert = () =>
    $("#result").text("Hello Assembler").removeClass("visibility"))
);
$("#cont").text(`
  ==> CODE
    $("#btn").on(
        "click",
        (showAlert = () =>
          $("#result").text("Hello Assembler").removeClass("visibility")
      );
      `);
$("#cont1").text(`
      ==> CODE
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
    `);
$("#cont2").text(`
    ==> CODE
    let a = 10;
    let b = 10;
    
    $("#btn2").on(
      "click",
      (templateString = () =>
        $("#result2")
          .text('JavaScript first appeared (Dollar Simbol){a + b} years ago. Wow!')
          .removeClass("visibility"))
    );
        `);
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
$("#btn1").on(
  "click",
  (rectangulo = () =>
    $("#result1").text(cuadrado.area).removeClass("visibility"))
);

//Make use of the Template Strings
let a = 10;
let b = 10;

$("#btn2").on(
  "click",
  (templateString = () =>
    $("#result2")
      .text(`JavaScript first appeared ${a + b} years ago. Wow!`)
      .removeClass("visibility"))
);
