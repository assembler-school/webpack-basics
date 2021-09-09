import imageFile from "../images/bell.svg";

const paragraph = $("<p>");
paragraph.text("This paragraph has been added with jQuery");
paragraph.addClass("text-align-center text-color-indigo font-weight-600");

const img = $("<img>");
img.css("width", "1rem");
img.attr("src", imageFile);
img.attr("alt", "bell");

paragraph.prepend(img);
$("body").append(paragraph);
