const hamb = document.querySelector("#hamb"),
  openMoon = document.querySelector("#moon2");

hamb.addEventListener("click", function () {
  openMoon.classList.toggle("_active");
  hamb.classList.toggle("active");
});