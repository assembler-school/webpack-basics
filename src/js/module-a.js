//Uso de flecha
export function arrow() {
  const bodyBcg = document.querySelector('body');
  const colors = ['red', 'blue', 'purple', 'orange'];

  const changeColor = () => {
    let random = Math.floor(Math.random() * colors.length);
    bodyBcg.style.background = colors[random];
  };

  document.getElementById("button-body").addEventListener('click', changeColor);
}

//Funcion clases
class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
  get area() {
    return this.alto * this.ancho;
  }
}

export function clases() {
  const cuadrado = new Rectangulo(10, 10);
  alert("Area: " + cuadrado.area);
}

//Uso de let y const + template string
export function templateString() {
  let pruebaLet = `Esto es la prueba de el uso de let`;
  const pruebaConst = `Este
es el uso de const
con Template String y saltos
de línea`;
  document.getElementById("text-1").innerHTML = pruebaLet;
  document.getElementById("text-1").classList.add("font-weight-400");
  document.getElementById("text-2").innerHTML = pruebaConst;
  document.getElementById("text-2").classList.add("font-weight-600");
}