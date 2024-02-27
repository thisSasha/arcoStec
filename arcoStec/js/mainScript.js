const menuToggle = document.querySelector('.nav__hamburger');
const cross = document.querySelector('.nav__cross')
const menu = document.querySelector('.nav__titles');

menuToggle.onclick = toggle;
cross.onclick = toggle;



function toggle() {
    menu.classList.toggle('active');
    cross.classList.toggle('active')
};