import * as moduleB from "./module-b.js";

const btn = document.getElementById("btn");
btn.addEventListener("click", (_) => {
  alert("asdsad");
  btn.className = "top";
});

moduleB.initBtnClick();
