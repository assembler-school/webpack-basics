import {
  addEvents,
  imagePaster,
  templateString,
  useLetConst,
  classExmple,
  arrow,
} from "./module-a";
import { useJQuery } from "./jquery/module-b";
import "../sass/main.scss";

(function initialize() {
  addEvents();
  imagePaster();
  useJQuery();
})();
