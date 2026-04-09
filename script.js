//==========================================
//              NAVBAR SHADOW
//==========================================

window.addEventListener("scroll", function() {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 20) {
        navbar.classList.add("scrolled")
    } else {
        navbar.classList.remove("scrolled");
    }
});

//==========================================
//         REVEAL SECTION SAAT SCROLL
//==========================================
let section = document.querySelectorAll("section");

let observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.1});

section.forEach(function(section) {
    observer.observe(section);
});

//==========================================
//      ACTIVE LINK NAVBAR SAAT SCROOL
//==========================================
let navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", function() {
    let current = "";

    document.querySelectorAll("section").forEach(function(section) {
        if (window.scrollY >= section.offsetTop - 100) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(function(link){
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});