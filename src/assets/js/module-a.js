/* A file called module-a.js that contains a javascript module that makes use of the new features of ECMAScript 6 such as:
Make use of the arrow function
Make use of the new ECMAScript 6 class structure
Make use of the Template Strings
Make use of Let and Const
 */

export const changeColor = () => {
  let color = 'blue';
  color = 'red';
  return color;
};

export class Car {
  constructor(brand) {
    this.name = brand;
  }

  startEngine() {
    return `My ${this.name} do rumrum`;
  }
}