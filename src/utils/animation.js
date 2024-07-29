import gsap from "gsap";

export function AnimateWelcome(callback) {
    const tlWelcome = gsap.timeline()

    document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return (
        tlWelcome.from('#intro-welcome', {
            xPercent: "-100",
            duration: 1.2,
            delay: 0.3
        }).from(['#title-1', '#title-2'], {
            opacity: 0,
            y: '+=30',
            stagger: 0.5
        }).from('#mainContent', {
            opacity: 0,
            duration: 0.5
        }).to(['#title-1', '#title-2'], {
            opacity: 0,
            y: '-=30',
            delay: 0.3,
            stagger: 0.5
        }).to('#intro-welcome', {
            xPercent: "-100",
            duration: 1,
            onComplete: callback
        }).add(() => {
            document.body.style.overflow = 'auto';
        })
    )
}