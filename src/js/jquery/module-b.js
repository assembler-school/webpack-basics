//use of the JQuery library (JQuery must be imported via webpack not manually)
function useJQuery() {
  $(document).ready(function () {
    alert("jQuery sucks!");
  });
}

export { useJQuery };
