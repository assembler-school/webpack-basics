const wrapper = document.getElementById("root");
const footer = document.getElementById("footer");

class Author {
  constructor(name) {
    this.name = name;
  }
}

const and = new Author("Andrés");
const gonz = new Author("Gonzalo");
const copy = document.createElement("p");
copy.className = "footer__copy";
copy.textContent = `This page was made by ${and.name} and ${gonz.name}`;
footer.appendChild(copy);

const msg = document.createElement("p");
msg.className = "wrapper__msg";
msg.id = "hint";
msg.textContent = "What do we need to learn developing?";

const list = document.createElement("div");
list.className = "wrapper__list";
list.innerHTML = `
<div id="flex1"></div>
<div id="flex2"></div>
<div id="flex3"></div>
`;

wrapper.append(msg, list);
