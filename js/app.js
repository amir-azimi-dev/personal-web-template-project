// elements
const navMenuLinks = document.querySelectorAll(".menu__link");
const navBtn = document.querySelector(".nav__hamburger-btn");
const menu = document.querySelector(".menu");
const cover = document.querySelector(".cover");
const nav = document.querySelector(".nav");
const sections = document.querySelectorAll("main > section");
const resumeContentContainer = document.querySelector(".resume__contents-container");
const resumeTitles = document.querySelectorAll(".resume__item");
const portfolioContentContainer = document.querySelector(".portfolio .swiper-wrapper");
const portfolioTitles = document.querySelectorAll(".portfolio__item");

// variables
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
    document.querySelector(`.${activeClass}`).classList.remove(activeClass);
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
    window.innerWidth < 576 ? swiper.slideTo(0) : swiper.slideTo(1);
};

// events
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

// start
window.scrollTo({
    left: 0,
    top: window.scrollY,
    behavior: "smooth"
});
navbarHeightDeclare();
setResumeContent(0);
setPortfolioContent(0);

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