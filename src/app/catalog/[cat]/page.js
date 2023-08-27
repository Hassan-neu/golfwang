"use client";
import Banner from "@/components/catalog/banner";
import ShopItems from "@/components/catalog/shopItems";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Page = () => {
    const main = useRef();
    const banner = useRef();
    const shopImage = useRef();
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: banner.current,
                start: "top 20px",
                endTrigger: shopImage.current,
                end: "bottom 90%",
                toggleActions: "play none reverse",
            },
        });
        const ctx = gsap.context(() => {}, main);
        ctx.add(() => {
            tl.to(banner.current, {
                backgroundSize: "calc(100% + 0.5vh)",
                backgroundPosition: "30% 60%",
                duration: 1,
            });
            tl.to(
                shopImage.current,
                {
                    backgroundSize: 600,
                    duration: 1,
                },
                "-=1"
            );
        });
        return () => ctx.revert();
    }, []);
    return (
        <div ref={main} className="px-10">
            <Banner banner={banner} />
            <ShopItems shopImage={shopImage} />
        </div>
    );
};

export default Page;
