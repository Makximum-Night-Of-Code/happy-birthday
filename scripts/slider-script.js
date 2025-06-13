const swiper = new Swiper('.content', {
    loop: false,
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30,
    watchOverflow: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        620: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
    }
});
