import "../css/scss/main.scss";
// import png8kb from '../img/png-less-8kb.png'
// import svg8kb from '../img/svg-less-8kb.svg'
// import png12kb from '../img/png-more-12kb.png'
// import jpg1mb from '../img/jpg-more-1mb.jpg'
import * as exampleA from "./module-a";
import * as exampleB from "./module-b";

exampleA.arrow();
document.getElementById("button-alert").addEventListener("click", exampleA.clases);
exampleA.templateString();

exampleB.textColors();