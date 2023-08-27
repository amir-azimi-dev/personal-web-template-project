const navBtn = document.querySelector(".nav__hamburger-btn");
const menu = document.querySelector(".menu");
const cover = document.querySelector(".cover");
const nav = document.querySelector(".nav");

const toggle = () => {
    navBtn.classList.toggle("nav__hamburger-btn--open");
    menu.classList.toggle("menu--visible");
    cover.classList.toggle("cover--active");
};

navBtn.addEventListener("click", toggle);
cover.addEventListener("click", toggle);

window.onscroll = () => {
    if (window.scrollY) {
        return nav.classList.add("nav--minimized");
    };

    nav.classList.remove("nav--minimized");
};

window.scrollTo({
    left: 0,
    top: window.scrollY,
    behavior: "smooth"
});