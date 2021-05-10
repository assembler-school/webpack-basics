var sum = (a, b) => {
  const result = a + b;
  return result;
};
var multiply = (a, b) => {
  let result = a * b;
  return result;
};

// Example 1: Creating a new class (declaration-form)
// ===============================================================

// A base class is defined using the new reserved 'class' keyword
class Polygon {
  // ..and an (optional) custom class constructor. If one is
  // not supplied, a default constructor is used instead:
  // constructor() { }
  constructor(height, width) {
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }

  // Simple class instance methods using short-hand method
  // declaration
  sayName() {
    console.log("Hi, I am a ", this.name + ".");
  }

  sayHistory() {
    console.log(
      '"Polygon" is derived from the Greek polus (many) ' + "and gonia (angle)."
    );
  }
}

var testText = (text) => {
  console.log(`${text} this is in between texts ${text}`);
};

const rectangulo = new Polygon(100, 200);
document.getElementById(
  "addText"
).textContent = `Este ${rectangulo.name} tiene una altura de
${rectangulo.height} y un ancho de ${rectangulo.width}`;
document.getElementById("addText").style.height = `${rectangulo.height}px`;
document.getElementById("addText").style.width = `${rectangulo.width}px`;
document.getElementById("btn2").addEventListener("click", () => {
  testText("LALALA");
  document.querySelector("body").classList.toggle("yellowBack");
  document.querySelector("#addText").classList.toggle("redBack");
});
