import { gsap } from "gsap";
const ghostSwipe = (ghost) => {
    const mm = gsap.matchMedia();
    mm.add("(min-width:1024px)", () => {
        gsap.to(ghost.current, {
            opacity: 1,
            duration: 1,
        });
        gsap.to(ghost.current, {
            top: "-13vh",
            left: "calc(94vw - 2.5rem)",
            duration: 1.5,
            width: 10,
            height: 10,
            opacity: 0.1,
            delay: 0.1,
            onComplete: () => mm.revert(),
        });
    });
};

export default ghostSwipe;
