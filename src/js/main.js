import "../css/scss/main.scss";
import html from "../index.html";
import png1 from "../img/png-less-8kb.png";
import svg from "../img/svg-less-8kb.svg";
import png2 from "../img/png-more-12kb.png";
import jpg from "../img/jpg-more-1mb.jpg";
import * as exampleA from "./module-a";
import * as exampleB from "./module-b";

exampleA.arrow();
document
  .getElementById("button-alert")
  .addEventListener("click", exampleA.clases);
exampleA.templateString();

exampleB.textColors();
