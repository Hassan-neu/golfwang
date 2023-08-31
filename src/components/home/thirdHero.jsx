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
            "(min-width:768px)",
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
            className="h-[65vh] md:h-[130vh] overflow-hidden mt-14 md:mt-5 px-2 md:p-0"
        >
            <div className="py-10 md:py-0 h-full md:h-full bg-[url('/home/pinkbg.png')] bg-center bg-cover flex justify-center items-center relative">
                <div
                    ref={firstBox}
                    className="hidden md:block w-48 h-44 border absolute top-28 -left-28 bg-green-500 z-40"
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
                    className="hidden md:block w-40 h-52 border absolute top-28 right-10 bg-yellow-100 z-40"
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
                    className="hidden md:block w-36 h-40 border absolute bottom-24 right-10 bg-red-500 z-40"
                >
                    <Image
                        src="/home/tylerhome6.png"
                        alt="tyler-home-6"
                        width={300}
                        height={400}
                        className="w-full h-full"
                    />
                </div>
                <div className="hidden md:flex w-[60%] h-[78%] max-h-[705px] max-w-[897px] rounded-[50px] border-2  absolute bottom-24 left-1/2 -translate-x-1/2  bg-white justify-center py-8">
                    <div className="flex flex-col gap-2 items-center self-end w-[60%] font-medium">
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
                        <div className="text-sm border-b-2 border-transparent md:hover:text-yellow-400 md:hover:border-yellow-400 transition-all">
                            <Link href="/catalog/all">SHOP NOW</Link>
                        </div>
                    </div>
                </div>

                <div className="w-44 h-72 md:w-[402px] md:h-[567px] absolute top-10 left-1/2 -translate-x-1/2 bg-[url('/home/whiteandyellow.svg')] bg-contain bg-no-repeat">
                    <Image
                        src="/home/tylerhome1.png"
                        alt="tyler-home-1"
                        width={402}
                        height={548}
                        className="object-cover overflow-visible"
                    />
                </div>

                <div
                    ref={fourthBox}
                    className="hidden md:block w-48 h-44 border absolute top-[60%] -translate-y-1/2 left-64 -translate-x-1/2 bg-teal-600"
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
                    className="hidden md:block w-60 h-44 border absolute top-[55%] -translate-y-1/2 left-[70%] bg-pink-100"
                >
                    <Image
                        src="/home/tylerhome5.png"
                        alt="tyler-home-5"
                        width={300}
                        height={400}
                        className="w-full h-full"
                    />
                </div>
                <div className="md:hidden flex flex-col gap-1 items-center self-end w-[80%] font-medium">
                    <div className="text-[10px] flex items-center gap-2">
                        <p>Tyler Gregory Okonma</p>
                        <p>&#x25A0;</p>
                        <p>Founder</p>
                    </div>
                    <div className="text-xl text-center">
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
