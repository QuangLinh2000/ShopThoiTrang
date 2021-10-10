//===============================header scroll ======================
window.onscroll = function () {
    scrollHideNav();
  };
  var header = document.getElementById("header-scroll");
  
  function scrollHideNav() {
    var doc = document.documentElement;
    var w = window;
    var prevScroll = w.pageYOffset || w.scrollY || doc.scrollTop;
    if (window.pageYOffset > 20) {
      header.classList.add("header-scroll-active");
    } else {
      header.classList.remove("header-scroll-active");
    }
  }