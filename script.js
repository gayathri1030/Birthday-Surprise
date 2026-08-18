/* ===================================
   BIRTHDAY SURPRISE JAVASCRIPT
=================================== */


/* ===================================
   PAGE NAVIGATION
=================================== */

function goToPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {

        page.classList.remove("active");

    });


    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {

        selectedPage.classList.add("active");

    }

}


/* ===================================
   MESSAGE SLIDER
=================================== */

const messages = [
    "It's your special day ✨",
    "Ready for your surprise? 🎁"
];

let currentMessage = 0;

function nextMessage() {

    currentMessage++;

    if (currentMessage >= messages.length) {
        goToPage("celebration");
        return;
    }

    updateMessage();
}

function updateMessage() {

    const messageText =
        document.getElementById("messageText");

    const stepNumber =
        document.getElementById("stepNumber");

    const dots =
        document.querySelectorAll(".dot");

    messageText.style.opacity = "0";

    setTimeout(function () {

        messageText.textContent =
            messages[currentMessage];

        stepNumber.textContent =
            "0" + (currentMessage + 1) + " / 02";

        messageText.style.opacity = "1";

    }, 200);

    dots.forEach(function (dot, index) {

        dot.classList.remove("active");

        if (index === currentMessage) {
            dot.classList.add("active");
        }

    });
}


/* ===================================
   CELEBRATION
=================================== */

function startCelebration() {

    const celebration =
        document.getElementById("celebration");


    const title =
        document.getElementById("celebrationTitle");


    const text =
        document.getElementById("celebrationText");


    celebration.classList.add("light-on");


    title.textContent =
        "Let the celebration begin ✨";


    text.textContent =
        "Something beautiful is waiting for you...";


    createBalloons();


    setTimeout(function() {

        goToPage("letter");


        setTimeout(function() {

            document
                .getElementById("letter")
                .classList.add("open");

        }, 300);

    }, 2500);

}


/* ===================================
   FLOATING HEARTS
=================================== */

function createHearts() {

    const container =
        document.querySelector(".hearts");


    if (!container) return;


    for (let i = 0; i < 25; i++) {

        const heart =
            document.createElement("span");


        heart.className = "heart";


        heart.textContent =
            Math.random() > 0.5
                ? "♥"
                : "✦";


        heart.style.left =
            Math.random() * 100 + "%";


        heart.style.fontSize =
            12 + Math.random() * 20 + "px";


        heart.style.animationDuration =
            5 + Math.random() * 6 + "s";


        heart.style.animationDelay =
            Math.random() * 5 + "s";


        container.appendChild(heart);

    }

}


/* ===================================
   BALLOONS
=================================== */

function createBalloons() {

    const colors = [

        "#ff2d55",
        "#d4af37",
        "#9b59b6",
        "#3498db",
        "#e74c3c"

    ];


    for (let i = 0; i < 12; i++) {

        const balloon =
            document.createElement("div");


        balloon.style.position =
            "fixed";


        balloon.style.width =
            "55px";


        balloon.style.height =
            "75px";


        balloon.style.borderRadius =
            "50%";


        balloon.style.left =
            Math.random() * 100 + "vw";


        balloon.style.bottom =
            "-100px";


        balloon.style.background =
            colors[i % colors.length];


        balloon.style.zIndex =
            "20";


        balloon.style.transition =
            "transform 7s linear, opacity 7s linear";


        document.body.appendChild(balloon);


        setTimeout(function() {

            balloon.style.transform =
                "translateY(-120vh)";


            balloon.style.opacity =
                "0";

        }, 100);


        setTimeout(function() {

            balloon.remove();

        }, 7500);

    }

}


/* ===================================
   START WEBSITE
=================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        createHearts();

    }
);