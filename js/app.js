const $ = document;
const html = document.documentElement;

// elements
const navMenuLinks = $.querySelectorAll(".menu__link");
const navBtn = $.querySelector(".nav__hamburger-btn");
const menu = $.querySelector(".menu");
const cover = $.querySelector(".cover");
const nav = $.querySelector(".nav");
const sections = $.querySelectorAll("main > section");
const resumeContentContainer = $.querySelector(".resume__contents-container");
const resumeTitles = $.querySelectorAll(".resume__item");
const portfolioContentContainer = $.querySelector(".portfolio .swiper-wrapper");
const portfolioTitles = $.querySelectorAll(".portfolio__item");
// dark / light mode elements
const themeBtn = $.querySelector(".theme-btn");
const pathOfThemeBtn = $.querySelector(".theme-btn path")
const heroWave = $.querySelector(".hero__shape")

// variables
const theme = localStorage.getItem("wa-theme");
let isDarkMode = (theme === "dark-mode");
const lightModeWaveSRC = "assets/images/shapes/header-shape-light.svg";
const darkModeWaveSRC = "assets/images/shapes/header-shape-dark.svg";
const lightModeD = "M7 12c0 2.8 2.2 5 5 5s5-2.2 5-5-2.2-5-5-5-5 2.2-5 5zm5-3c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm1-4V3c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1zm6.1-.1c-.4-.4-1-.4-1.4 0l-1.4 1.4c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4c.4-.3.4-1 0-1.4zM21 11h-2c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1zm-3.3 5.2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-1.4-1.4zM11 19v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6-.4-1-1-1s-1 .4-1 1zm-6.1.1c.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-1.4 1.4c-.4.3-.4 1 0 1.4zM2 12c0 .6.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1zm4.3-7.1c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4c.2.3.5.4.8.4s.5-.1.7-.3c.4-.4.4-1 0-1.4L6.3 4.9z";
const darkModeD = "M12.3 4.9c.4-.2.6-.7.5-1.1s-.6-.8-1.1-.8C6.8 3.1 3 7.1 3 12c0 5 4 9 9 9 3.8 0 7.1-2.4 8.4-5.9.2-.4 0-.9-.4-1.2-.4-.3-.9-.2-1.2.1-1 .9-2.3 1.4-3.7 1.4-3.1 0-5.7-2.5-5.7-5.7 0-1.9 1.1-3.8 2.9-4.8zm2.8 12.5c.5 0 1 0 1.4-.1-1.2 1.1-2.8 1.7-4.5 1.7-3.9 0-7-3.1-7-7 0-2.5 1.4-4.8 3.5-6-.7 1.1-1 2.4-1 3.8-.1 4.2 3.4 7.6 7.6 7.6z";
let resumeTables = [
    [
        {
            title: "Envato University",
            badge: "2010-2014",
            subtitle: "B.sc in Computer Engineer",
            description: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random ipsum generator.",
        },
        {
            title: "Envato University",
            badge: "2010-2014",
            subtitle: "B.sc in Computer Engineer",
            description: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random ipsum generator.",
        },
        {
            title: "Envato University",
            badge: "2010-2014",
            subtitle: "B.sc in Computer Engineer",
            description: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random ipsum generator.",
        },
        {
            title: "Envato University",
            badge: "2010-2014",
            subtitle: "B.sc in Computer Engineer",
            description: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random ipsum generator.",
        },
        {
            title: "Envato University",
            badge: "2010-2014",
            subtitle: "B.sc in Computer Engineer",
            description: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random ipsum generator.",
        },
        {
            title: "Envato University",
            badge: "2010-2014",
            subtitle: "B.sc in Computer Engineer",
            description: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random ipsum generator.",
        },
        {
            title: "Envato University",
            badge: "2010-2014",
            subtitle: "B.sc in Computer Engineer",
            description: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random ipsum generator.",
        },

    ],
    [
        {
            title: "Freelancing",
            badge: "2014-2016",
            subtitle: "Programming as a Front-End Developer",
            description: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random ipsum generator.",
        },
        {
            title: "Samsung Company",
            badge: "2016-2018",
            subtitle: "Software Engineer",
            description: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random ipsum generator.",
        },
    ],
    [
        {
            title: "HTML",
            badge: "senior",
            subtitle: "lorem ipsum, Reference site about Lorem Ipsum",
            description: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random ipsum generator.",
        }, {
        title: "CSS",
        badge: "senior",
        subtitle: "lorem ipsum, Reference site about Lorem Ipsum",
        description: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random ipsum generator.",
    }, {
        title: "Javascript",
        badge: "senior",
        subtitle: "lorem ipsum, Reference site about Lorem Ipsum",
        description: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random ipsum generator.",
    },
    ],
    [
        {
            title: "Envato University",
            badge: "2010-2014",
            subtitle: "B.sc in Computer Engineer",
            description: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random ipsum generator.",
        },
        {
            title: "Envato University",
            badge: "2010-2014",
            subtitle: "B.sc in Computer Engineer",
            description: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random ipsum generator.",
        },
        {
            title: "Envato University",
            badge: "2010-2014",
            subtitle: "B.sc in Computer Engineer",
            description: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random ipsum generator.",
        },
    ],
    [
        {
            title: "Envato University",
            badge: "2010-2014",
            subtitle: "B.sc in Computer Engineer",
            description: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random ipsum generator.",
        },
        {
            title: "Envato University",
            badge: "2010-2014",
            subtitle: "B.sc in Computer Engineer",
            description: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random ipsum generator.",
        },
        {
            title: "Envato University",
            badge: "2010-2014",
            subtitle: "B.sc in Computer Engineer",
            description: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random ipsum generator.",
        },
    ],
];
let portfolioSRCTables = [
    [
        "assets/images/portfolio-1.jpg",
        "assets/images/portfolio-2.jpg",
        "assets/images/portfolio-3.jpg",
        "assets/images/portfolio-2.jpg",
        "assets/images/portfolio-3.jpg",
        "assets/images/portfolio-3.jpg",
        "assets/images/portfolio-2.jpg",
        "assets/images/portfolio-3.jpg"
    ], [
        "assets/images/portfolio-2.jpg",
        "assets/images/portfolio-1.jpg",
    ], [
        "assets/images/portfolio-3.jpg",
        "assets/images/portfolio-1.jpg",
        "assets/images/portfolio-2.jpg",
    ], [
        "assets/images/portfolio-2.jpg",
        "assets/images/portfolio-1.jpg",
        "assets/images/portfolio-2.jpg",
        "assets/images/portfolio-3.jpg",
    ], [
        "assets/images/portfolio-2.jpg",
    ], [
        "assets/images/portfolio-2.jpg",
        "assets/images/portfolio-1.jpg",
        "assets/images/portfolio-3.jpg",
    ], [
        "assets/images/portfolio-3.jpg",

    ],
];


