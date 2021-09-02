const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.navList');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('show');
});