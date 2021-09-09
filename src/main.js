// Styles
import "./assets/css/main.scss"
// Functionalities
import "./assets/js/module-a.js"
import "./assets/js/module-b.js"

// Load images
import url1 from './assets/img/example-1.jpg'
import url2 from './assets/img/example-2.png'
import url3 from './assets/img/example-3.png'
import url4 from './assets/img/example-4.svg'


$('#gallery').append(`
  <img src="${url1}" width="150">
  <img src="${url2}" width="150">
  <img src="${url3}" width="150">
  <img src="${url4}" width="150">
`)