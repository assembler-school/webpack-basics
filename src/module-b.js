import lt8 from '../assets/img/lessThan8.png';
import lt8s from "../assets/img/lessThan8.svg";
import gt12 from "../assets/img/greaterThan12.png";
import gt1m from "../assets/img/greaterThan1mb.jpg";

export function initB() {
  $('#img1').attr('src', lt8);
  $('#img2').attr('src', lt8s);
  $('#img3').attr('src', gt12);
  $('#img4').attr('src', gt1m);
  $("#toggleBtn").click(function () {
    $(".content").toggleClass("top");
  });
}
