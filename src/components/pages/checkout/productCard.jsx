import Image from "next/image";
import React from "react";
import { urlForImage } from "../../../../sanity/lib/image";
const ProductCard = ({ product }) => {
    const {
        name,
        order: { color, size },
        price,
        images,
        qty,
        itemTotal,
    } = product;
    return (
        <div className="flex gap-2 border-b w-full py-2">
            <div className="w-[180px] h-[210px] border shrink-0 bg-[#f2f2f2] bg-[url('/home/noise.png')] flex">
                <div className="relative w-40 h-40 m-auto">
                    <Image
                        src={urlForImage(images[0]).url()}
                        alt={name}
                        fill={true}
                    />
                </div>
            </div>
            <div className="flex text-xs md:text-sm font-medium flex-col md:flex-row md:w-full">
                <div className="flex flex-col gap-2 text-opacity-50 text-black">
                    <h1 className="uppercase text-black">{name}</h1>
                    <p>
                        Color:&nbsp;
                        <span className=" capitalize">{color}</span>
                    </p>
                    <p>
                        Size:&nbsp;
                        <span className="capitalize">{size}</span>
                    </p>
                    <p className="hidden md:block">
                        Price:&nbsp;
                        <span>$&nbsp;{price}</span>
                    </p>
                </div>
                <div className="flex flex-col gap-2 mt-2 md:m-0 md:flex-row md:gap-10 md:ml-auto">
                    <h3 className="text-opacity-50 text-black md:uppercase">
                        Quantity:&nbsp;<span>{qty}</span>
                    </h3>
                    <h3>$&nbsp;{itemTotal}</h3>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
