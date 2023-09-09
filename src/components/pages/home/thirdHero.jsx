"use client";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);
const ThirdHero = () => {
    const box = useRef();
    const firstBox = useRef();
    const secondBox = useRef();
    const thirdBox = useRef();
    const fourthBox = useRef();
    const fifthBox = useRef();
    useEffect(() => {
        const mm = gsap.matchMedia();
        mm.add(
            "(min-width:1024px)",
            () => {
                gsap.to(firstBox.current, {
                    scrollTrigger: {
                        trigger: box.current,
                        start: "top top",
                        scrub: true,
                    },
                    top: "19rem",
                    left: "4rem",
                });
                gsap.to(secondBox.current, {
                    scrollTrigger: {
                        trigger: box.current,
                        start: "top top",
                        scrub: true,
                    },
                    top: "19rem",
                    right: "8rem",
                });
                gsap.to(thirdBox.current, {
                    scrollTrigger: {
                        trigger: box.current,
                        start: "top top",
                        scrub: true,
                    },
                    right: "6rem",
                });
                gsap.to(fourthBox.current, {
                    scrollTrigger: {
                        trigger: box.current,
                        start: "top top",
                        scrub: true,
                    },
                    left: "25rem",
                    top: "70%",
                });
                gsap.to(fifthBox.current, {
                    scrollTrigger: {
                        trigger: box.current,
                        start: "top top",
                        scrub: true,
                    },
                    left: "66%",
                    top: "67%",
                });
            },
            box
        );

        return () => mm.revert();
    }, []);
    return (
        <main
            ref={box}
            className="md:h-[95vh] lg:h-[130vh] overflow-hidden mt-14 md:mt-20 lg:mt-5 px-2 md:px-5 lg:p-0"
        >
            <div className=" px-4 pt-80 pb-10 md:pt-52 md:pb-10 lg:py-0 h-full lg:h-full bg-[url('/home/pinkbg.png')] bg-center bg-cover flex justify-center items-center relative">
                <div
                    ref={firstBox}
                    className="hidden lg:block w-48 h-44 border absolute top-28 -left-28 bg-green-500 z-40"
                >
                    <Image
                        src="/home/tylerhome3.png"
                        alt="tyler-home-3"
                        width={300}
                        height={400}
                        className="w-full h-full"
                    />
                </div>
                <div
                    ref={secondBox}
                    className="hidden lg:block w-40 h-52 border absolute top-28 right-10 bg-yellow-100 z-40"
                >
                    <Image
                        src="/home/tylerhome2.png"
                        width={300}
                        height={400}
                        alt="tyler-home2"
                        className="w-full h-full"
                    />
                </div>
                <div
                    ref={thirdBox}
                    className="hidden lg:block w-36 h-40 border absolute bottom-24 right-10 bg-red-500 z-40"
                >
                    <Image
                        src="/home/tylerhome6.png"
                        alt="tyler-home-6"
                        width={300}
                        height={400}
                        className="w-full h-full"
                    />
                </div>
                <div className="hidden md:flex md:w-[95%] md:h-[80%] lg:w-[80%] lg:h-[80%] max-h-[705px] max-w-[897px] rounded-[50px] border-2 absolute md:bottom-16  lg:bottom-24 left-1/2 -translate-x-1/2  bg-white justify-center py-8">
                    <div className="flex flex-col gap-2 items-center self-end md:w-4/5 lg:w-[60%] font-medium">
                        <div className="text-[10px] flex items-center gap-2">
                            <p>Tyler Gregory Okonma</p>
                            <p>&#x25A0;</p>
                            <p>Founder</p>
                        </div>
                        <div className="text-xl md:text-4xl text-center">
                            &quot;These are actually clothing pieces. It&apos;s
                            a store. It&apos;s ran like a line. Don&apos;t call
                            it merch&quot;
                        </div>
                        <div className="text-sm border-b-2 border-transparent md:underline md:underline-offset-2 lg:hover:text-yellow-400 lg:hover:border-yellow-400 transition-all">
                            <Link href="/catalog/all">SHOP NOW</Link>
                        </div>
                    </div>
                </div>

                <div className="w-44 h-72 md:w-2/5 md:h-3/5 lg:w-[402px] lg:h-[567px] absolute top-4 left-1/2 -translate-x-1/2 bg-[url('/home/whiteandyellow.svg')] bg-center bg-contain bg-no-repeat">
                    <Image
                        src="/home/tylerhome1.png"
                        alt="tyler-home-1"
                        fill={true}
                        className="md:max-h-full md:max-w-full mt-4  overflow-visible"
                    />
                </div>

                <div
                    ref={fourthBox}
                    className="hidden lg:block w-48 h-44 border absolute top-[60%] -translate-y-1/2 left-64 -translate-x-1/2 bg-teal-600"
                >
                    <Image
                        src="/home/tylerhome4.png"
                        alt="tyler-home-4"
                        width={300}
                        height={400}
                        className="w-full h-full"
                    />
                </div>
                <div
                    ref={fifthBox}
                    className="hidden lg:block w-60 h-44 border absolute top-[55%] -translate-y-1/2 left-[70%] bg-pink-100"
                >
                    <Image
                        src="/home/tylerhome5.png"
                        alt="tyler-home-5"
                        width={300}
                        height={400}
                        className="w-full h-full"
                    />
                </div>
                <div className="md:hidden flex flex-col gap-2 items-center self-end font-medium">
                    <div className="text-[10px] flex items-center gap-2">
                        <p>Tyler Gregory Okonma</p>
                        <p>&#x25A0;</p>
                        <p>Founder</p>
                    </div>
                    <div className="text-xl leading-none text-center">
                        &quot;These are actually clothing pieces. It&apos;s a
                        store. It&apos;s ran like a line. Don&apos;t call it
                        merch&quot;
                    </div>
                    <div className="text-xs underline">
                        <Link href="/catalog/all">SHOP NOW</Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ThirdHero;
