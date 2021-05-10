import "./module-a.js";
import "./module-b.js";
import "../css/main.scss";
import small from "../img/small.png";
import svg from "../img/8kbsvg.svg";
import med from "../img/170kb.png";
import big from "../img/1mb.jpg";
import favicon from "../img/favicon.png";

$("#favicon").attr("href", favicon);
$("#img1").attr("src", small);
$("#img2").attr("src", svg);
$("#img3").attr("src", med);
$("#img4").attr("src", big);

$("#source").on("click", function () {
  $("header").toggleClass("purple");
  $("#source-div").toggleClass("visible");
  $("#html-text").text(
    `<!doctype html><html lang="en"><head><meta charset="UTF-8"/><meta http-equiv="X-UA-Compatible" content="IE=edge"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>Webpack Basics</title><link id="favicon" rel="shortcut icon" href="./img/png-transparent-react-logo-webpack-babel-javascript-npm-github-nodejs-front-and-back-ends.png" type="image/x-icon"/><script defer="defer" src="index.js"></script></head><body><header><div class="nav-ic">Webpack Basics</div><button id="source" class="neg">Source code</button></header><div id="source-div" class="div full-size"><h1 class="white">This is all the source code generated by Webpack</h1><h1 class="white">HTML:</h1><p id="html-text" class="text-s grey"></p><h1 class="white">JS:</h1><p id="js-text" class="text-s grey"></p></div><main><section><div class="js div"><h1>Javascript ES6</h1><button id="moda" class="btn">Click here to watch the code</button><div id="mod-a-div" class="text-mod"><p id="moda-p1" class="text-s white"></p><p id="moda-p2" class="text-s white"></p><p id="moda-p3" class="text-s white"></p><p class="text-s white">You can also watch the result of all of this on the console</p></div></div><div class="jq div"><h1>jQuery</h1><button id="modb" class="btn">Click here to watch the code</button><div id="mod-b-div" class="text-mod"><p id="modb-p1" class="text-s white"></p></div></div><div class="sass div"><h1>sass</h1><button id="modc" class="btn">Click here to watch the code</button><div id="mod-c-div" class="text-mod"><p id="modc-p1" class="text-s white"></p><p id="modc-p2" class="text-s white"></p></div></div></section><section><div class="p1 div"><p class="text-s">png less than 8Kb</p><div class="small-div"><img id="img1" class="img" src="" alt=""/></div></div><div class="p2 div"><p class="text-s">svg less than 8Kb</p><div class="small-div"><img id="img2" class="img" src="" alt=""/></div></div><div class="p3 div"><p class="text-s">png greater than 12Kb</p><div class="small-div"><img id="img3" class="img" src="" alt=""/></div></div><div class="p4 div"><p class="text-s">jpg greater than 1Mb</p><div class="small-div"><img id="img4" class="img" src="" alt=""/></div></div></section></main></body></html>`
  );
  $("#js-text").text(
    `The JS minified code can't be shown here. Go to the sources on the console to take a look. Just a warning: If you Pretty-print it you'll see more than 10000 lines of code. Enjoy it!`
  );
});
