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

//==========================hover image dom===========================//
const listImageHover = document.querySelectorAll(".img-item-hov");
listImageHover.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element
      .closest(".slide-colection")
      .querySelector(".colection-slide-image").src = element.src;
  });
});

//==========================slider production===========================//
const listNextBtn = document.querySelectorAll(".next-btn");
const listPrevBtn = document.querySelectorAll(".prev-btn");
const listSlideshowCollection = document.querySelectorAll(
  ".slideshow-colection"
);
listSlideshowCollection.forEach((element) => {
  element.style.transform = "translateX(0%)";
});

listNextBtn.forEach((element) => {
  element.addEventListener("click", () => {
    let parentE = element
      .closest(".colection-slide")
      .querySelector(".slideshow-colection");
    let count = parentE.querySelectorAll(".slide-colection").length;
    let percentBefore = parentE.style.transform.replace(/[^-?\d.]/g, "");
    percentBefore = parseInt(percentBefore, 10) - 50;
    if (percentBefore < -(count - 2) * 50) {
      percentBefore = 0;
    }
    parentE.style.transform = `translateX(${percentBefore}%)`;
  });
});
listPrevBtn.forEach((element) => {
  element.addEventListener("click", () => {
    let parentE = element
      .closest(".colection-slide")
      .querySelector(".slideshow-colection");
    let count = parentE.querySelectorAll(".slide-colection").length;
    let percentBefore = parentE.style.transform.replace(/[^-?\d.]/g, "");
    percentBefore = parseInt(percentBefore, 10) + 50;
    if (percentBefore > 0) {
      percentBefore = -(count - 2) * 50;
      console.log(percentBefore);
    }
    parentE.style.transform = `translateX(${percentBefore}%)`;
  });
});
