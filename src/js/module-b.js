$("#mode").on("click", function() {
    $("#mod-a-div").toggleClass("show");
    showContentModA();
});

$("#modb").on("click", function() {
    $("#mod-b-div").toggleClass("show");
    showContentModB();
});

$("#modc").on("click", function() {
    $("#mod-c-div").toggleClass("show");
    showContentModC();
});

function showContentModC() {
    $("#modc-p1").html(`The variables used for the colors are:
    $bg: #cdcdcd;
    $btn: rgb(205, 101, 101);
    $font: #262626;
    $black: #000000;
    $yellow: rgb(255, 182, 18);
    $blue: rgb(81, 116, 206);
    $aqua: #93d1ac;
    $purple: #8965dd;
    $orange: #fd5b2a;
    $pink: #fa9cbe;
    `);
    $("#modc-p2").html(`The variables used for the text style are:
    $family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif;
    $bold: 600;
    $light: 400;
    `);
}

function showContentModB() {
    $("#modb-p1").html(`This box has been shown using the next code:
      $("#modb").on("click", function () {
        $("#mod-b-div").toggleClass("show");
        showContentModB();
      });`);
}

function showContentModA() {
    $("#mode-p1").html(`function sum(a, b) {
          return a + b;
        }`);

    $("#mode-p2").html(`class rectangle {
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
        }`);

    $("#mode-p3").html(
        "const paragraph = `This a paragraph using a Template String`"
    );
}