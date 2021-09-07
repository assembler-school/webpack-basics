let h1 = document.getElementById("calufa");

const arrowF = () => {
  let textColor = null;
  h1.classList.toggle("clase");

  console.log(h1.style.fontSize);

  if (h1.children.length < 1) {
    let newElement = document.createElement("p");
    h1.append(newElement);
  }

  let p = document.querySelector("#calufa > p");
  if (h1.classList.contains("clase")) {
    textColor = "Red";
  } else {
    textColor = "Black";
  }
  p.textContent = `The text color is: ${textColor}`;
};

export { h1, arrowF };
