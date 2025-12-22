
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                gsap.to(window, { duration: 1.5, scrollTo: e.target.getAttribute('href'), ease: "power4.inOut" });
            });
        });

      
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

      
        gsap.from("nav", { y: -100, opacity: 0, duration: 1, delay: 0.2 });

const modal = document.getElementById('loginModal');
const trigger = document.getElementById('loginTrigger');
const closeBtn = document.querySelector('.close-x');
const box = document.querySelector('.login-box');

trigger.addEventListener('click', () => {
    modal.style.display = 'flex';
    gsap.to(modal, { opacity: 1, duration: 0.4 });
    gsap.fromTo(box, 
        { scale: 0.8, y: 50, opacity: 0 }, 
        { scale: 1, y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.7)" }
    );
});


const closeModal = () => {
    gsap.to(modal, { 
        opacity: 0, 
        duration: 0.3, 
        onComplete: () => { modal.style.display = 'none'; } 
    });
};

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});