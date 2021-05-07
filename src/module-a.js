/*---- Arrow function example + Use pf let and const example ----*/
//Arrow Function (with no arguments and no curly braces in this case)

let a = "Hello";
const b = "Assembler";

const btn = document.getElementById('btn');
btn.addEventListener('click', showAlert = () => alert(a + " " + b));

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
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

tag`string text ${expression} string text`