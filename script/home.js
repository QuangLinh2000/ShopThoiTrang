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
  //   setInterval(() => {
  //     showSlide(++indexSlider);
  //   }, 6000);
};

//==========================hover image dom===========================//
const listImageHover = document.querySelectorAll(".img-item-hov");
listImageHover.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element
      .closest(".slide-collection")
      .querySelector(".collection-slide-image").src = element.src;
  });
});

//==========================slider production===========================//
const listNextBtn = document.querySelectorAll(".next-btn");
const listPrevBtn = document.querySelectorAll(".prev-btn");
const listSlideshowCollection = document.querySelectorAll(
  ".slideshow-collection"
);
listSlideshowCollection.forEach((element) => {
  element.style.transform = "translateX(0%)";
});

listNextBtn.forEach((element) => {
  element.addEventListener("click", () => {
    let parentE = element
      .closest(".collection-slide")
      .querySelector(".slideshow-collection");
    let count = parentE.querySelectorAll(".slide-collection").length;
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
      .closest(".collection-slide")
      .querySelector(".slideshow-collection");
    let count = parentE.querySelectorAll(".slide-collection").length;
    let percentBefore = parentE.style.transform.replace(/[^-?\d.]/g, "");
    percentBefore = parseInt(percentBefore, 10) + 50;
    console.log(percentBefore);
    if (percentBefore > 0) {
      percentBefore = -(count - 2) * 50;
    }
    parentE.style.transform = `translateX(${percentBefore}%)`;
  });
});
//==========================section-slider===========================//
const slickNext = document.getElementById("slick-next");
const slickPrev = document.getElementById("slick-prev");
const sectionContent = document.getElementById("section-slideshow");
const listSlider = document.querySelectorAll(".slides-item");

var indexSlider = 1;
slickNext.addEventListener("click", () => {
  showSlide(++indexSlider);
});
slickPrev.addEventListener("click", () => {
  showSlide(--indexSlider);
});
showSlide(1);
function showSlide(n) {
  if (indexSlider > listSlider.length - 2) {
    indexSlider = 1;
  }
  if (n < 1) {
    indexSlider = listSlider.length - 2;
  }
  listSlider.forEach((element) => {
    element.className = "slides-item";
  });
  let percent = -(indexSlider - 1) * 33.33;
  sectionContent.style.transform = `translateX(${percent}%)`;
  listSlider[indexSlider].className = "slides-item slide-active";
}
