import { arrow, arrowFunction } from "./module-a";
import { test } from "./module-b";

import "../scss/main.scss";

arrow.addEventListener("click", arrowFunction);

console.log(test);
