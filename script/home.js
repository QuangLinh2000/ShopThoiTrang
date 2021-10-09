//  slide show
var slideIndex = 1;
function plusDivs(n) {
  showDivs((slideIndex += n));
}

function currentDiv(n) {
  showDivs((slideIndex = n));
}
showDivs(slideIndex);

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var slideShowa = document.getElementById("ml-slide");
  if (n > x.length || slideIndex > x.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  var marginL = -(slideIndex - 1) * 100;
  slideShowa.style.marginLeft = `${marginL}` + "vw";

  if (dots[slideIndex - 1]) {
    dots[slideIndex - 1].className += " active";
  }
}
window.onload = function (e) {
  setInterval(() => {
    showDivs(slideIndex++);
  }, 10000);
};

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
