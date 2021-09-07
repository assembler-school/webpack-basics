let h1 = document.getElementById("calufa");

const arrowF = () => {
  h1.classList.add("perry");
};

let changeColor = h1.addEventListener("click", () => {
  h1.classList.toggle("clase");
});

export { changeColor, h1, arrowF };
