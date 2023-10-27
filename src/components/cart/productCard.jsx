"use client";
import { useCartStore } from "@/libs/cart";
import Image from "next/image";
import React from "react";
import Btn from "../shared/buttons/btn";
import { urlForImage } from "../../../sanity/lib/image";

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
    const changeQty = (e) => {
        updateQty(_id, parseInt(e.target.value));
        updateItemTotal(_id);
        updateTotalQty();
        updatePrice();
        updateTotalCost();
    };
    return (
        <div className="flex gap-4 border-b w-full py-2">
            <div className="w-56 h-60 relative border shrink-0 bg-[#f2f2f2] bg-[url('/home/noise.png')]">
                <Image
                    src={urlForImage(images[0]).url()}
                    alt={name}
                    fill={true}
                />
            </div>
            <div className="flex flex-col w-full">
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-sm font-bold uppercase">{name}</h3>
                        <p className="text-neutral-400 text-sm">
                            Color: <span>{color.toUpperCase()}</span>
                        </p>
                        <p className="block text-neutral-900">${price}</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-10 md:ml-auto">
                        <h3 className="text-sm font-bold">${itemTotal}</h3>
                    </div>
                </div>
                <div className="flex justify-between mt-auto">
                    <input
                        type="number"
                        value={qty}
                        min={1}
                        onChange={changeQty}
                        className="border border-black p-1 w-14"
                    />
                    <Btn className="underline" onClick={removeItem}>
                        REMOVE
                    </Btn>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
