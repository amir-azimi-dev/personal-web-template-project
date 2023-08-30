const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    breakpoints: {
        400: {
            slidesPerView: 1.3
        },
        576: {
            slidesPerView: 1.5
        },

        992: {
            slidesPerView: 2.4,
            spaceBetween: 50
        },
        1200: {
            slidesPerView: 3
        }
    }
});