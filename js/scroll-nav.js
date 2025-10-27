/******************************************************
 * scroll-nav.js — Hide Navbar on Scroll (Mobile)
 * Author: Aohua Tian
 * Description:
 *  - Hides the header when user scrolls down (≥ 80px)
 *  - Shows it again when user scrolls up (≥ 20px)
 *  - Only activates on screens ≤ 768px width
 ******************************************************/

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    let lastScrollY = window.scrollY;
    let lastAction = "show";

    const hideThreshold = 20;
    const showThreshold = 30;

    function handleScroll() {
        const currentScrollY = window.scrollY;
        const diff = currentScrollY - lastScrollY;

        if (window.innerWidth <= 768) {
            if (diff > hideThreshold && lastAction !== "hide") {
                header.classList.add("hidden");
                lastAction = "hide";
            }
            else if (diff < -showThreshold && lastAction !== "show") {
                header.classList.remove("hidden");
                lastAction = "show";
            }
        } else {
            header.classList.remove("hidden");
        }

        lastScrollY = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll);
});
