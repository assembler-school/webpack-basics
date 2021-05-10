export function initBtnClick() {
  $("#toggleBtn").click(function () {
    console.log($("body").first());
    $("body").first().toggle("top");
  });
}
