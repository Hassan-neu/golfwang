import Image from "next/image";
import React from "react";
const ProductCard = ({ ar }) => {
    const { name, color, size, price, qty } = ar;
    return (
        <div className="flex gap-2 border-b w-full py-2">
            <div className="w-56 h-60 relative border shrink-0">
                <Image src={"/home/hats.png"} alt="item-1" fill={true} />
            </div>
            <div className="flex flex-col md:flex-row md:w-full">
                <div className="flex flex-col gap-2">
                    <h3 className="text-sm font-bold">{name}</h3>
                    <p className="text-neutral-400 text-sm">
                        Color: <span>{color}</span>
                    </p>
                    <p className="text-neutral-400 text-sm">
                        Size: <span>{size}</span>
                    </p>
                    <p className="hidden md:block text-gray-400">
                        Price: <span>{price}</span>
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-10 md:ml-auto">
                    <h3 className="text-sm font-medium text-neutral-500 md:uppercase">
                        Quantity: <span>{qty}</span>
                    </h3>
                    <h3 className="text-sm font-bold">$255</h3>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
