
// ===============================
// 1. WEBSITE LOADING MESSAGE
// ===============================

console.log("MyWebsite is successfully loaded!");


// ===============================
// 2. CURRENT YEAR IN FOOTER
// ===============================

const footer = document.querySelector("footer");

if (footer) {
    footer.innerHTML = `
        <p>© ${new Date().getFullYear()} MyWebsite. All Rights Reserved.</p>
    `;
}


// ===============================
// 3. EXPLORE MORE BUTTON
// ===============================

const exploreButton = document.querySelector(".btn");

if (exploreButton) {

    exploreButton.addEventListener("click", function () {

        console.log("Explore More button clicked!");

    });

}


// ===============================
// 4. SMOOTH NAVIGATION
// ===============================

const navigationLinks = document.querySelectorAll(
    '.nav-links a[href^="#"]'
);

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = link.getAttribute("href");

        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ===============================
// 5. SERVICE CARD ANIMATION
// ===============================

const serviceCards = document.querySelectorAll(".service-box");

serviceCards.forEach(function (card, index) {

    card.style.opacity = "0";
    card.style.transform = "translateY(25px)";
    card.style.transition = "all 0.6s ease";

    setTimeout(function () {

        card.style.opacity = "1";
        card.style.transform = "translateY(0)";

    }, 300 + (index * 200));

});


// ===============================
// 6. WELCOME MESSAGE
// ===============================

console.log("Welcome to MyWebsite!");

console.log("HTML + CSS + JavaScript");
