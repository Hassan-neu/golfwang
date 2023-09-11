"use client";
import React from "react";
import Btn from "../../shared/buttons/btn";
import Link from "next/link";
import Image from "next/image";
import Checkbox from "@/components/shared/checkbox";

const Collections = () => {
    return (
        <div className="flex flex-col gap-3 lg:gap-6 px-2 md:px-5 lg:p-10 lg:h-[110vh] justify-center lg:border border-gray-400 rounded-3xl mt-14 lg:mt-5">
            <div className="flex justify-between">
                <div className="text-xl md:text-4xl font-medium">
                    <h2>COLLECTIONS</h2>
                </div>
                <Btn className={"hidden md:block"}>
                    <Link href={"/collections"}>SHOW MORE</Link>
                </Btn>
            </div>
            <div className="hidden overflow-hidden border-t lg:flex justify-center items-center gap-[32rem] py-2 h-3/5 relative">
                <div className="-rotate-90 flex flex-col items-center gap-1 h-min">
                    <div className="text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            W2022
                        </p>
                        <div className="flex flex-col gap-1 w-60 h-72 bg-white absolute top-full -translate-y-[6%] left-1/2 -translate-x-1/2 opacity- rotate-90">
                            <div className="relative h-[95%]">
                                <Image
                                    src={"/winter/wmodel9.png"}
                                    alt="winter-2022"
                                    fill={true}
                                />
                            </div>
                            <p className="text-sm self-center text-neutral-800">
                                F/W 2022 collection
                            </p>
                        </div>
                    </div>
                    <div className="text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            AUT2022
                        </p>
                        <div className="flex flex-col gap-1 w-60 h-72 bg-white absolute top-full -translate-y-[6%] left-1/2 -translate-x-1/2 opacity-0 rotate-90">
                            <div className="relative h-[95%]">
                                <Image
                                    src={"/autumn/autmodel9.png"}
                                    alt="autumn-2022"
                                    fill={true}
                                />
                            </div>
                            <p className="text-sm self-center text-neutral-800">
                                Autumn 2022 collection
                            </p>
                        </div>
                    </div>
                    <div className=" text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            SUMM2022
                        </p>
                        <div className="flex flex-col gap-1 w-60 h-72 bg-white absolute top-full -translate-y-[6%] left-1/2 -translate-x-1/2 opacity-0 rotate-90">
                            <div className="relative h-[95%]">
                                <Image
                                    src={"/summer/summodel9.png"}
                                    alt="summer-2022"
                                    fill={true}
                                />
                            </div>
                            <p className="text-sm self-center text-neutral-800">
                                Summer 2022 collection
                            </p>
                        </div>
                    </div>
                    <div className=" text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            WINTER 2021
                        </p>
                        <div className="flex flex-col gap-1 w-60 h-72 bg-white absolute top-full -translate-y-[6%] left-1/2 -translate-x-1/2 opacity-0 rotate-90">
                            <div className="relative h-[95%]">
                                <Image
                                    src={"/winter/wmodel21.png"}
                                    alt="winter-2021"
                                    fill={true}
                                />
                            </div>
                            <p className="text-sm self-center text-neutral-800">
                                Winter 2021 collection
                            </p>
                        </div>
                    </div>
                    <div className=" text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            SUMM 2021
                        </p>
                        <div className="flex flex-col gap-1 w-60 h-72 bg-white absolute top-full -translate-y-[6%] left-1/2 -translate-x-1/2 opacity-0 rotate-90">
                            <div className="relative h-[95%]">
                                <Image
                                    src={"/summer/summodel21.png"}
                                    alt="summer-2021"
                                    fill={true}
                                />
                            </div>
                            <p className="text-sm self-center text-neutral-800">
                                Summer 2021 collection
                            </p>
                        </div>
                    </div>
                    <div className=" text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            SPR 2021
                        </p>
                        <div className="flex flex-col gap-1 w-60 h-72 bg-white absolute top-full -translate-y-[6%] left-1/2 -translate-x-1/2 opacity-0 rotate-90">
                            <div className="relative h-[95%]">
                                <Image
                                    src={"/summer/springmodel21.png"}
                                    alt="spring-2021"
                                    fill={true}
                                />
                            </div>
                            <p className="text-sm self-center text-neutral-800">
                                Spring 2021 collection
                            </p>
                        </div>
                    </div>
                    <div className=" text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            W2020
                        </p>
                        <div className="flex flex-col gap-1 w-60 h-72 bg-white absolute top-full -translate-y-[6%] left-1/2 -translate-x-1/2 opacity-0 rotate-90">
                            <div className="relative h-[95%]">
                                <Image
                                    src={"/winter/wmodel20.png"}
                                    alt="winter-2020"
                                    fill={true}
                                />
                            </div>
                            <p className="text-sm self-center text-neutral-800">
                                Winter 2020 collection
                            </p>
                        </div>
                    </div>
                    <div className=" text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            SUM2020
                        </p>
                        <div className="flex flex-col gap-1 w-60 h-72 bg-white absolute top-full -translate-y-[6%] left-1/2 -translate-x-1/2 opacity-0 rotate-90">
                            <div className="relative h-[95%]">
                                <Image
                                    src={"/summer/summodel20.png"}
                                    alt="summer-2020"
                                    fill={true}
                                />
                            </div>
                            <p className="text-sm self-center text-neutral-800">
                                Summer 2020 collection
                            </p>
                        </div>
                    </div>
                    <div className=" text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            S/AUT2020
                        </p>
                        <div className="flex flex-col gap-1 w-60 h-72 bg-white absolute top-full -translate-y-[6%] left-1/2 -translate-x-1/2 opacity-0 rotate-90">
                            <div className="relative h-[95%]">
                                <Image
                                    src={"/autumn/autmodel20.png"}
                                    alt="autumn-2020"
                                    fill={true}
                                />
                            </div>
                            <p className="text-sm self-center text-neutral-800">
                                S/Autumn 2020 collection
                            </p>
                        </div>
                    </div>
                    <div className=" text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            WINTER 2019
                        </p>
                        <div className="flex flex-col gap-1 w-60 h-72 bg-white absolute top-full -translate-y-[6%] left-1/2 -translate-x-1/2 opacity-0 rotate-90">
                            <div className="relative h-[95%]">
                                <Image
                                    src={"/winter/wmodel19.png"}
                                    alt="winter-19"
                                    fill={true}
                                />
                            </div>
                            <p className="text-sm self-center text-neutral-800">
                                Winter 2019 collection
                            </p>
                        </div>
                    </div>
                    <div className=" text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            WINTR 2017
                        </p>
                        <div className="flex flex-col gap-1 w-60 h-72 bg-white absolute top-full -translate-y-[6%] left-1/2 -translate-x-1/2 opacity-0 rotate-90">
                            <div className="relative h-[95%]">
                                <Image
                                    src={"/winter/wmodel17.png"}
                                    alt="winter-2017"
                                    fill={true}
                                />
                            </div>
                            <p className="text-sm self-center text-neutral-800">
                                Winter 2017 collection
                            </p>
                        </div>
                    </div>
                </div>
                {/* break here */}
                <div className="-rotate-90 flex flex-col items-center gap-1 h-min">
                    <div className=" text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            SUM2017
                        </p>
                        <div className="flex flex-col gap-1 w-60 h-72 bg-white absolute -top-[9px] -translate-y-[90%] left-1/2 -translate-x-1/2 opacity-0 rotate-90">
                            <div className="relative h-[95%]">
                                <Image
                                    src={"/summer/summodel17.png"}
                                    alt="summer-2017"
                                    fill={true}
                                />
                            </div>
                            <p className="text-sm self-center text-neutral-800">
                                Summer 2017 collection
                            </p>
                        </div>
                    </div>
                    <div className=" text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            W2022
                        </p>
                        <div className="flex flex-col gap-1 w-60 h-72 bg-white absolute -top-[9px] -translate-y-[90%] left-1/2 -translate-x-1/2 opacity-0 rotate-90">
                            <div className="relative h-[95%]">
                                <Image
                                    src={"/winter/wmodel9.png"}
                                    alt="winter-2022"
                                    fill={true}
                                />
                            </div>
                            <p className="text-sm self-center text-neutral-800">
                                F/W 2022 collection
                            </p>
                        </div>
                    </div>
                    <div className=" text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            AUT2022
                        </p>
                        <div className="flex flex-col gap-1 w-60 h-72 bg-white absolute -top-[9px] -translate-y-[90%] left-1/2 -translate-x-1/2 opacity-0 rotate-90">
                            <div className="relative h-[95%]">
                                <Image
                                    src={"/autumn/autmodel9.png"}
                                    alt="autumn-2022"
                                    fill={true}
                                />
                            </div>
                            <p className="text-sm self-center text-neutral-800">
                                Autumn 2022 collection
                            </p>
                        </div>
                    </div>
                    <div className=" text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            SUMM2022
                        </p>
                        <div className="flex flex-col gap-1 w-60 h-72 bg-white absolute -top-[9px] -translate-y-[90%] left-1/2 -translate-x-1/2 opacity-0 rotate-90">
                            <div className="relative h-[95%]">
                                <Image
                                    src={"/summer/summodel9.png"}
                                    alt="summer-2022"
                                    fill={true}
                                />
                            </div>
                            <p className="text-sm self-center text-neutral-800">
                                Summer 2022
                            </p>
                        </div>
                    </div>
                    <div className=" text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            WINTER 2021
                        </p>
                        <div className="flex flex-col gap-1 w-60 h-72 bg-white absolute -top-[9px] -translate-y-[90%] left-1/2 -translate-x-1/2 opacity-0 rotate-90">
                            <div className="relative h-[95%]">
                                <Image
                                    src={"/winter/wmodel21.png"}
                                    alt="winter-2021"
                                    fill={true}
                                />
                            </div>
                            <p className="text-sm self-center text-neutral-800">
                                Winter 2021 collection
                            </p>
                        </div>
                    </div>
                    <div className=" text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            SUMM 2021
                        </p>
                        <div className="flex flex-col gap-1 w-60 h-72 bg-white absolute -top-[9px] -translate-y-[90%] left-1/2 -translate-x-1/2 opacity-0 rotate-90">
                            <div className="relative h-[95%]">
                                <Image
                                    src={"/summer/summodel21.png"}
                                    alt="summer-2021"
                                    fill={true}
                                />
                            </div>
                            <p className="text-sm self-center text-neutral-800">
                                Summer 2021 collection
                            </p>
                        </div>
                    </div>
                    <div className=" text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            SPR 2021
                        </p>
                        <div className="flex flex-col gap-1 w-60 h-72 bg-white absolute -top-[9px] -translate-y-[90%] left-1/2 -translate-x-1/2 opacity-0 rotate-90">
                            <div className="relative h-[95%]">
                                <Image
                                    src={"/summer/springmodel21.png"}
                                    alt="spring-2021"
                                    fill={true}
                                />
                            </div>
                            <p className="text-sm self-center text-neutral-800">
                                Spring 2021 collection
                            </p>
                        </div>
                    </div>
                    <div className=" text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            W2020
                        </p>
                        <div className="flex flex-col gap-1 w-60 h-72 bg-white absolute -top-[9px] -translate-y-[90%] left-1/2 -translate-x-1/2 opacity-0 rotate-90">
                            <div className="relative h-[95%]">
                                <Image
                                    src={"/winter/wmodel20.png"}
                                    alt="winter-2020"
                                    fill={true}
                                />
                            </div>
                            <p className="text-sm self-center-text-neutral-800">
                                Winter 2020 collection
                            </p>
                        </div>
                    </div>
                    <div className=" text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            SUM2020
                        </p>
                        <div className="flex flex-col gap-1 w-60 h-72 bg-white absolute -top-[9px] -translate-y-[90%] left-1/2 -translate-x-1/2 opacity-0 rotate-90">
                            <div className="relative h-[95%]">
                                <Image
                                    src={"/summer/summodel20.png"}
                                    alt="summer-2020"
                                    fill={true}
                                />
                            </div>
                            <p className="text-sm self-center text-neutral-800">
                                Summer 2020 collection
                            </p>
                        </div>
                    </div>
                    <div className=" text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            S/AUT2020
                        </p>
                        <div className="flex flex-col gap-1 w-60 h-72 bg-white absolute -top-[9px] -translate-y-[90%] left-1/2 -translate-x-1/2 opacity-0 rotate-90">
                            <div className="relative h-[95%]">
                                <Image
                                    src={"/autumn/autmodel20.png"}
                                    alt="autumn-2020"
                                    fill={true}
                                />
                            </div>
                            <p className="text-sm self-center text-neutral-800">
                                S/Autumn 2020 collection
                            </p>
                        </div>
                    </div>
                    <div className=" text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            WINTER 2019
                        </p>
                        <div className="flex flex-col gap-1 w-60 h-72 bg-white absolute -top-[9px] -translate-y-[90%] left-1/2 -translate-x-1/2 opacity-0 rotate-90">
                            <div className="relative h-[95%]">
                                <Image
                                    src={"/winter/wmodel19.png"}
                                    alt="winter-19"
                                    fill={true}
                                />
                            </div>
                            <p className="text-sm self-center text-neutral-800">
                                Winter 2019 collection
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-3 overflow-scroll lg:hidden hidescroll">
                <div className="w-64 h-80 md:w-2/5 md:h-96  gap-1  shrink-0  flex flex-col">
                    <div className="relative h-[95%]">
                        <Image
                            src={"/winter/wmodel9.png"}
                            alt="fall/winter-2022"
                            fill={true}
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
                        />
                    </div>
                    <p className="text-xs md:text-sm uppercase md:self-center">
                        Winter 2021
                    </p>
                </div>
                <div className="w-64 h-80 md:w-2/5 md:h-96  gap-1 shrink-0  flex flex-col">
                    <div className="relative h-[95%]">
                        <Image
                            src={"/summer/summodel21.png"}
                            alt="summer-2021"
                            fill={true}
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
                        />
                    </div>
                    <p className="text-xs md:text-sm uppercase md:self-center">
                        summer 2017
                    </p>
                </div>
            </div>
            <Btn className={"py-4 bg-black text-white md:hidden"}>
                <Link href={"/collections"}>SHOW MORE</Link>
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
                        action="POST"
                        className="flex flex-col md:flex-row gap-4 md:gap-2 w-full"
                    >
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="E-mail"
                            className="border border-black focus:outline-none px-4 py-3 lg:py-2 w-full placeholder:text-sm"
                        />
                        <button className="bg-black px-4 py-4  lg:py-2 text-white text-xs">
                            SUBSCRIBE
                        </button>
                    </form>
                    <Checkbox
                        name="agreement"
                        onChange={(e) => console.log(e.target.checked)}
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
