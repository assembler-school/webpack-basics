export const sum = (a, b) => {
    return a + b;
};

console.log(sum(15, 18));

export class rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    get area() {
        return this.calcArea();
    }

    calcArea() {
        return this.height * this.width;
    }
}

export const paragraph = `This a paragraph using a Template String`;

let cube = new rectangle(10, 10);

console.log(cube.area);

console.log(paragraph);