// swiper
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2000
    },

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
        576: {
            slidesPerView: 1.3
        },

        768: {
            slidesPerView: 1.5
        },

        992: {
            slidesPerView: 2.4,
        },
        1200: {
            slidesPerView: 3
        }
    }
});


// functions
const navbarHeightDeclare = () => {
    if (window.scrollY > 300) {
        return nav.classList.add("nav--minimized");
    }
    nav.classList.remove("nav--minimized");
};
const removeActiveClass = (activeClass) => {
    $.querySelector(`.${activeClass}`).classList.remove(activeClass);
};
const getElementByIndex = index => sections[index];
const getScrollY = index => {
    const activeSection = getElementByIndex(index);
    return activeSection.offsetTop;
};

const toggleNavVisibility = () => {
    navBtn.classList.toggle("nav__hamburger-btn--open");
    menu.classList.toggle("menu--visible");
    cover.classList.toggle("cover--active");
};

const setActiveNavMenuLink = (target) => {
    removeActiveClass("menu__link--active");
    target.classList.add("menu__link--active");
};

const scrollOnClick = (target, index) => {
    const positionY = getScrollY(index);
    let top;
    if (window.innerWidth < 400) {
        top = (positionY - 40) > 0 ? (positionY - 40) : 0;
    } else {
        top = (positionY - 60) > 0 ? (positionY - 60) : 0;
    }

    window.scrollTo({
        left: 0,
        top,
        behavior: "smooth"
    });

    setActiveNavMenuLink(target);
};

