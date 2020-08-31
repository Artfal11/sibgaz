const html = document.querySelector("html");

// Клик по бургер-меню
let headerBurger = document.querySelector('.header-burger');

headerBurger.addEventListener("click", () => {
    headerBurger.classList.toggle("active");
});

// Вызов Попапа
let popup = document.querySelector('.popup'),
    popupBtn = document.querySelectorAll('.popup-btn'),
    popupClose = document.querySelector('.close-popup');

popupBtn.forEach(item => {
    item.addEventListener("click", () => {
        popup.classList.add("open");
        html.classList.add("no-scroll");
    });
})

// Закрытие Попапа
popupClose.addEventListener("click", () => {
    popup.classList.remove("open");
    html.classList.remove("no-scroll");
});

// Но - скроллить body, если ширина экрана меньше 568 пикселей
let windowWidth = document.body.offsetWidth;
let mobileWidth = 568;

let mobileBurger = () => {
    if (windowWidth < mobileWidth) {
        headerBurger.addEventListener("click", () => {
            html.classList.toggle("no-scroll");
        });
    } else {
        headerBurger.addEventListener("click", () => {
            html.classList.remove("no-scroll");
        });
    }
};

mobileBurger();

let sliderWidth = 992;

// Слайдер. Документация: https://swiperjs.com/api/
if (windowWidth < sliderWidth) {
    let mySwiper = new Swiper('.swiper-container', {
        navigation: {
          nextEl: '.swiper-button__next',
          prevEl: '.swiper-button__prev',
        },
    })
}