/* A file called module-a.js that contains a
javascript module that makes use of the new features of ECMAScript 6 such as:

*Make use of the arrow function
*Make use of the new ECMAScript 6 class structure
*Make use of the Template Strings
*Make use of Let and Const
 */



export class CardContent {
  constructor() {
    this.newCard = document.createElement("div");
    this.cardTitle = document.createElement("h2");
    this.cardText = document.createElement("p");
    this.cardImg = document.createElement("img");
  }

  createCard(title, imgSrc, imgAlt, number) {
    this.newCard.classList.add("card");
    this.cardTitle.textContent = title;
    this.newCard.append(this.cardTitle);

    this.cardImg.setAttribute("src", imgSrc);
    this.cardImg.setAttribute("alt", imgAlt);
    this.newCard.append(this.cardImg);

    this.cardText.textContent = `This is the card number: ${number}`;
    this.newCard.append(this.cardText);
  }

  appendCard(node) {
    node.append(this.newCard);
  }
}

export const createButton = (node) => {

  let button = document.createElement("button");
  button.textContent = "Say Hi";
  button.addEventListener("click", sayHi);
  node.insertAdjacentElement("beforeend", button);

};

const sayHi = () => {
  alert("Hi");
}