const setActiveTitle = (index, activeClass) => {
    removeActiveClass(activeClass);

    if (activeClass === "resume__item--active") {
        resumeTitles[index].classList.add(activeClass);
        return setResumeContent(index);
    }
    portfolioTitles[index].classList.add(activeClass);
    setPortfolioContent(index);
};

const setResumeContent = (index) => {
    let template = "";
    resumeTables[index].forEach(item => {
        template += `
<div class="resume__content">
    <div class="resume__content-header">
        <h4 class="resume__content-title">${item.title}</h4>
        <div class="resume__content-badge">${item.badge}</div>
    </div>
    <div class="resume__content-body">
        <p class="resume__content-subtitle">${item.subtitle}</p>
        <p class="resume__content-description">${item.description}</p>
    </div>
</div>
        `
    });

    resumeContentContainer.innerHTML = template;

};
const setPortfolioContent = (index) => {
    let template = "";
    portfolioSRCTables[index].map((src, index) => {
        template += `
<div class="swiper-slide">
<img src="${src}" alt="portfolio-slide" class="swiper__slide-img" data-num="${index}">
</div>
        `
    });

    portfolioContentContainer.innerHTML = '';
    portfolioContentContainer.insertAdjacentHTML("beforeend", template);
    swiper.update();
    // window.innerWidth < 576 ? swiper.slideTo(0) : swiper.slideTo(1);
    swiper.slideTo(0);
    swiper.autoplay.start();
};

// setting event handlers
navBtn.addEventListener("click", toggleNavVisibility);
cover.addEventListener("click", toggleNavVisibility);
navMenuLinks.forEach((navLink, index) => {
    navLink.addEventListener("click", event => {
        event.preventDefault();
        navBtn.classList.remove("nav__hamburger-btn--open");
        menu.classList.remove("menu--visible");
        cover.classList.remove("cover--active");
        scrollOnClick(event.target, index);
    });
});

resumeTitles.forEach((item, index) => {
    item.addEventListener('click', () => setActiveTitle(index, "resume__item--active"));
});
portfolioTitles.forEach((item, index) => {
    item.addEventListener('click', () => setActiveTitle(index, "portfolio__item--active"));
});

window.addEventListener("scroll", navbarHeightDeclare);

themeBtn.addEventListener("click", () => {
    if (isDarkMode) {
        heroWave.src = lightModeWaveSRC;
        html.classList.remove("dark-mode");
        localStorage.removeItem("wa-theme");
        pathOfThemeBtn.setAttribute("d", darkModeD);
    } else {
        heroWave.src = darkModeWaveSRC;
        html.classList.add("dark-mode");
        localStorage.setItem("wa-theme", "dark-mode");
        pathOfThemeBtn.setAttribute("d", lightModeD);
    }
    isDarkMode = !isDarkMode;
});

// first actions
window.scrollTo({
    left: 0,
    top: window.scrollY,
    behavior: "smooth"
});
navbarHeightDeclare();
setResumeContent(0);
setPortfolioContent(0);

if (isDarkMode) {
    html.classList.add("dark-mode");
    heroWave.src = darkModeWaveSRC;
    pathOfThemeBtn.setAttribute("d", lightModeD);
} else {
    html.classList.add("light-mode");
    heroWave.src = lightModeWaveSRC;
    pathOfThemeBtn.setAttribute("d", darkModeD);
}


// intersection observer (scroll handler)
const observerHandler = sections => {
    sections.forEach(section => {
        if (section.isIntersecting) {
            const targetIndex = section.target.getAttribute("index");
            setActiveNavMenuLink(navMenuLinks[targetIndex])
        }
    });
};
sections.forEach((section, index) => {
    section.setAttribute("index", String(index));

    const ratio = window.innerHeight / (section.offsetHeight * 2);
    const threshold = (ratio < 1) ? ratio.toFixed(1) : 0.5;

    const observer = new IntersectionObserver(observerHandler, {threshold})
    observer.observe(section);
});