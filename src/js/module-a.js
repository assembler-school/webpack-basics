document
  .getElementById("btn")
  .addEventListener("click", () => alert("Helo world!"));

class Animal {
  constructor(name, age, specie) {
    this.name = name;
    this.age = age;
    this.specie = specie;
  }
}

const giraffe = new Animal("Rob", 21, "giraffe");
const lynx = new Animal("Melody", 49, "lynx");
const dog = new Animal("Snowball", 7, "dog");

let gText = `Hello, my name is ${giraffe.name}`;

document.getElementById("giraffeName").innerHTML = gText;
