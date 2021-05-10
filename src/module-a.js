export * from "./module-a.js"
/*---- Arrow function example + Use pf let and const example ----*/
//Arrow Function (with no arguments and no curly braces in this case)

let a = "Hello";
const b = "Assembler";

const btn = document.getElementById('btn');
btn.addEventListener('click', () => alert(a + " " + b));

/*-------------- ECMAScript 6 class structure -----------------*/

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

/*-------------------- Template Strings --------------------*/
function templateStringsAndClassInstanceExample(expression){
    let examplePoint = new Point(3,5);
    console.log("examplePoint.toString() -->",examplePoint.toString());
    console.log(`string text`);
    console.log(`string text line 1
         string text line 2`);
    console.log(`string text ${expression} string text`);
}

templateStringsAndClassInstanceExample("is a")