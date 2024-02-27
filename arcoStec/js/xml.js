import { setPost } from "./postLoader.js";

let language = 'ru';
let langCode;

if (language == 'ru') langCode = '7';
if (language == 'en') langCode = '2';
if (language == 'es') langCode = '1';


function loadXMLDoc(url, callback) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            callback(this.responseXML);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
};

function flipInt(num) {
    const reversedNum = num.toString().split('').reverse().join('');
    return reversedNum;
};


function convertPrice(price) {
    let p = flipInt(price);
    let a = '';
    for (let i = 0; i < p.length; i++) {
        const el = p[i];
        if (i % 3 == 0) {
            a += ' '
        };

        a += el;
    };
    a = flipInt(a)
    a += ' &#8364';
    return a;
};

loadXMLDoc("./xml/xml.xml", function (xml) {
    let cards = xml.querySelectorAll('propiedad');
    for (let i = 0; i < 8; i++) {
        const el = cards[i];
        let htmlPost = document.createElement('div');
        htmlPost.className = 'projects__post';
        htmlPost.id = el.querySelector('id').innerHTML;
        function ifPool() {
            if (el.querySelector('piscina_com').innerHTML > 0 || el.querySelector('piscina_prop').innerHTML > 0) {
                return "<img src='../img/icons1/teenyicons_pool-outline.svg'></img>";
            } else {
                return '';
            }
        };
        htmlPost.onclick = function () { setPost(this) };
        htmlPost.innerHTML = `
            <img class="post__img" src="${el.querySelector('foto1').innerHTML}">
            <div class="post__city">${el.querySelector('zona').innerHTML}</div>
            <div class="post__info">${el.querySelector('titulo' + langCode).textContent}</div>
            <p class="post__price">${convertPrice(el.querySelector('precioinmo').innerHTML)};</p>
            <div class="post__rooms">
                <div class='rooms_square'>
                    <img src='../img/icons1/carbon_area-custom.svg'>
                    <p>${el.querySelector('m_cons').innerHTML + ' м²'}</p>
                </div>
                <div class='rooms_habdobles'>
                    <img src='../img/icons1/la_bed.svg'>
                    <p>${el.querySelector('habdobles').innerHTML}</p>
                </div>
                <div class='rooms_banyos'>
                    <img src='../img/icons1/solar_bath-linear.svg'>
                    <p>${el.querySelector('banyos').innerHTML}</p>
                </div>
                <div class='rooms_ifPool'>
                    ${ifPool()}
                </div>
            </div>
        `;
        document.querySelector('.projects__grid').appendChild(htmlPost);
    };
});





