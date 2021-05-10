class ClassA {
    constructor(){
        this.date = new Date();
    }

    initA() {
        const btn = document.getElementById("btn");

        btn.addEventListener("click", _ => {

            alert(`La fecha actual es: ${this.date.toLocaleString()}`);
            btn.className = "top";
        });
    }
}

module.exports = ClassA;