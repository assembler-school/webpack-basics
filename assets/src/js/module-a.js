
const myBtn = document.getElementById("clickBtn2");


myBtn.addEventListener("click", () =>{
    let byeH3 = document.getElementById("byeBye");
    byeH3.style.color = "yellow";
})

let a = 10;
let b = 213;
console.log(`La solución es: ${a + b}`);


class Players{
    constructor (name, number){
    this.name = name;
    this.number = number;
    }
}

const player = new Players("Figo", 10);

console.log(player.name)
