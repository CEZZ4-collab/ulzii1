// 1. Гар утасны цэс (Mobile Menu) удирдах хэсэг
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// 2. Smooth Scroll (GSAP ScrollToPlugin ашиглана)
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Линк дээр дарахад гар утасны цэсийг хаах
        if (navLinks.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }

        const target = e.target.getAttribute('href');
        gsap.to(window, { 
            duration: 1.5, 
            scrollTo: target, 
            ease: "power4.inOut" 
        });
    });
});

// 3. ScrollTrigger ашиглан Section-уудыг амилуулах
gsap.utils.toArray('section').forEach(section => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "top 60%", 
            toggleActions: "play none none reverse"
        }
    });

    tl.to(section.querySelectorAll('.reveal-text'), {
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "expo.out"
    })
    .to(section.querySelectorAll('.desc'), {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
    }, "-=0.5")
    .to(section.querySelectorAll('.card'), {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "back.out(1.7)"
    }, "-=0.5");
});


