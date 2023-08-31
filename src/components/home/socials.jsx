import Image from "next/image";
import Link from "next/link";
import React from "react";
import Btn from "../buttons/btn";

const Socials = () => {
    return (
        <div className="flex flex-col gap-2 md:gap-6 px-2 py-2 md:px-10 md:justify-end h-[60vh] md:h-[70vh] md:border border-gray-400 rounded-3xl mt-14 md:mt-5">
            <div className="text-xl md:text-4xl font-medium">
                <h2>SOCIAL MEDIA</h2>
            </div>
            <div className="overflow-scroll md:overflow-hidden border-t flex gap-2 items-center py-1 md:py-3 h-full md:h-3/4">
                <Link
                    href=""
                    className="w-3/4 md:w-1/2 h-full md:h-80 shrink-0 md:shrink"
                >
                    <div className="h-full border bg-[url('/home/social1.png')] bg-cover md:bg-[size:100%] bg-[position:50%_50%] bg-no-repeat md:hover:bg-[size:110%] [transition:background_.5s_ease-in]"></div>
                </Link>
                <div className="hidden md:block md:w-1/2 md:h-80 shrink-0 md:shrink"></div>
                <div className="hidden md:w-1/2 md:h-80 md:flex flex-col justify-center items-center border shrink-0 md:shrink">
                    <p className="text-sm text-gray-400">Follow us</p>
                    <p className="text-sm text-gray-400">on Twitter</p>
                    <p className="font-bold">@d_dimeji</p>
                </div>
                <Link
                    href=""
                    className="w-3/4 md:w-1/2 h-full md:h-80 shrink-0 md:shrink"
                >
                    <div className="h-full border bg-[url('/home/social2.png')] bg-cover md:bg-[size:100%] bg-[position:50%_50%] bg-no-repeat md:hover:bg-[size:110%] [transition:background_.5s_ease-in]"></div>
                </Link>
                <Link
                    href=""
                    className="w-3/4 md:w-1/2 h-full md:h-80 shrink-0 md:shrink"
                >
                    <div className="h-full border bg-[url('/home/social3.png')] bg-cover md:bg-[size:100%] bg-[position:50%_50%] bg-no-repeat md:hover:bg-[size:110%] [transition:background_.5s_ease-in]"></div>
                </Link>
            </div>
            <Btn className={"py-4 bg-black text-white uppercase md:hidden"}>
                <Link href="">Follow on Instagram</Link>
            </Btn>
        </div>
    );
};

export default Socials;
