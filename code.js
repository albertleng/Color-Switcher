window.addEventListener('load', function(){
  var button = document.querySelector("#toggle");
  button.addEventListener("click", function(){
    var palette = "0";
    if (document.body.getAttribute("data-palette") == "0") {
      palette = "1";
    }
    document.body.setAttribute("data-palette", palette);
  });
});