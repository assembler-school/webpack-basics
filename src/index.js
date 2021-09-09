// import everything from main.js in js folder
/* A main.js file that will be your main
Javascript file responsible for calling the modules
that your application needs (at least the module-a and module-b)
 */

//import functions from modula a and module b
import { CardContent, createButton } from "./js/module-a.js";
import { setTitle } from "./js/module-b.js";
import './styles/main.scss';
import img1 from "./assets/img/carson-arias.jpg"
import img2 from "./assets/img/diego-ph.png"
import img3 from "./assets/img/mike-dorner.png"


const appDiv = document.getElementById("app");

setTitle("Webpack Love");
createButton(appDiv);

let card = new CardContent();
card.createCard("First Card", img3, "banana", 1);
card.appendCard(appDiv);

let cardSec = new CardContent();
cardSec.createCard("Second Card", img1, "yellow plastic things", 2);
cardSec.appendCard(appDiv);

let cardThrd = new CardContent();
cardThrd.createCard("Third Card", img2, "hand holding a lightbulb", 3);
cardThrd.appendCard(appDiv);

