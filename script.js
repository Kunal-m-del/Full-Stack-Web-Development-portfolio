// ==========================
// TYPING ANIMATION
// ==========================

const typingText =
    document.getElementById(
        "typingText"
    );

const words = [

    "Web Developer",
    "B.Tech Student",
    "Java Programmer",
    "Problem Solver"

];

let wordIndex = 0;

let characterIndex = 0;

let isDeleting = false;


function typeEffect() {

    const currentWord =
        words[wordIndex];


    if (!isDeleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;

    }

    else {

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

    }


    let typingSpeed =
        isDeleting
        ? 50
        : 100;


    if (
        !isDeleting &&
        characterIndex ===
        currentWord.length
    ) {

        typingSpeed = 1500;

        isDeleting = true;

    }


    else if (
        isDeleting &&
        characterIndex === 0
    ) {

        isDeleting = false;

        wordIndex =
            (
                wordIndex + 1
            )
            %
            words.length;

        typingSpeed = 400;

    }


    setTimeout(
        typeEffect,
        typingSpeed
    );

}


typeEffect();


// ==========================
// DARK MODE
// ==========================

const themeButton =
    document.getElementById(
        "themeButton"
    );


themeButton.addEventListener(
    "click",
    function () {

        document.body
            .classList
            .toggle(
                "dark-mode"
            );


        const icon =
            themeButton.querySelector(
                "i"
            );


        if (
            document.body
                .classList
                .contains(
                    "dark-mode"
                )
        ) {

            icon.className =
                "fa-solid fa-sun";

        }

        else {

            icon.className =
                "fa-solid fa-moon";

        }

    }
);


// ==========================
// MOBILE MENU
// ==========================

const menuButton =
    document.getElementById(
        "menuButton"
    );


const navLinks =
    document.getElementById(
        "navLinks"
    );


menuButton.addEventListener(
    "click",
    function () {

        navLinks
            .classList
            .toggle(
                "active"
            );

    }
);


// Close menu after clicking

document
    .querySelectorAll(
        ".nav-links a"
    )
    .forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    navLinks
                        .classList
                        .remove(
                            "active"
                        );

                }
            );

        }
    );


// ==========================
// CONTACT FORM
// ==========================

const contactForm =
    document.getElementById(
        "contactForm"
    );


const formMessage =
    document.getElementById(
        "formMessage"
    );


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        formMessage.textContent =
            "Thank you! Your message has been received.";


        contactForm.reset();


        setTimeout(
            function () {

                formMessage.textContent =
                    "";

            },
            4000
        );

    }
);


// ==========================
// CURRENT YEAR
// ==========================

document.getElementById(
    "currentYear"
).textContent =
    new Date()
        .getFullYear();


// ==========================
// BACK TO TOP BUTTON
// ==========================

const topButton =
    document.getElementById(
        "topButton"
    );


window.addEventListener(
    "scroll",
    function () {

        if (
            window.scrollY > 500
        ) {

            topButton.style.display =
                "block";

        }

        else {

            topButton.style.display =
                "none";

        }

    }
);


topButton.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior:
                "smooth"

        });

    }
);