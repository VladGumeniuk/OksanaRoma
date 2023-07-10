
const mySwiper = new Swiper(".myGallery", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 15,
    // allowTouchMove: false,
    speed: 5000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});