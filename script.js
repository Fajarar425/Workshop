
const toggle = document.getElementById("toggle-menu");
const navbar = document.getElementById("navbar");

toggle.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(link => {
  link.addEventListener("click", function () {
    navLinks.forEach(el => el.classList.remove("active"));
    this.classList.add("active");
  });
});

const closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener("click", () => {
  navbar.classList.remove("show");
});

let slideIndex = 0;
let slides = document.querySelectorAll(".slide");
let timer;

function showSlides(n) {
  slides.forEach(slide => slide.style.display = "none");

  slideIndex = (n + slides.length) % slides.length;
  slides[slideIndex].style.display = "block";
}

function nextSlide() {
  showSlides(slideIndex + 1);
}

function prevSlide() {
  showSlides(slideIndex - 1);
}

function autoSlide() {
  nextSlide();
  timer = setTimeout(autoSlide, 4000);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);
  autoSlide();

  document.querySelector(".next").addEventListener("click", () => {
    clearTimeout(timer);
    nextSlide();
    timer = setTimeout(autoSlide, 4000);
  });

  document.querySelector(".prev").addEventListener("click", () => {
    clearTimeout(timer);
    prevSlide();
    timer = setTimeout(autoSlide, 4000);
  });
});