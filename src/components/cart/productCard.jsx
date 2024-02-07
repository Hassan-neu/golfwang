"use client";
import { useCartStore } from "@/libs/cart";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import Btn from "../shared/buttons/btn";
import { urlForImage } from "../../../sanity/lib/image";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const ProductCard = ({ product }) => {
    const {
        _id,
        name,
        images,
        order: { color },
        price,
        qty,
        itemTotal,
    } = product;
    const deleteProduct = useCartStore((cart) => cart.deleteProduct);
    const updateQty = useCartStore((cart) => cart.updateQty);
    const updatePrice = useCartStore((cart) => cart.updatePrice);
    const updateTotalCost = useCartStore((cart) => cart.updateTotalCost);
    const updateTotalQty = useCartStore((cart) => cart.updateTotalQty);
    const updateItemTotal = useCartStore((cart) => cart.itemTotal);
    const removeItem = () => {
        deleteProduct(_id);
        updatePrice();
        updateTotalQty();
    };
    const incQty = () => {
        updateQty(_id, qty + 1);
        updateItemTotal(_id);
        updateTotalQty();
        updatePrice();
        updateTotalCost();
    };
    const decQty = () => {
        updateQty(_id, qty - 1 < 1 ? 1 : qty - 1);
        updateItemTotal(_id);
        updateTotalQty();
        updatePrice();
        updateTotalCost();
    };
    return (
        <div className="flex gap-4 border-b w-full py-2">
            <div className="w-36 h-40 md:w-[180px] md:h-[210px] lg:w-56 lg:h-60 relative border shrink-0 bg-[#f2f2f2] bg-[url('/home/noise.png')]">
                <Image
                    src={urlForImage(images[0]).url()}
                    alt={name}
                    fill={true}
                />
            </div>
            <div className="flex flex-col w-full">
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-xs md:text-sm font-bold uppercase">
                            {name}
                        </h3>
                        <p className="text-neutral-400 text-xs md:text-sm capitalize">
                            Color: <span>{color}</span>
                        </p>
                        <p className="text-neutral-900 text-xs md:text-sm">
                            ${price}
                        </p>
                    </div>
                    <div className="hidden md:flex flex-col md:flex-row gap-10 md:ml-auto">
                        <h3 className="text-sm font-bold">${itemTotal}</h3>
                    </div>
                </div>
                <div className="flex justify-between mt-auto">
                    <div className="flex gap-2">
                        <button
                            className="border p-0.5 flex justify-center items-center"
                            onClick={() => decQty()}
                        >
                            <IoMdArrowDropup className="-rotate-90" />
                        </button>
                        <span className="border flex justify-center items-center border-black p-0.5 w-14 h-7 rounded-sm md:h-auto">
                            {qty}
                        </span>
                        <button
                            className="border p-0.5 flex justify-center items-center"
                            onClick={() => incQty()}
                        >
                            <IoMdArrowDropdown className="-rotate-90" />
                        </button>
                    </div>
                    <Btn
                        className="underline text-[10px] md:text-base"
                        onClick={removeItem}
                    >
                        REMOVE
                    </Btn>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
