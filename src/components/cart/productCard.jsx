import Image from "next/image";
import React from "react";

const ProductCard = () => {
    return (
        <div className="flex gap-4 border-b w-full py-2">
            <div className="w-56 h-60 relative border shrink-0 bg-[#f2f2f2] bg-[url('/home/noise.png')]">
                <Image src={"/home/hats.png"} alt="item-1" fill={true} />
            </div>
            <div className="flex flex-col md:w-full">
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-sm font-bold uppercase">
                            {"Product name"}
                        </h3>
                        <p className="text-neutral-400 text-sm">
                            Color: <span>{"Yellow"}</span>
                        </p>
                        <p className="block text-neutral-900">${10}</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-10 md:ml-auto">
                        <h3 className="text-sm font-bold">$255</h3>
                    </div>
                </div>
                <div className="flex justify-between mt-auto">
                    <input
                        type="number"
                        name="qty"
                        id="qty"
                        defaultValue={1}
                        min={1}
                        className="border border-black p-1 w-14"
                    />
                    <button className="underline">REMOVE</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
