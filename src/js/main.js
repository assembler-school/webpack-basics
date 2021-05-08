import "./module-a.js";
import "./module-b.js";
import "../css/main.scss";
import small from "../img/small.png";
import svg from "../img/8kbsvg.svg";
import med from "../img/170kb.png";
import big from "../img/1mb.jpg";

$("#img1").attr("src", small);
$("#img2").attr("src", svg);
$("#img3").attr("src", med);
$("#img4").attr("src", big);
