// elements
const navMenuLinks = document.querySelectorAll(".menu__link");
const navBtn = document.querySelector(".nav__hamburger-btn");
const menu = document.querySelector(".menu");
const cover = document.querySelector(".cover");
const nav = document.querySelector(".nav");
const resumeContentContainer = document.querySelector(".resume__contents-container");
const resumeTitles = document.querySelectorAll(".resume__item");

// variables
const sectionsIds = ["hero", "about", "services", "resume", "portfolio", "pricing", "contact"];
const resumeContents = [

    `
<div class="resume__content">
    <div class="resume__content-header">
        <h4 class="resume__content-title">Envato University</h4>
        <div class="resume__content-badge">2010-2014</div>
    </div>
    <div class="resume__content-body">
        <p class="resume__content-subtitle">B.sc in Computer Engineer</p>
        <p class="resume__content-description">
            Reference site about Lorem Ipsum, giving information on its origins, as well as a
            random ipsum generator.
        </p>
    </div>
</div>
<div class="resume__content">
    <div class="resume__content-header">
        <h4 class="resume__content-title">Envato University</h4>
        <div class="resume__content-badge">2010-2014</div>
    </div>
    <div class="resume__content-body">
        <p class="resume__content-subtitle">B.sc in Computer Engineer</p>
        <p class="resume__content-description">
            Reference site about Lorem Ipsum, giving information on its origins, as well as a
            random ipsum generator.
        </p>
    </div>
</div>
<div class="resume__content">
    <div class="resume__content-header">
        <h4 class="resume__content-title">Envato University</h4>
        <div class="resume__content-badge">2010-2014</div>
    </div>
    <div class="resume__content-body">
        <p class="resume__content-subtitle">B.sc in Computer Engineer</p>
        <p class="resume__content-description">
            Reference site about Lorem Ipsum, giving information on its origins, as well as a
            random ipsum generator.
        </p>
    </div>
</div>
<div class="resume__content">
    <div class="resume__content-header">
        <h4 class="resume__content-title">Envato University</h4>
        <div class="resume__content-badge">2010-2014</div>
    </div>
    <div class="resume__content-body">
        <p class="resume__content-subtitle">B.sc in Computer Engineer</p>
        <p class="resume__content-description">
            Reference site about Lorem Ipsum, giving information on its origins, as well as a
            random ipsum generator.
        </p>
    </div>
</div>
<div class="resume__content">
    <div class="resume__content-header">
        <h4 class="resume__content-title">Envato University</h4>
        <div class="resume__content-badge">2010-2014</div>
    </div>
    <div class="resume__content-body">
        <p class="resume__content-subtitle">B.sc in Computer Engineer</p>
        <p class="resume__content-description">
            Reference site about Lorem Ipsum, giving information on its origins, as well as a
            random ipsum generator.
        </p>
    </div>
</div>
<div class="resume__content">
    <div class="resume__content-header">
        <h4 class="resume__content-title">Envato University</h4>
        <div class="resume__content-badge">2010-2014</div>
    </div>
    <div class="resume__content-body">
        <p class="resume__content-subtitle">B.sc in Computer Engineer</p>
        <p class="resume__content-description">
            Reference site about Lorem Ipsum, giving information on its origins, as well as a
            random ipsum generator.
        </p>
    </div>
</div>
    `,
    `
<div class="resume__content">
    <div class="resume__content-header">
        <h4 class="resume__content-title">Freelancing</h4>
        <div class="resume__content-badge">2014-2016</div>
    </div>
    <div class="resume__content-body">
        <p class="resume__content-subtitle">Programming as a Front-End Developer</p>
        <p class="resume__content-description">
            Reference site about Lorem Ipsum, giving information on its origins, as well as a
            random ipsum generator.
        </p>
    </div>
</div>
<div class="resume__content">
    <div class="resume__content-header">
        <h4 class="resume__content-title">Samsung Company</h4>
        <div class="resume__content-badge">2016-2018</div>
    </div>
    <div class="resume__content-body">
        <p class="resume__content-subtitle">Software Engineer</p>
        <p class="resume__content-description">
            Reference site about Lorem Ipsum, giving information on its origins, as well as a
            random ipsum generator.
        </p>
    </div>
</div>
    `,
    `
<div class="resume__content">
    <div class="resume__content-header">
        <h4 class="resume__content-title">HTML</h4>
        <div class="resume__content-badge">senior</div>
    </div>
    <div class="resume__content-body">
        <p class="resume__content-subtitle">lorem ipsum, Reference site about Lorem Ipsum</p>
        <p class="resume__content-description">
            Reference site about Lorem Ipsum, giving information on its origins, as well as a
            random ipsum generator.
        </p>
    </div>
</div>
<div class="resume__content">
    <div class="resume__content-header">
        <h4 class="resume__content-title">CSS</h4>
        <div class="resume__content-badge">senior</div>
    </div>
    <div class="resume__content-body">
        <p class="resume__content-subtitle">lorem ipsum, Reference site about Lorem Ipsum</p>
        <p class="resume__content-description">
            Reference site about Lorem Ipsum, giving information on its origins, as well as a
            random ipsum generator.
        </p>
    </div>
</div>
<div class="resume__content">
    <div class="resume__content-header">
        <h4 class="resume__content-title">Javascript</h4>
        <div class="resume__content-badge">senior</div>
    </div>
    <div class="resume__content-body">
        <p class="resume__content-subtitle">lorem ipsum, Reference site about Lorem Ipsum</p>
        <p class="resume__content-description">
            Reference site about Lorem Ipsum, giving information on its origins, as well as a
            random ipsum generator.
        </p>
    </div>
</div>
    `,
    `
<div class="resume__content">
    <div class="resume__content-header">
        <h4 class="resume__content-title">Envato University</h4>
        <div class="resume__content-badge">2010-2014</div>
    </div>
    <div class="resume__content-body">
        <p class="resume__content-subtitle">B.sc in Computer Engineer</p>
        <p class="resume__content-description">
            Reference site about Lorem Ipsum, giving information on its origins, as well as a
            random ipsum generator.
        </p>
    </div>
</div>
<div class="resume__content">
    <div class="resume__content-header">
        <h4 class="resume__content-title">Envato University</h4>
        <div class="resume__content-badge">2010-2014</div>
    </div>
    <div class="resume__content-body">
        <p class="resume__content-subtitle">B.sc in Computer Engineer</p>
        <p class="resume__content-description">
            Reference site about Lorem Ipsum, giving information on its origins, as well as a
            random ipsum generator.
        </p>
    </div>
</div>
<div class="resume__content">
    <div class="resume__content-header">
        <h4 class="resume__content-title">Envato University</h4>
        <div class="resume__content-badge">2010-2014</div>
    </div>
    <div class="resume__content-body">
        <p class="resume__content-subtitle">B.sc in Computer Engineer</p>
        <p class="resume__content-description">
            Reference site about Lorem Ipsum, giving information on its origins, as well as a
            random ipsum generator.
        </p>
    </div>
</div>
    `,
    `
<div class="resume__content">
    <div class="resume__content-header">
        <h4 class="resume__content-title">Envato University</h4>
        <div class="resume__content-badge">2010-2014</div>
    </div>
    <div class="resume__content-body">
        <p class="resume__content-subtitle">B.sc in Computer Engineer</p>
        <p class="resume__content-description">
            Reference site about Lorem Ipsum, giving information on its origins, as well as a
            random ipsum generator.
        </p>
    </div>
</div>
<div class="resume__content">
    <div class="resume__content-header">
        <h4 class="resume__content-title">Envato University</h4>
        <div class="resume__content-badge">2010-2014</div>
    </div>
    <div class="resume__content-body">
        <p class="resume__content-subtitle">B.sc in Computer Engineer</p>
        <p class="resume__content-description">
            Reference site about Lorem Ipsum, giving information on its origins, as well as a
            random ipsum generator.
        </p>
    </div>
</div>
<div class="resume__content">
    <div class="resume__content-header">
        <h4 class="resume__content-title">Envato University</h4>
        <div class="resume__content-badge">2010-2014</div>
    </div>
    <div class="resume__content-body">
        <p class="resume__content-subtitle">B.sc in Computer Engineer</p>
        <p class="resume__content-description">
            Reference site about Lorem Ipsum, giving information on its origins, as well as a
            random ipsum generator.
        </p>
    </div>
</div>
    `
];


