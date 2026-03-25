// Smooth scrolling for navigation
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 80,
            behavior: 'smooth'
        });
    }
}

// Cursor follow effect (Optional for extra professional touch)
const cursor = document.querySelector('.cursor-follow');
document.addEventListener('mousemove', (e) => {
    if(cursor) {
        // استخدام transform بدلاً من left/top لأداء أنعم بـ 60 فريم
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }
});

// Reveal items on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.glass').forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    observer.observe(card);
});

window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});