const menuToggle = document.querySelector('.nav__hamburger');
const cross = document.querySelector('.nav__cross')
const menu = document.querySelector('.nav__titles');

menuToggle.onclick = toggle;
cross.onclick = toggle;



function toggle() {
    menu.classList.toggle('active');
    cross.classList.toggle('active')
};



const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
    if ('active' === selectSingle.getAttribute('data-state')) {
        selectSingle.setAttribute('data-state', '');
    } else {
        selectSingle.setAttribute('data-state', 'active');
    }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', (evt) => {
        selectSingle_title.textContent = evt.target.textContent;
        selectSingle.setAttribute('data-state', '');
    });
}

// Reset title
const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
    selectSingle_title.textContent = selectSingle_title.getAttribute('data-default');
});