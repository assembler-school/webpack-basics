import minus8kbjpg from "../img/minus8kbPng.png";
import minus8kbsvg from "../img/minus8kbSvg.svg";
import plus1mbjpg from "../img/plu1MbJpg.jpg";
import plus12kbsvg from "../img/plus12kbPng.png";

//addEventListener
function addEvents() {
  let startArrow = document.getElementById("button__arrow");
  startArrow.addEventListener("click", arrow);

  let startRectangle = document.getElementById("button__rectangle");
  startRectangle.addEventListener("click", classExmple);

  let startTemplate = document.getElementById("button__templates");
  startTemplate.addEventListener("click", templateString);

  let startLetConst = document.getElementById("button__letConst");
  startLetConst.addEventListener("click", useLetConst);
}

// Make use of the arrow function
function arrow() {
  let data = ["cuadrdro", "rectangulo", "triangulo", "rombo", "pentagono"];
  let reponseArrow = document.getElementById("response__arrow");

  if (reponseArrow.firstChild == null) {
    data.forEach((elem) => {
      let text = document.createElement("p");
      text.innerHTML = `El ${elem} es una figura geometrica`;
      reponseArrow.appendChild(text);
    });
  }
}

// Make use of the new ECMAScript 6 class structure
function classExmple() {
  class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }
  let testRectangle = new Rectangle(200, 500);
  let reponseRectangle = document.getElementById("response__rectangle");
  let area = testRectangle.height * testRectangle.width;
  reponseRectangle.innerHTML = `Area = ${testRectangle.height} x ${testRectangle.width} = ${area}`;
}

// Make use of the Template Strings
function templateString() {
  let name = "Jaime";
  let adjective = "awesome";
  let reponseTemplate = document.getElementById("response__templates");
  reponseTemplate.innerHTML = `I only have to say that ${name} is ${adjective}`;
}

function imagePaster() {
  const images = [minus8kbjpg, minus8kbsvg, plus1mbjpg, plus12kbsvg];
  var root = document.getElementById("root");
  for (const img of images) {
    var image = document.createElement("img");
    image.setAttribute("src", img);
    root.appendChild(image);
  }
}

// Make use of Let and Const
function useLetConst() {
  let radius = 25;
  const PI = 3.14159;
  let circumference = 2 * radius * PI;
  let reponseLetConst = document.getElementById("response__letConst");
  reponseLetConst.innerHTML = `circumference = 2 x ${PI} x ${radius} = ${circumference}`;
}

export {
  addEvents,
  imagePaster,
  templateString,
  useLetConst,
  classExmple,
  arrow,
};
