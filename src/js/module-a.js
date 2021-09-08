let arrow = document.getElementById("arrow");

const arrowFunction = () => {
  let textColor = null;
  arrow.classList.toggle("red-text");

  console.log(arrow.style.fontSize);

  if (arrow.children.length < 1) {
    let newElement = document.createElement("p");
    arrow.append(newElement);
  }

  let p = document.querySelector("#arrow > p");
  if (arrow.classList.contains("red-text")) {
    textColor = "Red";
  } else {
    textColor = "Black";
  }
  p.textContent = `The text color is: ${textColor}`;
};

class flight {
  constructor(destiny) {
    this.destiny = destiny;
  }
}
const flightToBarcelona = new flight("Barcelona");
let pFlight = document.createElement("p");
pFlight.className = "text-small";
pFlight.textContent = `This flight goes to ${flightToBarcelona.destiny}`;
document.querySelector("body").appendChild(pFlight);

export { arrow, arrowFunction };
