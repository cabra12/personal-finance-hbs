import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const initSwiper = () => {
    const swiper = new Swiper('.swiper', {
        modules: [Navigation],
        loop: false,
        rewind: true,
        spaceBetween: 16,
        navigation: {
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
        },
        breakpoints: {
            480: {
                slidesPerView: 1
            },
            640: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        }
    });    
};

document.addEventListener('DOMContentLoaded', initSwiper);


