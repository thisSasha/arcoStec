window.onload = function () {
    const post = JSON.parse(window.localStorage.getItem('post'));
    const prop = post.propiedad.children;
    for (let i = 1; i < prop['numfotos'].innerHtml; i++) {
        const el = prop['foto' + i].innerHtml;
        let slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.style.backgroundImage = `url(${el})`;
        document.querySelector('.swiper-wrapper').appendChild(slide);
    };
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
};