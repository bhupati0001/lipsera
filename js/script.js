window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    const logo = document.querySelector("#logo");
    const navContainer = document.querySelector(".nav-container");

    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
        navContainer.classList.add("scrolled");
        logo.src = "/assets/logo-black-bg-removed.png";
        logo.alt = "Logo";
    } else {
        nav.classList.remove("scrolled");
        navContainer.classList.remove("scrolled");
        logo.src = "/assets/logo-main-removebg.png";
        logo.alt = "Logo";
    }
});
