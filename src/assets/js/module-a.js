class Dog {

  constructor(name, size, color) {
    this.name = name
    this.size = size
    this.color = color
  }

  getSize = () => this.size

  getName = () => this.name

  getColor = () => this.color

}

const domesticDog = new Dog('Nico', 'big', 'black & white')
let dogName = domesticDog.getName()
let dogColor = domesticDog.getColor()
let dogSize = domesticDog.getSize()

document.getElementById('root').innerHTML = `
  <p>Hello! this is <strong>my dog ${dogName}</strong>.</p>
  <p>He is a ${dogSize} size dog and has ${dogColor} colors.</p> 
`