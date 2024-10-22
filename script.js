// Smooth scrolling for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Responsive Navbar Toggler for Mobile
document.addEventListener("DOMContentLoaded", function() {
    const navToggler = document.querySelector('.navbar-toggler');
    const navMenu = document.querySelector('.navbar-collapse');

    if (navToggler && navMenu) {
        navToggler.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }
});

// Lazy Load Images
document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll('img.lazy');

    if ('IntersectionObserver' in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove('lazy');
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    }
});

// Highlight current section on scroll
window.addEventListener('scroll', function() {
    let sections = document.querySelectorAll('section');
    let scrollPosition = window.scrollY || window.pageYOffset;

    sections.forEach(section => {
        if (scrollPosition >= section.offsetTop - 100 && scrollPosition < section.offsetTop + section.offsetHeight) {
            document.querySelector('.navbar-nav a[href*=' + section.id + ']').classList.add('active');
        } else {
            document.querySelector('.navbar-nav a[href*=' + section.id + ']').classList.remove('active');
        }
    });
});
