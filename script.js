const toggleBtn = document.getElementById("toggle-menu");
const nav = document.getElementById("navbar");
const closeBtn = document.getElementById("closeBtn");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("show");
});