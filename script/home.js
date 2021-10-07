//  slide show
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var slideShowa = document.getElementById("ml-slide");

  if (n > x.length) {
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
