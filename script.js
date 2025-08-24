// Fade-in effect for sections
document.addEventListener("DOMContentLoaded", function () {
    function revealSections() {
        document.querySelectorAll(".fade-in").forEach(el => {
            const top = el.getBoundingClientRect().top;
            if (top < window.innerHeight - 90) {
                el.classList.add("visible");
            }
        });
    }
    revealSections();
    window.addEventListener("scroll", revealSections);

    // Contact form message display
    document.getElementById('contact-form').addEventListener('submit', function (e) {
        e.preventDefault();
        document.querySelector('.form-message').textContent = "Thank you for your message!";
        this.reset();
    });

    // Navbar active link highlight
    const navLinks = document.querySelectorAll('nav a');
    window.addEventListener("scroll", function () {
        let fromTop = window.scrollY + 120;
        navLinks.forEach(link => {
            if (!link.hash) return;
            let section = document.querySelector(link.hash);
            if (!section) return;
            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    });
});
