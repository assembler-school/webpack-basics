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

$("#source").on("click", function () {
  $("header").toggleClass("purple");
  $("#source-div").toggleClass("visible");
  $("#html-text").text(
    `<!doctype html><html lang="en"><head><meta charset="UTF-8"/><meta http-equiv="X-UA-Compatible" content="IE=edge"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>Webpack API</title><link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/><script defer="defer" src="index.js"></script></head><body><header><div class="nav-ic">Webpack Basics</div></header><main><section><div class="js"></div><div class="jq"><button id="modb" class="btn">jQuery</button></div></section><section><div class="p1"><img id="img1" src="" alt=""/></div><div class="p2"><img id="img2" src="" alt=""/></div><div class="p3"><img id="img3" src="" alt=""/></div><div class="p4"><img id="img4" src="" alt=""/></div></section></main></body></html>`
  );
  $("#js-text").text(
    `The JS minified code can't be shown here. Go to the sources on the console to take a look. Just a warning: If you Pretty-print it you'll see more than 10000 lines of code. Enjoy it!`
  );
});
