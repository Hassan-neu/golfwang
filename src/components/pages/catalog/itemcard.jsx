import Image from "next/image";
import React from "react";
import Link from "next/link";
const Itemcard = () => {
    return (
        <Link href="/product/12345" className="flex flex-col gap-1">
            <div className="flex flex-col p-5 relative border border-neutral-400 bg-[#f2f2f2] bg-[url('/home/noise.png')] ">
                <p className="text-neutral-400 text-xs uppercase self-end">
                    3 Colors
                </p>
                <div className="w-full max-w-[350px] self-center relative h-64">
                    <Image
                        src={"/home/tops.png"}
                        alt={"itemplaceholder"}
                        fill={true}
                        className="lg:hover:scale-110 [transition:transform_.5s_ease-in]"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold uppercase">Item 1</p>
                <p className="text-xs text-neutral-400">$400</p>
            </div>
        </Link>
    );
};

export default Itemcard;
