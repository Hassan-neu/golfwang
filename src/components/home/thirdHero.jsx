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
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: box.current,
                start: "top top",
                end: "+=1500px",
                pin: true,
                scrub: 1,
            },
        });
        const ctx = gsap.context(() => {}, box);
        ctx.add(() => {
            tl.fromTo(
                firstBox.current,
                {
                    left: "-100vw",
                    top: "-100vh",
                    opacity: 0,
                },
                {
                    top: 160,
                    left: 40,
                    opacity: 1,
                }
            );
            tl.fromTo(
                secondBox.current,
                {
                    right: 40,
                    top: 112,
                },
                {
                    top: 150,
                    right: 70,
                }
            );
            tl.fromTo(
                thirdBox.current,
                {
                    right: "-50vw",
                    bottom: "-50vh",
                    opacity: 0,
                },
                {
                    bottom: 96,
                    right: 40,
                    opacity: 1,
                }
            );
            tl.fromTo(
                fourthBox.current,
                {
                    left: "-50vw",
                    top: "100vh",
                    opacity: 0,
                },
                {
                    left: "30%",
                    xPercent: -50,
                    top: "60%",
                    yPercent: -50,
                    opacity: 1,
                }
            );
            tl.fromTo(
                fifthBox.current,
                {
                    left: "100vw",
                    top: "55%",
                    opacity: 0,
                },
                {
                    left: "70%",
                    xPercent: -50,
                    top: "53%",
                    yPercent: -50,
                    opacity: 1,
                }
            );
        });
        return () => ctx.revert();
    }, []);
    return (
        <main ref={box} className="h-screen overflow-hidden mt-5">
            <div className="h-screen bg-[url('/home/pinkbg.png')] bg-cover flex justify-center items-center relative">
                <div
                    ref={firstBox}
                    className="w-36 h-36 border absolute top-40 left-10 bg-green-500 z-40"
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
                    className="w-24 h-36 border absolute top-28 right-10 bg-yellow-100 z-40"
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
                    className="w-24 h-24 border absolute bottom-24 right-10 bg-red-500 z-40"
                >
                    <Image
                        src="/home/tylerhome6.png"
                        alt="tyler-home-6"
                        width={300}
                        height={400}
                        className="w-full h-full"
                    />
                </div>
                <div className="w-[600px] h-[450px] rounded-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white flex flex-col justify-end py-8">
                    <div className="flex flex-col gap-2 items-center self-center w-2/3 font-semibold">
                        <div className="text-xl text-center">
                            &quot;These are actually clothing pieces. It&apos;s
                            a store. It&apos;s ran like a line. Don&apos;t call
                            it merch&quot;
                        </div>
                        <div className="text-xs border-b-2 border-transparent hover:border-black transition-all">
                            <Link href="/catalog/all">SHOP NOW</Link>
                        </div>
                    </div>
                </div>
                <div className="w-44 h-80 border absolute top-[35%] -translate-y-1/2  self-center bg-yellow-400 shadow-[-15px_15px_green]">
                    <Image
                        src="/home/tylerhome1.png"
                        alt="tyler-home-1"
                        width={300}
                        height={400}
                        className="w-full h-full"
                    />
                </div>

                <div
                    ref={fourthBox}
                    className="w-28 h-28 border absolute top-[60%] -translate-y-1/2 left-[30%] -translate-x-1/2 bg-teal-600"
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
                    className="w-40 h-28 border absolute top-[53%] -translate-y-1/2 left-[70%] -translate-x-1/2 bg-pink-100"
                >
                    <Image
                        src="/home/tylerhome5.png"
                        alt="tyler-home-5"
                        width={300}
                        height={400}
                        className="w-full h-full"
                    />
                </div>
            </div>
        </main>
    );
};

export default ThirdHero;
