// add class .fixed
var header = document.getElementById("header");

  window.addEventListener("scroll", function() {
  
    if (window.scrollY >= 60) {
  
      header.classList.add("fixed");
    } else {
   
      header.classList.remove("fixed");
    }
  });

//   show menu mobile
// Lấy thẻ button và div menu
var button = document.getElementById("show-menu_mobile");
var menu = document.querySelector("#menu-mobile");
var hideMenu = document.getElementById("hide-menu-mobile");

// Thêm sự kiện click cho button
hideMenu.addEventListener("click", function() {
    menu.style.display = "none";
 
});
button.addEventListener("click", function() {
    menu.style.display = "block";
 
});