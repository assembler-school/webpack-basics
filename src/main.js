import "jquery";
import "./module-a.js";
import "./module-b.js";
import "./main.scss";

import "./index.html";

import "./pngsmall.png";
import "./svgsmall.svg";
import "./pngbig.png";
import "./jpgbig.jpg";

// document.getElementById("pngsmall").src = pngsmall;
// document.getElementById("svgsmall").src = svgsmall;
// document.getElementById("pngbig").src = pngbig;
// document.getElementById("jpgbig").src = jpgbig;

var imgDiv = document.querySelector(".imgDiv");

// const myImg = new Image();
// myImg.src = pngsmall;

imgDiv.appendChild(myImg);
