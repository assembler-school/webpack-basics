import Code from "../img/code.svg";
import Jst from "../img/joystick.jpg";
import Pong from "../img/ping-pong.png";
import Ass from "../img/assembler.png";

const btns = $("<div>").attr("id", "btns").addClass("wrapper__btns");

btns.append(
  $("<button>")
    .attr("id", "btn1")
    .text("Click me!")
    .on("click", () => {
      $("#hint").text("Code!");
      $("#btn1").css("display", "none");
      $("#root").append($("<div id='trying'></div>").addClass("wrapper__pic"));
      const myCode = new Image();
      const element = document.getElementById("trying");
      myCode.src = Code;
      element.appendChild(myCode);
      btns.append(
        $("<button>")
          .attr("id", "btn2")
          .text("Click me again!")
          .on("click", () => {
            $("#hint").text("Videogames!");
            $("#btn2").css("display", "none");
            element.innerHTML = "";
            $("#flex1").append(myCode);
            const myJst = new Image();
            myJst.src = Jst;
            element.appendChild(myJst);
            btns.append(
              $("<button>")
                .attr("id", "btn3")
                .text("Click me harder!")
                .on("click", () => {
                  $("#hint").text("Ping Pong!");
                  $("#btn3").css("display", "none");
                  element.innerHTML = "";
                  $("#flex2").append(myJst);
                  const myPong = new Image();
                  myPong.src = Pong;
                  element.appendChild(myPong);
                  btns.append(
                    $("<button>")
                      .attr("id", "btn4")
                      .text("One last time!")
                      .on("click", () => {
                        $("#hint").text("And ready for Assembler!");
                        $("#btn4").css("display", "none");
                        element.innerHTML = "";
                        $("#flex3").append(myPong);
                        const myAss = new Image();
                        myAss.src = Ass;
                        element.appendChild(myAss);
                      })
                  );
                })
            );
          })
      );
    })
);

$("#root").append(btns);
