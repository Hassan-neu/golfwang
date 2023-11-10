"use client";
import React, { useEffect, useRef } from "react";
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
    const elements = gsap.utils.toArray([frameOne, frameTwo]);
    console.log(elements);
    useEffect(() => {
        const mm = gsap.matchMedia();
        gsap.to(img.current, {
            rotate: 720,
            duration: 100,
            ease: "linear",
            repeat: -1,
        });
        mm.add(
            "(min-width:1024px)",
            () => {
                const tl = gsap.timeline({
                    repeat: -1,

                    // scrollTrigger: {
                    //     trigger: main.current,
                    //     start: "top top",
                    //     // end: "+=1500px",
                    //     pin: true,
                    //     scrub: 1,
                    // },
                });

                gsap.to(text.current, {
                    textShadow: "5px 20px yellow,10px 30px red",
                    repeat: 2,
                    yoyo: true,
                    duration: 2,
                });
                tl.to(frameThree.current, {
                    // top: "80%",
                    // yPercent: -50,
                    // left: "66%",
                    // xPercent: -50,
                    // rotate: -90,
                    rotate: 12,
                    duration: 2,
                });
                tl.to(frameTwo.current, {
                    rotate: 6,
                    duration: 2,
                });
                tl.to(
                    frameOne.current,
                    {
                        // zIndex: 2,
                    },
                    "-=0.5"
                );
                // tl.to(
                //     frameThree.current,
                //     {
                //         top: "50%",
                //         yPercent: -50,
                //         left: "50%",
                //         zIndex: 1,
                //         // xPercent: -50,
                //         rotate: -192,
                //         duration: 2,
                //     },
                //     "-=0.4"
                // );
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
            <div className="md:h-[80vh] lg:h-screen lg:rounded-b-3xl bg-[url('/home/noise.png')] bg-[color:#f2f2f2] flex flex-col gap-4 lg:gap-40 lg:border-2">
                <div className="flex h-full flex-col gap-40 pt-40 pb-10 md:p-10 lg:self-stretch text-center lg:gap-28 relative border border-neutral-400 lg:border-none">
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
                            className="hidden text-[9vw] font-black  lg:flex lg:h-1/2 lg:justify-center"
                        >
                            <h1 className=" [transform:scale(1.7,1)]">
                                GOLF WANG
                            </h1>
                        </div>
                    </div>
                    <div
                        ref={frameOne}
                        className="border-2 bg-red-500 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 -rotate-12 w-48 md:w-80 h-56 md:h-[400px]"
                    >
                        {/* <Image src="" width={200} height={250} alt="hello" /> */}
                    </div>
                    <div
                        ref={frameTwo}
                        className="border-2 bg-violet-500 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-48 md:w-80 h-56 md:h-[400px]"
                    >
                        {/* <Image src="" width={200} height={250} alt="hello" /> */}
                    </div>
                    {/* <div
                        ref={frameThree}
                        className="border-2 bg-green-500 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 rotate-6 w-48 md:w-80 h-56 md:h-[400px]"
                    >
                        hello
                        <Image src="" width={200} height={250} alt="hello" />
                    </div> */}
                    <div className="border-b-2 border-black text-xs md:text-sm font-semibold self-center lg:hover:text-yellow-400 lg:hover:border-yellow-400 transition-all">
                        <Link href="/catalog/all">SHOP NOW</Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Hero;
