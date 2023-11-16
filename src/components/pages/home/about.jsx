"use client";
import React, { useEffect, useRef } from "react";
import Btn from "../../shared/buttons/btn";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const About = () => {
    const aboutMain = useRef();
    const slideIn = useRef();
    const slideDown = useRef();
    useEffect(() => {
        const mm = gsap.matchMedia();
        mm.add(
            "(min-width:1024px)",
            () => {
                gsap.from(slideDown.current, {
                    scrollTrigger: {
                        trigger: aboutMain.current,
                        start: "top center",
                        toggleActions: "restart reverse restart reverse",
                    },
                    top: "-1rem",
                    opacity: 0,
                    zIndex: -1,
                    duration: 1,
                });
                gsap.fromTo(
                    slideIn.current,
                    {
                        left: "-20rem",
                        opacity: 0,
                    },
                    {
                        left: 0,
                        opacity: 1,
                        duration: 1,
                        scrollTrigger: {
                            trigger: aboutMain.current,
                            start: "top center",
                            toggleActions: "restart reverse restart reverse",
                        },
                    }
                );
            },
            aboutMain
        );
        return () => mm.revert();
    }, []);
    return (
        <div
            ref={aboutMain}
            className="flex lg:h-[80vh] justify-center items-start y-10 lg:py-0 px-2 md:px-5 lg:px-10 lg:border-b rounded-b-3xl border-gray-400 mt-14 lg:mt-5"
        >
            <div className="flex flex-col justify-center md:h-[520px] lg:h-[450px] border lg:border-0 w-full bg-[url('/home/pinkbg.png')] bg-center md:bg-[url('/home/bgbox.png')] bg-cover px-4 py-10 lg:p-6 lg:pr-10 bg-no-repeat relative">
                <div className="flex flex-col gap-10 md:h-full md:justify-between lg:justify-center lg:gap-16 w-full z-20">
                    <div className="flex justify-between">
                        <div className="text-xl md:text-4xl font-medium">
                            <h2>ABOUT US</h2>
                        </div>
                        <Btn
                            className="hidden border md:block bg-white"
                            aria-label="Read More"
                        >
                            READ MORE
                        </Btn>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-2 justify-between items-center">
                        <div
                            ref={slideIn}
                            className="hidden lg:block w-72 h-48 border shrink-0 relative opacity-0"
                        >
                            <Image
                                src={"/home/tylerhome7.png"}
                                width={300}
                                height={400}
                                alt="about-us-tyler"
                                className="w-full h-full"
                            />
                        </div>
                        <div className="leading-none lg:w-2/3 lg:text-justify text-xl md:text-4xl lg:text-3xl font-medium lg:indent-28">
                            <p>
                                Golf Wang is an american streetwear brand
                                established in 2011 by american musician Tyler,
                                The Creator, Golf wang is know for its colorful
                                visual aesthetic. The brand has since expanded
                                beyond its odd future affiliation and has
                                established itself in the fashion industry.
                            </p>
                        </div>
                        <div className="underline self-center text-xs font-semibold underline-offset-2 md:hidden">
                            <Link href={""}>READ MORE</Link>
                        </div>
                    </div>
                </div>
                <div
                    ref={slideDown}
                    className="w-28 h-32 top-10 right-10 md:w-48 md:h-60 absolute md:top-24 lg:top-20 md:right-1/2 md:translate-x-1/2 lg:right-80 z-10"
                >
                    <Image
                        src={"/home/tylerhome8.png"}
                        fill={true}
                        alt="slide-in"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
