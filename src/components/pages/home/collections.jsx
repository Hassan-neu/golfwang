"use client";
import React, { useCallback, useRef, useState } from "react";
import Btn from "../../shared/buttons/btn";
import Link from "next/link";
import Image from "next/image";
import Checkbox from "@/components/shared/checkbox";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { gsap } from "gsap";
const Collections = () => {
    const collectionScroll = useRef();
    const [agreeStatus, setAgreeStatus] = useState(false);
    const [distance, setDistance] = useState(0);
    const imagesLeft = useRef();
    const handler = (e) => {
        Array.from(imagesLeft.current.children).map((child) =>
            child.dataset.name === e.target.dataset.name
                ? child.style.setProperty("opacity", 1)
                : child.style.setProperty("opacity", 0)
        );
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formJSON = Object.fromEntries(formData.entries());
        console.log(formJSON);
    };
    const collectionList = useCallback((node) => {
        if (node != null) {
            setDistance(node.scrollWidth / 12);
        }
    }, []);
    const carousel = (scroll) => {
        gsap.to(collectionScroll.current, {
            scrollTo: {
                x: collectionScroll.current.scrollLeft + scroll,
            },
        });
    };
    return (
        <div className="flex flex-col gap-3 lg:gap-6 px-2 md:px-5 lg:p-10 lg:min-h-[110vh] justify-center lg:border border-gray-400 rounded-3xl mt-14 lg:mt-5">
            <div className="flex justify-between">
                <div className="text-xl md:text-4xl font-medium">
                    <h2>COLLECTIONS</h2>
                </div>
                <Btn
                    className={"hidden md:block border"}
                    aria-label="Show More"
                >
                    <Link href={"/collections/w2022"}>SHOW MORE</Link>
                </Btn>
            </div>
            <div className="hidden overflow-hidden border-t lg:grid grid-cols-[1fr_minmax(200px,240px)_1fr] grid-rows-1 justify-center items-center py-2 h-3/5 relative">
                <div
                    className="[grid-column:2/3] h-full relative"
                    ref={imagesLeft}
                >
                    <div
                        className="flex flex-col gap-1 w-60 h-72 bg-white absolute top-1/2 -translate-y-1/2 left-0 opacity-1"
                        data-name="winter22"
                    >
                        <div className="relative h-[95%]">
                            <Image
                                src={"/winter/wmodel9.png"}
                                alt="winter-2022"
                                fill={true}
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <p className="text-sm self-center text-neutral-800">
                            F/W 2022 collection
                        </p>
                    </div>
                    <div
                        className="flex flex-col gap-1 w-60 h-72 bg-white absolute top-1/2 -translate-y-1/2 left-0 opacity-0"
                        data-name="autumn22"
                    >
                        <div className="relative h-[95%]">
                            <Image
                                src={"/autumn/autmodel9.png"}
                                alt="autumn-2022"
                                fill={true}
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <p className="text-sm self-center text-neutral-800">
                            Autumn 2022 collection
                        </p>
                    </div>
                    <div
                        className="flex flex-col gap-1 w-60 h-72 bg-white absolute top-1/2 -translate-y-1/2 left-0 opacity-0"
                        data-name="summ22"
                    >
                        <div className="relative h-[95%]">
                            <Image
                                src={"/summer/summodel9.png"}
                                alt="summer-2022"
                                fill={true}
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <p className="text-sm self-center text-neutral-800">
                            Summer 2022 collection
                        </p>
                    </div>
                    <div
                        className="flex flex-col gap-1 w-60 h-72 bg-white absolute top-1/2 -translate-y-1/2 left-0 opacity-0"
                        data-name="winter21"
                    >
                        <div className="relative h-[95%]">
                            <Image
                                src={"/winter/wmodel21.png"}
                                alt="winter-2021"
                                fill={true}
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <p className="text-sm self-center text-neutral-800">
                            Winter 2021 collection
                        </p>
                    </div>
                    <div
                        className="flex flex-col gap-1 w-60 h-72 bg-white absolute top-1/2 -translate-y-1/2 left-0 opacity-0"
                        data-name="summ21"
                    >
                        <div className="relative h-[95%]">
                            <Image
                                src={"/summer/summodel21.png"}
                                alt="summer-2021"
                                fill={true}
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <p className="text-sm self-center text-neutral-800">
                            Summer 2021 collection
                        </p>
                    </div>
                    <div
                        className="flex flex-col gap-1 w-60 h-72 bg-white absolute top-1/2 -translate-y-1/2 left-0 opacity-0"
                        data-name="spring21"
                    >
                        <div className="relative h-[95%]">
                            <Image
                                src={"/summer/springmodel21.png"}
                                alt="spring-2021"
                                fill={true}
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <p className="text-sm self-center text-neutral-800">
                            Spring 2021 collection
                        </p>
                    </div>
                    <div
                        className="flex flex-col gap-1 w-60 h-72 bg-white absolute top-1/2 -translate-y-1/2 left-0 opacity-0"
                        data-name="winter20"
                    >
                        <div className="relative h-[95%]">
                            <Image
                                src={"/winter/wmodel20.png"}
                                alt="winter-2020"
                                fill={true}
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <p className="text-sm self-center text-neutral-800">
                            Winter 2020 collection
                        </p>
                    </div>
                    <div
                        className="flex flex-col gap-1 w-60 h-72 bg-white absolute top-1/2 -translate-y-1/2 left-0 opacity-0"
                        data-name="summ20"
                    >
                        <div className="relative h-[95%]">
                            <Image
                                src={"/summer/summodel20.png"}
                                alt="summer-2020"
                                fill={true}
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <p className="text-sm self-center text-neutral-800">
                            Summer 2020 collection
                        </p>
                    </div>
                    <div
                        className="flex flex-col gap-1 w-60 h-72 bg-white absolute top-1/2 -translate-y-1/2 left-0 opacity-0"
                        data-name="autumn20"
                    >
                        <div className="relative h-[95%]">
                            <Image
                                src={"/autumn/autmodel20.png"}
                                alt="autumn-2020"
                                fill={true}
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <p className="text-sm self-center text-neutral-800">
                            S/Autumn 2020 collection
                        </p>
                    </div>
                    <div
                        className="flex flex-col gap-1 w-60 h-72 bg-white absolute top-1/2 -translate-y-1/2 left-0 opacity-0"
                        data-name="winter19"
                    >
                        <div className="relative h-[95%]">
                            <Image
                                src={"/winter/wmodel19.png"}
                                alt="winter-19"
                                fill={true}
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <p className="text-sm self-center text-neutral-800">
                            Winter 2019 collection
                        </p>
                    </div>
                    <div
                        className="flex flex-col gap-1 w-60 h-72 bg-white absolute top-1/2 -translate-y-1/2 left-0 opacity-0"
                        data-name="winter17"
                    >
                        <div className="relative h-[95%]">
                            <Image
                                src={"/winter/wmodel17.png"}
                                alt="winter-2017"
                                fill={true}
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <p className="text-sm self-center text-neutral-800">
                            Winter 2017 collection
                        </p>
                    </div>
                    <div
                        className="flex flex-col gap-1 w-60 h-72 bg-white absolute top-1/2 -translate-y-1/2 left-0"
                        data-name="summ17"
                    >
                        <div className="relative h-[95%]">
                            <Image
                                src={"/summer/summodel17.png"}
                                alt="summer-2017"
                                fill={true}
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <p className="text-sm self-center text-neutral-800">
                            Summer 2017 collection
                        </p>
                    </div>
                </div>

                <div className="-rotate-90 flex flex-col items-center gap-1 h-min leading-8 [grid-column:1/2] [grid-row:1/2] cursor-pointer [font-size:max(1.5em,_1em_+_1.5cqi)] font-light text-gray-400">
                    <div className="hover:text-black">
                        <p data-name="winter22" onMouseOver={handler}>
                            W2022
                        </p>
                    </div>
                    <div className="hover:text-black" data-name="autumn22">
                        <p data-name="autumn22" onMouseOver={handler}>
                            AUT2022
                        </p>
                    </div>
                    <div className="hover:text-black" data-name="summ22">
                        <p data-name="summ22" onMouseOver={handler}>
                            SUMM2022
                        </p>
                    </div>
                    <div className="hover:text-black" data-name="winter21">
                        <p data-name="winter21" onMouseOver={handler}>
                            WINTER 2021
                        </p>
                    </div>
                    <div className="hover:text-black" data-name="summ21">
                        <p data-name="summ21" onMouseOver={handler}>
                            SUMM 2021
                        </p>
                    </div>
                    <div className="hover:text-black" data-name="spring21">
                        <p data-name="spring21" onMouseOver={handler}>
                            SPR 2021
                        </p>
                    </div>
                    <div className="hover:text-black" data-name="winter20">
                        <p data-name="winter20" onMouseOver={handler}>
                            W2020
                        </p>
                    </div>
                    <div className="hover:text-black" data-name="summ20">
                        <p data-name="summ20" onMouseOver={handler}>
                            SUM2020
                        </p>
                    </div>
                    <div className="hover:text-black" data-name="autumn20">
                        <p data-name="autumn20" onMouseOver={handler}>
                            S/AUT2020
                        </p>
                    </div>
                    <div className="hover:text-black" data-name="winter19">
                        <p data-name="winter19" onMouseOver={handler}>
                            WINTER 2019
                        </p>
                    </div>
                    <div className="hover:text-black" data-name="winter17">
                        <p data-name="winter17" onMouseOver={handler}>
                            WINTR 2017
                        </p>
                    </div>
                </div>
                {/* break here */}
                <div className="-rotate-90 flex flex-col items-center gap-1 h-min [grid-column:3/-1] leading-8 cursor-pointer [font-size:max(1.5em,_1em_+_1.5cqi)] font-light text-gray-400">
                    <div className="hover:text-black  ">
                        <p data-name="summ17" onMouseOver={handler}>
                            SUM2017
                        </p>
                    </div>
                    <div className="hover:text-black  ">
                        <p data-name="winter22" onMouseOver={handler}>
                            W2022
                        </p>
                    </div>
                    <div className="hover:text-black  ">
                        <p data-name="autumn22" onMouseOver={handler}>
                            AUT2022
                        </p>
                    </div>
                    <div className="hover:text-black  ">
                        <p data-name="summ22" onMouseOver={handler}>
                            SUMM2022
                        </p>
                    </div>
                    <div className="hover:text-black  ">
                        <p data-name="winter21" onMouseOver={handler}>
                            WINTER 2021
                        </p>
                    </div>
                    <div className="hover:text-black  ">
                        <p data-name="summ21" onMouseOver={handler}>
                            SUMM 2021
                        </p>
                    </div>
                    <div className="hover:text-black  ">
                        <p data-name="spring21" onMouseOver={handler}>
                            SPR 2021
                        </p>
                    </div>
                    <div className="hover:text-black  ">
                        <p data-name="winter20" onMouseOver={handler}>
                            W2020
                        </p>
                    </div>
                    <div className="hover:text-black  ">
                        <p data-name="summ20" onMouseOver={handler}>
                            SUM2020
                        </p>
                    </div>
                    <div className="hover:text-black  ">
                        <p data-name="autumn20" onMouseOver={handler}>
                            S/AUT2020
                        </p>
                    </div>
                    <div className="hover:text-black">
                        <p data-name="winter19" onMouseOver={handler}>
                            WINTER 2019
                        </p>
                    </div>
                </div>
            </div>
            <div ref={collectionScroll} className="overflow-hidden hidescroll">
                <div
                    ref={collectionList}
                    className="flex gap-3 lg:hidden hidescroll"
                >
                    <div className="w-64 h-80 md:w-2/5 md:h-96  gap-1  shrink-0  flex flex-col">
                        <div className="relative h-[95%]">
                            <Image
                                src={"/winter/wmodel9.png"}
                                alt="fall/winter-2022"
                                fill={true}
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <p className="text-xs md:text-sm uppercase md:self-center">
                            Fall/Winter 2022
                        </p>
                    </div>
                    <div className="w-64 h-80 md:w-2/5 md:h-96  gap-1 shrink-0  flex flex-col">
                        <div className="relative h-[95%]">
                            <Image
                                src={"/autumn/autmodel9.png"}
                                alt="autumn-2022"
                                fill={true}
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <p className="text-xs md:text-sm uppercase md:self-center">
                            Autumn 2022
                        </p>
                    </div>
                    <div className="w-64 h-80 md:w-2/5 md:h-96  gap-1 shrink-0  flex flex-col ">
                        <div className="relative h-[95%]">
                            <Image
                                src={"/summer/summodel9.png"}
                                alt="summer-2022"
                                fill={true}
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <p className="text-xs md:text-sm uppercase md:self-center">
                            Summer 2022
                        </p>
                    </div>
                    <div className="w-64 h-80 md:w-2/5 md:h-96  gap-1 shrink-0  flex flex-col">
                        <div className="relative h-[95%]">
                            <Image
                                src={"/winter/wmodel21.png"}
                                alt="winter-2021"
                                fill={true}
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <p className="text-xs md:text-sm uppercase md:self-center">
                            Winter 2021
                        </p>
                    </div>
                    <div className="w-64 h-80 md:w-2/5 md:h-96 gap-1 shrink-0  flex flex-col">
                        <div className="relative h-[95%]">
                            <Image
                                src={"/summer/summodel21.png"}
                                alt="summer-2021"
                                fill={true}
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <p className="text-xs md:text-sm uppercase md:self-center">
                            Summer 2021
                        </p>
                    </div>
                    <div className="w-64 h-80 md:w-2/5 md:h-96  gap-1 shrink-0  flex flex-col">
                        <div className="relative h-[95%]">
                            <Image
                                src={"/summer/springmodel21.png"}
                                alt="spring-2022"
                                fill={true}
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <p className="text-xs md:text-sm uppercase md:self-center">
                            Spring 2021
                        </p>
                    </div>
                    <div className="w-64 h-80 md:w-2/5 md:h-96  gap-1 shrink-0  flex flex-col">
                        <div className="relative h-[95%]">
                            <Image
                                src={"/winter/wmodel20.png"}
                                alt="winter-2020"
                                fill={true}
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <p className="text-xs md:text-sm uppercase md:self-center">
                            Winter 2020
                        </p>
                    </div>
                    <div className="w-64 h-80 md:w-2/5 md:h-96  gap-1 shrink-0  flex flex-col">
                        <div className="relative h-[95%]">
                            <Image
                                src={"/summer/summodel20.png"}
                                alt="summer-2020"
                                fill={true}
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <p className="text-xs md:text-sm uppercase md:self-center">
                            Summer 2020
                        </p>
                    </div>
                    <div className="w-64 h-80 md:w-2/5 md:h-96  gap-1 shrink-0  flex flex-col">
                        <div className="relative h-[95%]">
                            <Image
                                src={"/autumn/autmodel20.png"}
                                alt="autumn-2020"
                                fill={true}
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <p className="text-xs md:text-sm uppercase md:self-center">
                            Summer/Aut 2020
                        </p>
                    </div>
                    <div className="w-64 h-80 md:w-2/5 md:h-96  gap-1 shrink-0  flex flex-col">
                        <div className="relative h-[95%]">
                            <Image
                                src={"/winter/wmodel19.png"}
                                alt="winter-2019"
                                fill={true}
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <p className="text-xs md:text-sm uppercase md:self-center">
                            winter 2019
                        </p>
                    </div>
                    <div className="w-64 h-80 md:w-2/5 md:h-96  gap-1 shrink-0  flex flex-col">
                        <div className="relative h-[95%]">
                            <Image
                                src={"/winter/wmodel17.png"}
                                alt="winter-2017"
                                fill={true}
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <p className="text-xs md:text-sm uppercase md:self-center">
                            winter 2017
                        </p>
                    </div>
                    <div className="w-64 h-80 md:w-2/5 md:h-96  gap-1 shrink-0  flex flex-col">
                        <div className="relative h-[95%]">
                            <Image
                                src={"/summer/summodel17.png"}
                                alt="summer-2017"
                                fill={true}
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <p className="text-xs md:text-sm uppercase md:self-center">
                            summer 2017
                        </p>
                    </div>
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
            <Btn className={"py-4 bg-black text-xs text-white md:hidden"}>
                <Link href={"/collections/w2022"}>SHOW MORE</Link>
            </Btn>
            <div className="flex md:justify-center md:mt-auto md:items-center bg-[url('/home/yellow.png')] bg-cover bg-center lg:rounded-[30px] px-3 py-10 border-2 lg:border-black">
                <div className="flex flex-col gap-3 lg:gap-4 w-full md:w-3/4 lg:w-2/5 lg:items-start">
                    <div className="flex flex-col gap-1 items-center">
                        <h2 className="text-xl font-medium md:text-4xl lg:font-medium">
                            SUBSCRIBE TO NEWSLETTER
                        </h2>
                        <p className="text-gray-400 text-[10px] md:text-sm">
                            to receive notifications about new collections, news
                            and special offers
                        </p>
                    </div>
                    <form
                        className="flex flex-col md:flex-row gap-4 md:gap-2 w-full"
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="E-mail"
                            className="border border-black focus:outline-none px-4 py-3 lg:py-2 w-full placeholder:text-sm"
                        />
                        <Btn
                            className="bg-black px-4 py-4  lg:py-2 text-white text-xs"
                            disabled={!agreeStatus}
                            aria-label="Subscribe to Newsletter"
                        >
                            SUBSCRIBE
                        </Btn>
                    </form>
                    <Checkbox
                        name="agreement"
                        checked={agreeStatus}
                        aria-label="Policy Agreement"
                        onChange={() => setAgreeStatus(!agreeStatus)}
                    >
                        <p className="text-xs">
                            I agree to{" "}
                            <Link href="" className="underline">
                                {" "}
                                personal data protection policy
                            </Link>
                        </p>
                    </Checkbox>
                </div>
            </div>
        </div>
    );
};

export default Collections;
