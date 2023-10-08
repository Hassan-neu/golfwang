"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { urlForImage } from "../../../../sanity/lib/image";
import Lottie from "lottie-react";
import hover from "@/utils/lottie-ani.json";
const Itemcard = ({ product }) => {
    const {
        name,
        price,
        images,
        colors,
        slug: { current },
    } = product;
    return (
        <Link href={`/product/${current}`} className="flex flex-col gap-1">
            <div className="flex flex-col p-5 relative border border-neutral-400 bg-[#f2f2f2] lg:hover:bg-transparent bg-[url('/home/noise.png')] bg-cover overflow-hidden">
                <p className="text-neutral-400 text-xs uppercase self-end ">
                    {`${colors.length} colors`}
                </p>
                <div className="w-72 h-72 self-center relative lg:w-64 lg:h-64">
                    <Image
                        src={urlForImage(images[0]).url()}
                        alt={name}
                        fill={true}
                        className="lg:hover:scale-110 [transition:transform_.5s_ease-in]"
                    />
                </div>

                <Lottie
                    animationData={hover}
                    className="w-[610px] h-auto absolute top-0 -left-5 -z-[1] hidden lg:block"
                />
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-xs font-semibold uppercase">{name}</p>
                <p className="text-sm text-neutral-400">$ {price}</p>
            </div>
        </Link>
    );
};

export default Itemcard;
