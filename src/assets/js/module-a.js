import svg from '../images/bookmark.svg'
import jpg from '../images/butterfly.jpg'
import smallPng from '../images/logo.png'

const header = document.getElementById('header')
const img = document.createElement('img')
img.setAttribute('src', smallPng)
img.setAttribute('class', 'logo')
header.appendChild(img)
class Car {
  constructor(brand, color) {
    this.name = brand
    this.color = color
  }
}

const bmw = new Car('BMW', 'red')
const ford = new Car('Ford', 'blue')

const cars = document.getElementById('cars')
cars.innerHTML = `<p class="text">My new car is ${bmw.name} and the color is ${bmw.color}</p>`
cars.innerHTML += `<p class="text">My new car is ${ford.name} and the color is ${ford.color}</p>`

const arrayImages = [svg, jpg]

for (let i = 0; i < arrayImages.length; i++) {
  const imgs = document.getElementById('images')
  const img = document.createElement('img')
  img.setAttribute('src', arrayImages[i])
  img.setAttribute('class', 'logo')
  imgs.appendChild(img)
}
