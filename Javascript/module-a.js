class Button{
    constructor (name){
        this.name = name
    }
}
const button1 = new Button(".png small")
const button2 = new Button(".png large")
const button3 = new Button(".jpg")

document.addEventListener("DOMContentLoaded", ()=>{
        document.getElementById("btn-container").innerHTML+=`<button class="btn" id="btn1">${button1.name}</button>`
        document.getElementById("btn-container").innerHTML+=`<button class="btn" id="btn2">${button2.name}</button>`
        document.getElementById("btn-container").innerHTML+=`<button class="btn" id="btn3">${button3.name}</button>`
})




