"use client";
import React, { useEffect, useRef } from "react";
import Navbar from "../navbar";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
    const main = useRef();
    const text = useRef();
    const img = useRef();
    const frameOne = useRef();
    const frameTwo = useRef();
    const frameThree = useRef();

    useEffect(() => {
        const mm = gsap.matchMedia();
        gsap.to(img.current, {
            rotate: 720,
            duration: 100,
            ease: "ease-in",
            repeat: -1,
        });
        mm.add(
            "(min-width:768px)",
            () => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: main.current,
                        start: "top top",
                        // end: "+=1500px",
                        pin: true,
                        scrub: 1,
                    },
                });

                gsap.to(text.current, {
                    textShadow: "5px 20px yellow,10px 30px red",
                    repeat: 2,
                    yoyo: true,
                    duration: 2,
                });
                tl.to(frameThree.current, {
                    top: "80%",
                    yPercent: -50,
                    left: "66%",
                    xPercent: -50,
                    rotate: -90,
                });
                tl.to(frameTwo.current, {
                    rotate: 6,
                    zIndex: 3,
                });
                tl.to(
                    frameOne.current,
                    {
                        zIndex: 2,
                    },
                    "-=0.5"
                );
                tl.to(
                    frameThree.current,
                    {
                        top: "50%",
                        yPercent: -50,
                        left: "50%",
                        zIndex: 1,
                        // xPercent: -50,
                        rotate: -192,
                    },
                    "-=0.4"
                );
            },
            main
        );

        return () => mm.revert();
    }, []);
    return (
        <main
            ref={main}
            className="h-[80vh] px-2 md:px-0 md:h-screen overflow-hidden"
        >
            <div className="h-[80vh] md:h-screen md:rounded-b-3xl bg-white flex flex-col gap-4 md:gap-40 md:border-2">
                <div className="flex h-full flex-col p-5 md:self-stretch text-center md:gap-28 relative border-2 md:border-none">
                    <div className="relative h-full md:flex md:flex-col md:justify-center">
                        <div className="flex gap-[450px] mt-16 md:mt-0 md:h-[30%]">
                            <div className="hidden md:flex md:flex-col md:items-start md:ml-60 text-sm self-end">
                                <span>More than merch</span>
                                <span>More than streetwear</span>
                            </div>
                            <Image
                                ref={img}
                                src="/home/rotate.svg"
                                width={130}
                                height={130}
                                alt="rotating-golf-wang"
                                className="mr-8 w-16 h-16 md:w-32 md:h-32 ml-auto md:m-0"
                            />
                        </div>
                        <div
                            ref={text}
                            className="hidden text-[9rem] font-black relative md:flex md:h-1/2 md:justify-center"
                        >
                            <h1 className=" [transform:scale(1.7,1)]">
                                GOLF WANG
                            </h1>
                        </div>
                        <div
                            ref={frameOne}
                            className="border-2 bg-red-500 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 -rotate-12 w-52 md:w-80 h-60 md:h-[400px]"
                        >
                            {/* <Image src="" width={200} height={250} alt="hello" /> */}
                        </div>
                        <div
                            ref={frameTwo}
                            className="border-2 bg-violet-500 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-52 md:w-80 h-60 md:h-[400px]"
                        >
                            {/* <Image src="" width={200} height={250} alt="hello" /> */}
                        </div>
                        <div
                            ref={frameThree}
                            className="border-2 bg-green-500 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 rotate-6 w-52 md:w-80 h-60 md:h-[400px]"
                        >
                            hello
                            {/* <Image src="" width={200} height={250} alt="hello" /> */}
                        </div>
                    </div>
                    <div className="border-b-2 border-black text-sm font-semibold self-center">
                        <Link href="/catalog/all">SHOP NOW</Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Hero;
