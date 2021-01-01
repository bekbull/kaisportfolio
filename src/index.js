import './style.css'

import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';
import image5 from './images/5.jpg';
import image6 from './images/6.jpg';
import image7 from './images/7.jpg';
import image8 from './images/8.jpg';
import image9 from './images/9.jpg';
import image10 from './images/10.jpg';
import image11 from './images/11.jpg';
import image12 from './images/12.jpg';
import image13 from './images/13.jpg';
import image14 from './images/14.jpg';

const left = document.querySelector('#left');
const right = document.querySelector('#right');
const certificate = document.querySelector('.awards__hungary-certificate');
const images = {
    'image1': image1,
    'image2': image2,
    'image3': image3,
    'image4': image4,
    'image5': image5,
    'image6': image6,
    'image7': image7,
    'image8': image8,
    'image9': image9,
    'image10': image10,
    'image11': image11,
    'image12': image12,
    'image13': image13,
    'image14': image14
}


let imgId = 1;

left.addEventListener('click', (e) => {
    if (imgId === 1) {
        imgId = 14;
        certificate.src =  images[`image${imgId}`];
    }
    else {
        imgId -= 1;
        console.log(`image${imgId}`)
        certificate.src = images[`image${imgId}`]
    }
})

right.addEventListener('click', (e) => {
    if (imgId === 14) {
        imgId = 1;
        certificate.src =  images[`image${imgId}`];
        console.log(imgId);
    }
    else {
        imgId += 1;
        console.log(imgId);
        console.log(`image${imgId}`)
        certificate.src = images[`image${imgId}`]
    }
})