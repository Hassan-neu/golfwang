import Image from "next/image";
import Link from "next/link";
import React from "react";

const Socials = () => {
    return (
        <div className="flex flex-col gap-6 px-10 justify-end h-[70vh] border border-gray-400 rounded-3xl mt-5">
            <div className="text-3xl font-semibold">
                <h2>SOCIAL MEDIA</h2>
            </div>
            <div className="border-t flex gap-2 items-center py-3 h-3/4">
                <Link href="" className="w-1/2 h-80 ">
                    <div className="h-full border bg-[url('/home/social1.png')] bg-[size:100%] bg-[position:50%_50%] bg-no-repeat hover:bg-[size:110%] [transition:background_.5s_ease-in]"></div>
                </Link>
                <div className="w-1/2 h-80"></div>
                <div className="w-1/2 h-80 flex flex-col justify-center items-center border">
                    <p className="text-sm text-gray-400">Follow us</p>
                    <p className="text-sm text-gray-400">on Twitter</p>
                    <p className="font-bold">@d_dimeji</p>
                </div>
                <Link href="" className="w-1/2 h-80">
                    <div className="h-full border bg-[url('/home/social2.png')] bg-[size:100%] bg-[position:50%_50%] bg-no-repeat hover:bg-[size:110%] [transition:background_.5s_ease-in]"></div>
                </Link>
                <Link href="" className="w-1/2 h-80">
                    <div className="h-full border bg-[url('/home/social3.png')] bg-[size:100%] bg-[position:50%_50%] bg-no-repeat hover:bg-[size:110%] [transition:background_.5s_ease-in]"></div>
                </Link>
            </div>
        </div>
    );
};

export default Socials;
