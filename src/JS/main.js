const hamb = document.querySelector("#hamb"),
  openMoon = document.querySelector(".open__moon");
chat = document.querySelector(".chat");

hamb.addEventListener("click", function () {
  openMoon.classList.toggle("active");
  hamb.classList.toggle("active");
  chat.classList.toggle("scrolled");
});
