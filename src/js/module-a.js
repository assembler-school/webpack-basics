let string = `<p>I want banana</p>`;

// Arrow function, template string
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  console.log("Hello World!");
  document.querySelector("body").insertAdjacentHTML("beforeend", string);
});

// Class Constructor
class Dog {
  constructor(breed, size) {
    this.breed = breed;
    this.size = size;
  }
}

let golden = new Dog("Golden", "medium");
console.log(
  "My dog is a " + golden.breed + " and has " + golden.size + " size"
);

// Let and Const
const dogs = ["golden", "corgi", "mastiff", "shiba"];
let sum = (a, b) => a + b;
console.log(dogs, sum(3, 4));

export { btn, golden, dogs, sum };
