"use client";
import Banner from "@/components/pages/catalog/banner";
import ShopItems from "@/components/pages/catalog/shopItems";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Page = ({ params: { filter } }) => {
    const main = useRef();
    const banner = useRef();
    const shopImage = useRef();
    useEffect(() => {
        const mm = gsap.matchMedia();
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: banner.current,
                start: "top 20px",
                endTrigger: shopImage.current,
                end: "bottom 90%",
                toggleActions: "play none reverse",
            },
        });
        mm.add(
            "(min-width:1024px)",
            () => {
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
            },
            main
        );

        return () => mm.revert();
    }, []);
    return (
        <div ref={main} className="px-2 md:px-5 lg:px-10">
            <Banner banner={banner} />
            <ShopItems shopImage={shopImage} filter={filter} />
        </div>
    );
};

export default Page;
