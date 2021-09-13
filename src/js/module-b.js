import $ from "jquery";

const btnJquery = $("#btn");
btnJquery.on("mouseover", () => {
  btnJquery.css("background-color", "green");
});

export { btnJquery };
