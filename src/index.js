import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const initSwiper = () => {
    const swiper = new Swiper('.swiper', {
        modules: [Navigation],
        slidesPerView: 3,
        loop: false,
        rewind: true,
        spaceBetween: 16,
        navigation: {
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
        },
    });    
};

document.addEventListener('DOMContentLoaded', initSwiper);


