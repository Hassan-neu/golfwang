import React from "react";
import Btn from "../buttons/btn";
import Link from "next/link";
import Image from "next/image";

const Collections = () => {
    return (
        <div className="flex flex-col gap-3 md:gap-6 px-2 md:px-10 md:h-[120vh] justify-center md:border border-gray-400 rounded-3xl mt-14 md:mt-5">
            <div className="flex justify-between">
                <div className="text-xl md:text-4xl font-medium">
                    <h2>COLLECTIONS</h2>
                </div>
                <Btn className={"hidden md:block"}>
                    <Link href={"/collections"}>SHOW MORE</Link>
                </Btn>
            </div>
            <div className="hidden border-t md:flex justify-center items-center gap-[32rem] py-2 h-2/5 relative">
                <div className="-rotate-90 flex flex-col items-center gap-1 h-min">
                    <div className="text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            W2022
                        </p>
                        <div className="w-60 h-72 absolute top-full -translate-y-[6%] left-1/2 -translate-x-1/2 opacity- rotate-90 bg-red-600"></div>
                    </div>
                    <div className="text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            AUT2022
                        </p>
                        <div className="w-60 h-72 absolute top-full -translate-y-[6%] left-1/2 -translate-x-1/2 opacity-0 rotate-90 bg-orange-600"></div>
                    </div>
                    <div className=" text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            SUMM2022
                        </p>
                        <div className="w-60 h-72 absolute top-full -translate-y-[6%] left-1/2 -translate-x-1/2 opacity-0 rotate-90 bg-yellow-600"></div>
                    </div>
                    <div className=" text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            WINTER 2021
                        </p>
                        <div className="w-60 h-72 absolute top-full -translate-y-[6%] left-1/2 -translate-x-1/2 opacity-0 rotate-90 bg-green-600"></div>
                    </div>
                    <div className=" text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            SUMM 2021
                        </p>
                        <div className="w-60 h-72 absolute top-full -translate-y-[6%] left-1/2 -translate-x-1/2 opacity-0 rotate-90 bg-blue-600"></div>
                    </div>
                    <div className=" text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            SPR 2021
                        </p>
                        <div className="w-60 h-72 absolute top-full -translate-y-[6%] left-1/2 -translate-x-1/2 opacity-0 rotate-90 bg-indigo-600"></div>
                    </div>
                    <div className=" text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            W2020
                        </p>
                        <div className="w-60 h-72 absolute top-full -translate-y-[6%] left-1/2 -translate-x-1/2 opacity-0 rotate-90 bg-violet-600"></div>
                    </div>
                    <div className=" text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            SUM2020
                        </p>
                        <div className="w-60 h-72 absolute top-full -translate-y-[6%] left-1/2 -translate-x-1/2 opacity-0 rotate-90 bg-amber-950"></div>
                    </div>
                    <div className=" text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            S/AUT2021
                        </p>
                        <div className="w-60 h-72 absolute top-full -translate-y-[6%] left-1/2 -translate-x-1/2 opacity-0 rotate-90 bg-lime-950"></div>
                    </div>
                    <div className=" text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            WINTER 2019
                        </p>
                        <div className="w-60 h-72 absolute top-full -translate-y-[6%] left-1/2 -translate-x-1/2 opacity-0 rotate-90 bg-cyan-400"></div>
                    </div>
                    <div className=" text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            WINTER 2017
                        </p>
                        <div className="w-60 h-72 absolute top-full -translate-y-[6%] left-1/2 -translate-x-1/2 opacity-0 rotate-90 bg-sky-950"></div>
                    </div>
                </div>
                {/* break here */}
                <div className="-rotate-90 flex flex-col items-center gap-1 h-min">
                    <div className=" text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            SUM2017
                        </p>
                        <div className="w-60 h-72 absolute -top-[9px] -translate-y-[90%] left-1/2 -translate-x-1/2 opacity-0 rotate-90 bg-slate-600"></div>
                    </div>
                    <div className=" text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            W2022
                        </p>
                        <div className="w-60 h-72 absolute -top-[9px] -translate-y-[90%] left-1/2 -translate-x-1/2 opacity-0 rotate-90 bg-red-950"></div>
                    </div>
                    <div className=" text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            AUT2022
                        </p>
                        <div className="w-60 h-72 absolute -top-[9px] -translate-y-[90%] left-1/2 -translate-x-1/2 opacity-0 rotate-90 bg-purple-950"></div>
                    </div>
                    <div className=" text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            SUMM2022
                        </p>
                        <div className="w-60 h-72 absolute -top-[9px] -translate-y-[90%] left-1/2 -translate-x-1/2 opacity-0 rotate-90 bg-orange-950"></div>
                    </div>
                    <div className=" text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            WINTER 2021
                        </p>
                        <div className="w-60 h-72 absolute -top-[9px] -translate-y-[90%] left-1/2 -translate-x-1/2 opacity-0 rotate-90 bg-lime-950"></div>
                    </div>
                    <div className=" text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            SUMM 2021
                        </p>
                        <div className="w-60 h-72 absolute -top-[9px] -translate-y-[90%] left-1/2 -translate-x-1/2 opacity-0 rotate-90 bg-teal-950"></div>
                    </div>
                    <div className=" text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            SPR 2021
                        </p>
                        <div className="w-60 h-72 absolute -top-[9px] -translate-y-[90%] left-1/2 -translate-x-1/2 opacity-0 rotate-90 bg-green-300"></div>
                    </div>
                    <div className=" text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            W2020
                        </p>
                        <div className="w-60 h-72 absolute -top-[9px] -translate-y-[90%] left-1/2 -translate-x-1/2 opacity-0 rotate-90 bg-cyan-700"></div>
                    </div>
                    <div className=" text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            SUM2020
                        </p>
                        <div className="w-60 h-72 absolute -top-[9px] -translate-y-[90%] left-1/2 -translate-x-1/2 opacity-0 rotate-90 bg-black"></div>
                    </div>
                    <div className=" text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            S/AUT2021
                        </p>
                        <div className="w-60 h-72 absolute -top-[9px] -translate-y-[90%] left-1/2 -translate-x-1/2 opacity-0 rotate-90 bg-yellow-50"></div>
                    </div>
                    <div className=" text-5xl font-light inline text-gray-400 ">
                        <p className="hover:text-black cursor-pointer season">
                            WINTER 2019
                        </p>
                        <div className="w-60 h-72 absolute -top-[9px] -translate-y-[90%] left-1/2 -translate-x-1/2 opacity-0 rotate-90 bg-gray-400"></div>
                    </div>
                </div>
            </div>
            <div className="flex gap-3 overflow-scroll      md:hidden">
                <div className="w-3/4 h-[360px] shrink-0  flex flex-col">
                    <div className="relative h-[95%]">
                        <Image
                            src={"/winter/wmodel9.png"}
                            alt="fall/winter-2022"
                            fill={true}
                        />
                    </div>
                    <p className="text-xs uppercase">Fall/Winter 2022</p>
                </div>
                <div className="w-3/4 h-[360px] shrink-0  flex flex-col">
                    <div className="relative h-[95%]">
                        <Image
                            src={"/autumn/autmodel9.png"}
                            alt="autumn-2022"
                            fill={true}
                        />
                    </div>
                    <p className="text-xs uppercase">Autumn 2022</p>
                </div>
                <div className="w-3/4 h-[360px] shrink-0  flex flex-col ">
                    <div className="relative h-[95%]">
                        <Image
                            src={"/summer/summodel9.png"}
                            alt="summer-2022"
                            fill={true}
                        />
                        <p className="text-xs uppercase">Summer 2022</p>
                    </div>
                </div>
                <div className="w-3/4 h-[360px] shrink-0  flex flex-col">
                    <div className="relative h-[95%]">
                        <Image
                            src={"/summer/summodel6.png"}
                            alt="summer-2022"
                            fill={true}
                        />
                    </div>
                    <p className="text-xs uppercase">Summer 2022</p>
                </div>
                <div className="w-3/4 h-[360px] shrink-0  flex flex-col">
                    <div className="relative h-[95%]">
                        <Image
                            src={"/winter/wmodel7.png"}
                            alt="winter-2022"
                            fill={true}
                        />
                    </div>
                    <p className="text-xs uppercase">Winter 2022</p>
                </div>
                <div className="w-3/4 h-[360px] shrink-0  flex flex-col">
                    <div className="relative h-[95%]">
                        <Image
                            src={"/autumn/autmodel5.png"}
                            alt="autumn-2022"
                            fill={true}
                        />
                    </div>
                    <p className="text-xs uppercase">Autumn 2022</p>
                </div>
            </div>
            <Btn className={"py-4 bg-black text-white md:hidden"}>
                <Link href={"/collections"}>SHOW MORE</Link>
            </Btn>
            <div className="flex md:justify-center md:items-center bg-[url('/home/yellow.png')] bg-center md:rounded-[30px] px-3 py-10 border-2 md:border-black">
                <div className="flex flex-col gap-3 md:gap-4 w-full md:w-2/5 md:items-start">
                    <div className="flex flex-col gap-1 items-center">
                        <h2 className="text-xl font-medium md:text-4xl md:font-medium">
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
                            className="border border-black focus:outline-none px-4 py-3 md:py-2 w-full placeholder:text-sm"
                        />
                        <button className="bg-black px-4 py-4  md:py-2 text-white text-xs">
                            SUBSCRIBE
                        </button>
                    </form>
                    <div className="flex gap-2 items-center">
                        <span className="w-[12px] h-[12px] border border-black flex justify-center items-center">
                            <input
                                type="checkbox"
                                name="agreement"
                                id="agreement"
                                className="appearance-none m-auto w-[7px] h-[7px] checked:bg-black"
                            />
                        </span>

                        <p className="text-xs">
                            I agree to{" "}
                            <Link href="" className="underline">
                                {" "}
                                personal data protection policy
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collections;
