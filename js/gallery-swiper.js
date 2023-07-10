
document.querySelectorAll('.gallery__card').forEach(function (photos) {
    const slide = document.querySelector('.gallery__swiper')
    const slideClose = document.querySelector('.gallery__close')

    photos.addEventListener('click', function (e) {
        const photoId = e.target
        const id = photoId.dataset.id

        const gallerySlide = new Swiper(".gallerySlide", {
            speed: 1500,
            pagination: {
                el: ".swiper-pagination",
                dynamicBullets: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            initialSlide: id,
        });
    })

    photos.addEventListener('click', openSlide)
    slideClose.addEventListener('click', closeSlide)

    function openSlide() {
        slide.classList.add('open')
    }

    function closeSlide(e) {
        slide.classList.remove('open')
    }
})
