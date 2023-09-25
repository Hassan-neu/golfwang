import React from "react";
import Btn from "../../shared/buttons/btn";
import Link from "next/link";
import Image from "next/image";
const NewArivals = () => {
    return (
        <div className="flex flex-col gap-2 lg:gap-4 px-2 md:px-5 lg:p-10 lg:min-h-screen justify-start lg:justify-center lg:border lg:border-gray-400 lg:rounded-3xl mt-14  md:mt-20 lg:mt-5 ">
            <div className="flex justify-between">
                <div className="text-xl md:text-4xl font-medium">
                    <h2>NEW ARRIVALS</h2>
                </div>
                <Btn className="hidden border md:block">
                    <Link href={"/catalog/new"}>SHOW MORE</Link>
                </Btn>
            </div>
            <div className="flex gap-3 w-full flex-nowrap overflow-x-scroll py-2 lg:py-10 hidescroll transition">
                <div className="w-72 lg:w-72 h-96 lg:h-96 shrink-0 flex flex-col gap-1">
                    <div className="relative h-[95%] bg-[color:#f2f2f2] bg-[url('/home/noise.png')] border">
                        <Image
                            src={"/home/tops.png"}
                            fill={true}
                            alt="item-1"
                        />
                    </div>
                    <p>Item 1</p>
                </div>
                <div className="w-72 lg:w-72  h-96 lg:h-96 shrink-0 flex flex-col gap-1">
                    <div className="relative h-[95%] bg-[color:#f2f2f2] bg-[url('/home/noise.png')] border">
                        <Image
                            src={"/home/tops.png"}
                            fill={true}
                            alt="item-1"
                        />
                    </div>
                    <p>Item 1</p>
                </div>
                <div className="hidden lg:block w-[594px] max-w-[594px] h-[600px] max-h-[600px] border relative bg-yellow-400 shrink-0"></div>
                <div className="w-72 lg:w-72  h-96 lg:h-96 shrink-0 flex flex-col gap-1">
                    <div className="relative h-[95%] bg-[color:#f2f2f2] bg-[url('/home/noise.png')] border">
                        <Image
                            src={"/home/tops.png"}
                            fill={true}
                            alt="item-1"
                        />
                    </div>
                    <p>Item 1</p>
                </div>
                <div className="w-72 lg:w-72  h-96 lg:h-96 shrink-0 flex flex-col gap-1">
                    <div className="relative h-[95%] bg-[color:#f2f2f2] bg-[url('/home/noise.png')] border">
                        <Image
                            src={"/home/tops.png"}
                            fill={true}
                            alt="item-1"
                        />
                    </div>
                    <p>Item 1</p>
                </div>
                <div className="w-72 lg:w-72  h-96 lg:h-96 shrink-0 flex flex-col gap-1">
                    <div className="relative h-[95%] bg-[color:#f2f2f2] bg-[url('/home/noise.png')] border">
                        <Image
                            src={"/home/tops.png"}
                            fill={true}
                            alt="item-1"
                        />
                    </div>
                    <p>Item 1</p>
                </div>
                <div className="w-72 lg:w-72  h-96 lg:h-96 shrink-0 flex flex-col gap-1">
                    <div className="relative h-[95%] bg-[color:#f2f2f2] bg-[url('/home/noise.png')] border">
                        <Image
                            src={"/home/tops.png"}
                            fill={true}
                            alt="item-1"
                        />
                    </div>
                    <p>Item 1</p>
                </div>
            </div>
            <Btn className="bg-black self-stretch text-white py-4 md:hidden">
                <Link href={"/catalog/new"}>SHOW MORE</Link>
            </Btn>
            <div className="hidden lg:flex gap-1">
                <Btn className="rounded-full w-10 h-10 border flex items-center justify-center text-gray-500">
                    &lt;-
                </Btn>
                <Btn className="rounded-full w-10 h-10 border flex items-center justify-center text-gray-500">
                    -&gt;
                </Btn>
            </div>
        </div>
    );
};

export default NewArivals;
