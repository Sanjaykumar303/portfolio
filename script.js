// =================================
// TYPING EFFECT
// =================================

const roleText = document.querySelector(".hero h2");

const roles = [
    "AI & Machine Learning Engineer",
    "Machine Learning Engineer",
    "Computer Vision Developer",
    "AI Software Developer"
];

let roleIndex = 0;

let characterIndex = 0;

let isDeleting = false;


function typeRole() {

    const currentRole = roles[roleIndex];


    if (isDeleting) {

        characterIndex--;

    } else {

        characterIndex++;

    }


    roleText.textContent =
        currentRole.substring(0, characterIndex);


    let typingSpeed =
        isDeleting ? 50 : 100;


    if (
        !isDeleting &&
        characterIndex === currentRole.length
    ) {

        typingSpeed = 1500;

        isDeleting = true;

    } else if (
        isDeleting &&
        characterIndex === 0
    ) {

        isDeleting = false;

        roleIndex++;

        if (roleIndex === roles.length) {

            roleIndex = 0;

        }

        typingSpeed = 300;

    }


    setTimeout(typeRole, typingSpeed);

}


typeRole();


// =================================
// SCROLL REVEAL
// =================================

const sections =
    document.querySelectorAll(".section");


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show-section"
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


sections.forEach((section) => {

    section.classList.add(
        "hidden-section"
    );

    observer.observe(section);

});


// =================================
// NAVBAR SCROLL EFFECT
// =================================

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add(
            "navbar-scroll"
        );

    } else {

        navbar.classList.remove(
            "navbar-scroll"
        );

    }

});


// =================================
// MOBILE NAVIGATION
// =================================

const menuToggle =
    document.getElementById("menu-toggle");


const navLinks =
    document.getElementById("nav-links");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


const navigationLinks =
    document.querySelectorAll(".nav-links a");


navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// =================================
// SCROLL PROGRESS BAR
// =================================

const scrollProgress =
    document.getElementById("scroll-progress");


window.addEventListener("scroll", () => {

    const scrollTop =
        window.scrollY;


    const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;


    const scrollPercentage =
        documentHeight > 0
            ? (scrollTop / documentHeight) * 100
            : 0;


    scrollProgress.style.width =
        scrollPercentage + "%";

});


// =================================
// ACTIVE NAVIGATION LINK
// =================================

const pageSections =
    document.querySelectorAll("section[id]");


const navItems =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let currentSection = "";


    pageSections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;


        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navItems.forEach((link) => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});