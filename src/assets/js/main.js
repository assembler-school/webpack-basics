import "../scss/main.scss";
import { changeColor, Car } from './module-a';
import { jq } from './module-b';

// module-b
jq();

// module-a
const color = changeColor();

const bmw = new Car("BMW");
const message = bmw.startEngine();

const parr = document.createElement('p');
parr.textContent = message + ` and it is ${color}!!`;

document.body.appendChild(parr);