const hamb = document.querySelector('#moon1'),
      openMoon = document.querySelector('#moon2');

hamb.addEventListener('click', function () {
    openMoon.classList.toggle('_active');
    hamb.classList.toggle('_active');
});

