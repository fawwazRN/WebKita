window.addEventListener("scroll", function() {
    const navbar = this.document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scroll");
    } else {
        navbar.classList.remove("scroll");
    }
    })