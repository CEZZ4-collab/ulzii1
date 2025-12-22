
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