// functions

const getElementByIndex = index => document.getElementById(sectionsIds[index]);

const getScrollY = index => {
    const activeSection = getElementByIndex(index);
    return (activeSection.getBoundingClientRect().top + window.scrollY).toFixed(1);
};

const setActiveNavMenuLink = (target) => {
    document.querySelector(".menu__link--active").classList.remove("menu__link--active");
    target.classList.add("menu__link--active");
};

const scrollOnClick = (target, index) => {
    const positionY = getScrollY(index);
    if (positionY) {
        window.scrollTo({
            left: 0,
            top: positionY - 60,
            behavior: "smooth"
        });
    }

    setActiveNavMenuLink(target);
};

const scrollHandler = () => {
    console.log("scrolled")
    if (window.scrollY <= (getScrollY(1) - 60)) {
        return setActiveNavMenuLink(navMenuLinks[0])
    }
    if (window.scrollY <= (getScrollY(2) - 60)) {
        return setActiveNavMenuLink(navMenuLinks[1])
    }
    if (window.scrollY <= (getScrollY(3) - 60)) {
        return setActiveNavMenuLink(navMenuLinks[2])
    }
    if (window.scrollY <= (getScrollY(4) - 60)) {
        return setActiveNavMenuLink(navMenuLinks[3])
    }
    if (window.scrollY <= (getScrollY(5) - 60)) {
        return setActiveNavMenuLink(navMenuLinks[4])
    }
    if (window.scrollY <= (getScrollY(6) - 60)) {
        return setActiveNavMenuLink(navMenuLinks[5])
    }

    return setActiveNavMenuLink(navMenuLinks[6])
};

const toggleNavVisibility = () => {
    navBtn.classList.toggle("nav__hamburger-btn--open");
    menu.classList.toggle("menu--visible");
    cover.classList.toggle("cover--active");
};

const setResumeContent = (contentIndex) => {
    resumeContentContainer.innerHTML = resumeContents[contentIndex];
};

const setResumeActiveTitle = (index) => {
    document.querySelector(".resume__item--active").classList.remove("resume__item--active");
    resumeTitles[index].classList.add("resume__item--active");
    setResumeContent(index);
};

// events
window.scrollTo({
    left: 0,
    top: window.scrollY,
    behavior: "smooth"
});
window.addEventListener("scroll", () => {
    scrollHandler();

    if (window.scrollY > 300) {
        return nav.classList.add("nav--minimized");
    }
    nav.classList.remove("nav--minimized");
});
navMenuLinks.forEach((navLink, index) => {
    navLink.addEventListener("click", event => {
        event.preventDefault();
        navBtn.classList.remove("nav__hamburger-btn--open");
        menu.classList.remove("menu--visible");
        cover.classList.remove("cover--active");
        scrollOnClick(event.target, index);
    });
});

navBtn.addEventListener("click", toggleNavVisibility);
cover.addEventListener("click", toggleNavVisibility);
setResumeContent(0);
resumeTitles.forEach((item, index) => {
    item.addEventListener('click', () => setResumeActiveTitle(index));
});