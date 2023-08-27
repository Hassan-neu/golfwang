import React from "react";
import { gsap } from "gsap";
const ghostSwipe = (ghost) => {
    const ctx = gsap.context(() => {}, ghost);
    ctx.add(() => {
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
            onComplete: () => ctx.revert(),
        });
    });
};

export default ghostSwipe;
