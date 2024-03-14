// add class .fixed
var header = document.getElementById("header");

  window.addEventListener("scroll", function() {
  
    if (window.scrollY >= 60) {
  
      header.classList.add("fixed");
    } else {
   
      header.classList.remove("fixed");
    }
  });