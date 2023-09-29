"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Banner = () => {
    const banner = useRef();
    useEffect(() => {
        const mm = gsap.matchMedia();
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: banner.current,
                start: "top 20px",
                toggleActions: "play none reverse",
            },
        });
        mm.add("(min-width:1024px)", () => {
            tl.to(banner.current, {
                backgroundSize: "calc(100% + 0.5vh)",
                backgroundPosition: "30% 60%",
                duration: 1,
            });
        });
        return () => mm.revert();
    }, []);
    return (
        <div
            ref={banner}
            className="w-full h-72 lg:h-96 border mt-5  bg-[url('/shop/shop2.png')] bg-cover lg:bg-[size:calc(100%_+_100vh)] bg-[position:50%_50%] bg-no-repeat "
        ></div>
    );
};

export default Banner;
