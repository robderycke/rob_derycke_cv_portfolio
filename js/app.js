        lucide.createIcons();

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const layers = document.querySelectorAll('.parallax-layer');
            
            layers.forEach(layer => {
                const speed = layer.getAttribute('data-speed');
                const yPos = -(scrolled * speed);
                layer.style.transform = `translateY(${yPos}px)`;
            });
        });

        const heroSection = document.getElementById('home');
        const heroImage = heroSection.querySelector('img');
        
        heroSection.addEventListener('mousemove', (e) => {
            const x = (e.clientX - window.innerWidth / 2) / 50;
            const y = (e.clientY - window.innerHeight / 2) / 50;
            heroImage.style.transform = `translate(${x}px, ${y}px)`;
        });

        heroSection.addEventListener('mouseleave', () => {
            heroImage.style.transform = `translate(0, 0)`;
        });