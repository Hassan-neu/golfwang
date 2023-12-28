"use client";
import React, { useCallback, useRef, useState } from "react";
import Btn from "../../shared/buttons/btn";
import Link from "next/link";
import CatalogItem from "./catalog/catalogItem";
import Image from "next/image";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
const Catalog = () => {
    const catalogScroll = useRef();
    const [distance, setDistance] = useState(0);
    const catalogList = useCallback((node) => {
        if (node != null) {
            setDistance(node.scrollWidth / 5);
        }
    }, []);
    const carousel = (scroll) => {
        gsap.to(catalogScroll.current, {
            scrollTo: {
                x: catalogScroll.current.scrollLeft + scroll,
            },
        });
    };
    return (
        <div className="flex flex-col gap-4 px-2 md:px-5 lg:px-10 lg:h-screen justify-start lg:justify-center lg:border-t lg:border-gray-400 rounded-3xl mt-14 md:mt-20 lg:mt-5">
            <div className="flex justify-between">
                <div className="text-xl md:text-4xl font-medium">
                    <h2>CATALOG</h2>
                </div>
                <Btn className={"hidden border md:block"} aria-label="Shop Now">
                    <Link href={"/catalog/all"}>SHOP NOW</Link>
                </Btn>
            </div>
            <div ref={catalogScroll} className="overflow-hidden hidescroll">
                <div
                    ref={catalogList}
                    className="flex gap-2 lg:overflow-hidden md:[&>a]:h-96 [&>a]:h-96 lg:[&>a:nth-child(4n+1)]:h-[430px] lg:[&>a:nth-child(2n+2)]:h-96 lg:[&>a:nth-child(3)]:h-[480px] [&>a]:w-72 md:[&>a]:w-2/5 [&>a]:shrink-0 lg:[&>a]:shrink items-start hidescroll "
                >
                    <Link href={"/catalog/tops"}>
                        <CatalogItem item={"Tops"}>
                            <Image
                                src={"/home/tops.png"}
                                fill={true}
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                alt="tops"
                                className="lg:hover:scale-110 [transition:transform_.5s_ease-in]"
                            />
                        </CatalogItem>
                    </Link>
                    <Link href={"/catalog/hats"}>
                        <CatalogItem item={"Hat"}>
                            <Image
                                src={"/home/hats.png"}
                                fill={true}
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                alt="hat"
                                className="lg:hover:scale-110 [transition:transform_.5s_ease-in]"
                            />
                        </CatalogItem>
                    </Link>
                    <Link href={"/catalog/bottoms"}>
                        <CatalogItem item={"Bottoms"}>
                            <Image
                                src={"/home/bottoms.png"}
                                fill={true}
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                alt="bottoms"
                                className="lg:hover:scale-110 [transition:transform_.5s_ease-in]"
                            />
                        </CatalogItem>
                    </Link>
                    <Link href={"/accessories"}>
                        <CatalogItem item={"Accessories"}>
                            <Image
                                src={"/home/accessories.png"}
                                fill={true}
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                alt="accessories"
                                className="lg:hover:scale-110 [transition:transform_.5s_ease-in]"
                            />
                        </CatalogItem>
                    </Link>
                    <Link href={"/catalog/music"}>
                        <CatalogItem item={"Music"}>
                            <Image
                                src={"/home/music.png"}
                                fill={true}
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                alt="music"
                                className="lg:hover:scale-110 [transition:transform_.5s_ease-in]"
                            />
                        </CatalogItem>
                    </Link>
                </div>
            </div>

            <div className="flex lg:hidden justify-between gap-1">
                <Btn
                    className="rounded-full w-10 h-10 border flex items-center justify-center disabled:text-[rgb(229,_231,_235)] text-gray-500"
                    aria-label="Scroll left"
                    onClick={() => carousel(-distance)}
                >
                    <IoArrowBack />
                </Btn>
                <Btn
                    className="rounded-full w-10 h-10 border flex items-center justify-center disabled:text-[rgb(229,_231,_235)] text-gray-500"
                    aria-label="Scroll right"
                    onClick={() => carousel(distance)}
                >
                    <IoArrowForward />
                </Btn>
            </div>
            <Btn
                className={
                    "py-4 self-stretch text-xs bg-black text-white md:hidden"
                }
            >
                <Link href={"/catalog/all"}>SHOP NOW</Link>
            </Btn>
        </div>
    );
};

export default Catalog;
