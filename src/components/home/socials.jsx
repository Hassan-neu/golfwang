import Image from "next/image";
import Link from "next/link";
import React from "react";
import Btn from "../buttons/btn";

const Socials = () => {
    return (
        <div className="flex flex-col gap-2 lg:gap-6 px-2 py-2 md:px-5 lg:px-10 lg:justify-end h-[60vh] md:h-[50vh] lg:h-[70vh] lg:border border-gray-400 rounded-3xl mt-14 lg:mt-5">
            <div className="text-xl md:text-4xl font-medium">
                <h2>SOCIAL MEDIA</h2>
            </div>
            <div className="overflow-scroll lg:overflow-hidden border-t flex gap-2  md:items-start items-center py-1 lg:py-3 h-full lg:h-3/4">
                <Link
                    href=""
                    className="w-3/4 md:w-2/5 lg:w-1/2 md:h-80 h-full lg:h-80 shrink-0 lg:shrink"
                >
                    <div className="h-full border bg-[url('/home/social1.png')] bg-cover lg:bg-[size:100%] bg-[position:50%_50%] bg-no-repeat lg:hover:bg-[size:110%] [transition:background_.5s_ease-in]"></div>
                </Link>
                <div className="hidden lg:block lg:w-1/2 lg:h-80 shrink-0 lg:shrink"></div>
                <div className="hidden md:w-2/5 md:h-80 lg:w-1/2 lg:h-80 md:flex flex-col justify-center items-center border shrink-0 lg:shrink">
                    <p className="text-sm text-gray-400">Follow us</p>
                    <p className="text-sm text-gray-400">on Twitter</p>
                    <p className="font-bold">@d_dimeji</p>
                </div>
                <Link
                    href=""
                    className="w-3/4 md:w-2/5 lg:w-1/2 md:h-80 h-full lg:h-80 shrink-0 lg:shrink"
                >
                    <div className="h-full border bg-[url('/home/social2.png')] bg-cover lg:bg-[size:100%] bg-[position:50%_50%] bg-no-repeat lg:hover:bg-[size:110%] [transition:background_.5s_ease-in]"></div>
                </Link>
                <Link
                    href=""
                    className="w-3/4 md:w-2/5 lg:w-1/2 md:h-80 h-full lg:h-80 shrink-0 lg:shrink"
                >
                    <div className="h-full border bg-[url('/home/social3.png')] bg-cover lg:bg-[size:100%] bg-[position:50%_50%] bg-no-repeat lg:hover:bg-[size:110%] [transition:background_.5s_ease-in]"></div>
                </Link>
            </div>
            <Btn
                className={
                    "py-4 bg-black text-white uppercase md:hidden lg:hidden"
                }
            >
                <Link href="">Follow on Instagram</Link>
            </Btn>
        </div>
    );
};

export default Socials;
