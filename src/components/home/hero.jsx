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
    const frameOne = useRef();
    const frameTwo = useRef();
    const frameThree = useRef();

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: main.current,
                start: "top top",
                // end: "+=1500px",
                pin: true,
                scrub: 1,
            },
        });
        const ctx = gsap.context(() => {}, main);
        ctx.add(() => {
            gsap.to(text.current, {
                textShadow: "5px 20px yellow,10px 30px red",
                repeat: 2,
                yoyo: true,
                duration: 2,
            });
            gsap.to("img", {
                rotate: 720,
                duration: 5,
                ease: "ease-in",
                repeat: -1,
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
        });
        return () => ctx.revert();
    }, []);
    return (
        <main ref={main} className="h-screen overflow-hidden">
            <div className="h-screen rounded-b-3xl bg-blue-500 flex flex-col gap-40 ">
                <Navbar className={"mt-20"} />
                <div className="flex flex-col self-stretch text-center gap-28 relative">
                    <div className="relative ">
                        <div className="flex gap-[450px]">
                            <div className="flex flex-col items-start ml-60 text-sm self-end">
                                <span>More than merch</span>
                                <span>More than streetwear</span>
                            </div>
                            <Image
                                src="/home/rotate.svg"
                                width={130}
                                height={130}
                                alt="rotating-golf-wang"
                            />
                        </div>
                        <div
                            ref={text}
                            className="text-9xl font-black  relative"
                        >
                            <h1 className=" [transform:scale(1.7,1)]">
                                GOLF WANG
                            </h1>
                        </div>
                        <div
                            ref={frameOne}
                            className="border-2 bg-red-500 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 -rotate-12 w-52 h-60"
                        >
                            {/* <Image src="" width={200} height={250} alt="hello" /> */}
                        </div>
                        <div
                            ref={frameTwo}
                            className="border-2 bg-violet-500 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-52 h-60"
                        >
                            {/* <Image src="" width={200} height={250} alt="hello" /> */}
                        </div>
                        <div
                            ref={frameThree}
                            className="border-2 bg-green-500 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 rotate-6 w-52 h-60"
                        >
                            hello
                            {/* <Image src="" width={200} height={250} alt="hello" /> */}
                        </div>
                    </div>
                    <div className="border-b-2 border-black text-sm font-semibold self-center">
                        <Link href="/shop">SHOP</Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Hero;
