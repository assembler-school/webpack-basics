import "../scss/main.scss";
import { changeColor, Car } from './module-a';
import { jq } from './module-b';
import homeIcon from '../images/home.png';
import googleIcon from '../images/google.png';
import activityIcon from '../images/activity.svg';

// module-b
jq();

// module-a
const color = changeColor();

const bmw = new Car("BMW");
const message = bmw.startEngine();

const parr = document.createElement('p');
parr.textContent = message + ` and it is ${color}!!`;

document.body.appendChild(parr);

var homeImg = document.getElementById('home');
homeImg.src = homeIcon;

var googleImg = document.getElementById('google');
googleImg.src = googleIcon;

var activityImg = document.getElementById('activity');
activityImg.src = activityIcon;