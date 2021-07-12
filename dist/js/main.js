window.addEventListener('DOMContentLoaded', () => {
    // Animating the title
    gsap.from('h1', { opacity: 0, duration: 1, y: -50 });

    // Creating a timeline
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    tl.from('.box-container', { opacity: 0.5, y: 50 })
        .to('.photo-col .overlay', { scaleY: 0 })
        .from('.slide-in', { x: 100, opacity: 0, stagger: 0.5 }, '-=0.2')
        .from('aside', { y: 20, opacity: 0 }, '-=0.8');

    // Showing the image
    // gsap.to('.photo-col .overlay', { opacity: 0, scaleY: 0, duration: 1 });
})