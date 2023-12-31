"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
    const [indx, setIndx] = useState(0);
    const main = useRef();
    const text = useRef();
    const textOne = useRef();
    const textTwo = useRef();
    const img = useRef();
    const frameOne = useRef();
    const frameTwo = useRef();
    const frameThree = useRef();
    const frameFour = useRef();
    const frameFive = useRef();
    const frameSix = useRef();
    const frameSeven = useRef();
    useLayoutEffect(() => {
        const elements = gsap.utils.toArray([
            frameTwo.current,
            frameThree.current,
            frameFour.current,
            frameFive.current,
            frameSix.current,
            frameSeven.current,
        ]);
        const textEl = gsap.utils.toArray([textOne.current, textTwo.current]);
        const mm = gsap.matchMedia();
        const tl = gsap.timeline({
            repeat: -1,
            yoyo: true,
            repeatDelay: 0.5,
        });
        gsap.to(img.current, {
            rotate: 720,
            duration: 100,
            ease: "linear",
            repeat: -1,
        });
        tl.from(elements, {
            rotate: -12,
            duration: 3,
            ease: "easeInOut",
            opacity: 0,
            stagger: {
                each: 4,
            },
        });
        mm.add(
            "(min-width:1024px)",
            () => {
                gsap.from(textEl, {
                    top: 0,
                    left: 0,
                    stagger: 0.2,
                    repeat: 2,
                    yoyo: true,
                    duration: 1,
                });
            },
            main
        );

        return () => mm.revert();
    }, []);
    return (
        <main
            ref={main}
            className="md:h-[80vh] px-2 md:px-5 lg:px-0 lg:h-screen overflow-hidden"
        >
            <div className="md:h-[80vh] lg:h-screen lg:rounded-b-3xl bg-[url('/home/noise.png')] bg-[color:#f2f2f2] flex flex-col gap-4 lg:gap-40 lg:">
                <div className="flex h-full flex-col gap-40 pt-40 pb-10 md:p-10 lg:self-stretch text-center lg:gap-10 relative border border-neutral-400 lg:border-none">
                    <div className="h-full lg:flex lg:flex-col lg:justify-center">
                        <div className="flex gap-[530px] mt-5 md:mt-10 lg:mt-0 lg:h-[30%]">
                            <div className="hidden  md:absolute md:top-1/2 md:left-28 md:z-30 lg:static md:flex md:flex-col md:items-start lg:ml-32 text-sm self-end">
                                <span>More than merch</span>
                                <span>More than streetwear</span>
                            </div>
                            <Image
                                ref={img}
                                src="/home/rotate.svg"
                                width={130}
                                height={130}
                                alt="rotating-golf-wang"
                                className="w-16 h-16 absolute top-10 right-0 md:static md:w-32 md:h-32 mr-[30%] md:mr-[15%] ml-auto lg:m-0"
                            />
                        </div>
                        <div
                            ref={text}
                            className="hidden text-[9vw] font-black  lg:flex lg:h-1/2 lg:justify-center relative z-0"
                        >
                            <h1 className=" [transform:scale(1.7,1)] z-30 w-full">
                                GOLF WANG
                            </h1>
                            <h1
                                ref={textOne}
                                className="absolute text-yellow-300 [transform:scale(1.7,1)] top-[20px] left-[5px] z-20 w-full"
                            >
                                GOLF WANG
                            </h1>
                            <h1
                                ref={textTwo}
                                className="absolute text-white [filter:drop-shadow(0_0_#000)]  [transform:scale(1.7,1)] z-10 top-[30px] left-[10px] w-full"
                            >
                                GOLF WANG
                            </h1>
                        </div>
                        {/* <div className="hidden text-[9vw] font-black  lg:flex lg:h-1/2 lg:justify-center absolute top-[54%] -translate-y-1/2 left-[5px]  z-20 w-full"></div>
                            <div className="my-auto hidden text-[9vw] font-black text-white [filter:drop-shadow(0_0_#000)]  lg:flex lg:h-1/2 lg:justify-center absolute top-[58%] -translate-y-1/2 left-[10px] z-10 w-full"></div> */}
                    </div>
                    <div className="border border-neutral-600 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 -rotate-6 w-48 md:w-80 h-56 md:h-[400px]">
                        <Image
                            src="/home/pinkbg.png"
                            fill={true}
                            className="object-cover"
                            alt="hello"
                            sizes="(max-width: 479px) 195px, 380px"
                        />
                    </div>
                    <div
                        ref={frameOne}
                        className="border border-neutral-600 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 rotate-[9deg] w-48 md:w-80 h-56 md:h-[400px] opacity-100"
                    >
                        <Image
                            src="/home/hero1.png"
                            fill={true}
                            alt="hello"
                            sizes="(max-width: 479px) 195px, 380px"
                        />
                    </div>
                    <div
                        ref={frameTwo}
                        className="border border-neutral-600 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 rotate-[8deg] w-48 md:w-80 h-56 md:h-[400px] opacity-100"
                    >
                        <Image
                            src="/home/hero2.png"
                            fill={true}
                            alt="hello"
                            loading="lazy"
                            sizes="(max-width: 479px) 195px, 380px"
                        />
                    </div>
                    <div
                        ref={frameThree}
                        className="border border-neutral-600 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 rotate-[7deg] w-48 md:w-80 h-56 md:h-[400px] opacity-100"
                    >
                        <Image
                            src="/home/hero3.png"
                            fill={true}
                            alt="hello"
                            loading="lazy"
                            sizes="(max-width: 479px) 195px, 380px"
                        />
                    </div>
                    <div
                        ref={frameFour}
                        className="border border-neutral-600 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 rotate-[6deg] w-48 md:w-80 h-56 md:h-[400px] opacity-100"
                    >
                        <Image
                            src="/home/hero4.png"
                            fill={true}
                            alt="hello"
                            loading="lazy"
                            sizes="(max-width: 479px) 195px, 380px"
                        />
                    </div>
                    <div
                        ref={frameFive}
                        className="border border-neutral-600 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 rotate-[5deg] w-48 md:w-80 h-56 md:h-[400px] opacity-100"
                    >
                        <Image
                            src="/home/hero5.png"
                            fill={true}
                            alt="hello"
                            loading="lazy"
                            sizes="(max-width: 479px) 195px, 380px"
                        />
                    </div>
                    <div
                        ref={frameSix}
                        className="border border-neutral-600 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 rotate-[4deg] w-48 md:w-80 h-56 md:h-[400px] opacity-100"
                    >
                        <Image
                            src="/home/hero6.png"
                            fill={true}
                            alt="hello"
                            loading="lazy"
                            sizes="(max-width: 479px) 195px, 380px"
                        />
                    </div>
                    <div
                        ref={frameSeven}
                        className="border border-neutral-600 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 rotate-3 w-48 md:w-80 h-56 md:h-[400px] opacity-100"
                    >
                        <Image
                            src="/home/hero7.png"
                            fill={true}
                            alt="hello"
                            loading="lazy"
                            sizes="(max-width: 479px) 195px, 380px"
                        />
                    </div>
                    <div className="border-b-2 border-black text-xs md:text-sm font-semibold self-center lg:hover:text-yellow-400 lg:hover:border-yellow-400 transition-all">
                        <Link href="/catalog/all">SHOP NOW</Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Hero;
