"use client";
import React, { useCallback, useEffect, useRef } from "react";
import { useState } from "react";
import OptionsBtn from "@/components/shared/buttons/optionsBtn";
import Btn from "@/components/shared/buttons/btn";
import { useCartStore } from "@/libs/cart";
import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";

const SingleProduct = ({ product }) => {
    const addProduct = useCartStore((cart) => cart.addProduct);
    const updatePrice = useCartStore((cart) => cart.updatePrice);
    const updateTotalCost = useCartStore((cart) => cart.updateTotalCost);
    const updateTotalQty = useCartStore((cart) => cart.updateTotalQty);
    const ghost = useRef();
    const [order, setOrder] = useState({
        color: "",
        size: "",
    });
    const [showDetails, setShowDetails] = useState(false);
    useEffect(() => {
        if (product.colors.length > 0) {
            setOrder((prev) => ({ ...prev, color: product.colors[0] }));
        }
        if (product.sizes.length > 0) {
            setOrder((prev) => ({ ...prev, size: product.sizes[0] }));
        }
    }, [product]);
    const addToCart = () => {
        addProduct(
            { ...product, order, qty: 1, itemTotal: product.price },
            ghost
        );
        updatePrice();
        updateTotalCost();
        updateTotalQty();
    };
    return (
        <>
            <div className="text-[10px] md:text-sm font-semibold">
                <div className="flex gap-2 items-center">
                    <Link
                        href={`/catalog/${product?.category?.name}`}
                        className="capitalize font-normal"
                    >
                        {product?.category?.name}
                    </Link>
                    <MdArrowForwardIos />
                    <Link
                        href={`/catalog/${product?.category?.name}`}
                        className="capitalize font-normal"
                    >
                        {product?.class}
                    </Link>
                    <MdArrowForwardIos />
                    <p className="uppercase">{product?.name}</p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 h-full">
                <div className="flex lg:w-3/5 h-full md:h-[60vh] lg:h-screen relative">
                    <div className="flex w-full gap-2 lg:flex-col  overflow-scroll hidescroll">
                        {product?.images?.map((img, i) => (
                            <div
                                key={i}
                                className="w-11/12 lg:w-full h-80 md:h-full lg:h-full border border-neutral-400 bg-[#f2f2f2] bg-[url('/home/noise.png')] shrink-0 flex"
                            >
                                <div className="w-4/5 h-4/5 relative m-auto">
                                    <Image
                                        src={urlForImage(img).url()}
                                        alt={product?.name}
                                        fill={true}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div
                        ref={ghost}
                        className="w-72 h-72 opacity-0 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
                    >
                        {product.images && (
                            <Image
                                src={urlForImage(product.images[0]).url()}
                                alt={product.name}
                                fill={true}
                            />
                        )}
                    </div>
                </div>

                <div className="flex flex-col gap-7 lg:gap-14 lg:w-2/5">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-2xl uppercase md:text-4xl lg:text-4xl font-bold">
                            {product?.name}
                        </h2>
                        <p className="md:text-2xl">$ {product?.price}</p>
                    </div>
                    <div className="flex flex-col">
                        <div className="border-t flex gap-2 flex-col md:flex-row justify-between lg:items-center text-xs lg:text-base py-2 lg:py-5">
                            <div className="text-xs md:text-lg">Color:</div>
                            <div className="flex  gap-1">
                                {product?.colors?.map((color, i) => (
                                    <OptionsBtn
                                        isActive={order.color === color}
                                        className="capitalize py-2 px-3"
                                        onClick={() =>
                                            setOrder((prevOrder) => ({
                                                ...prevOrder,
                                                color: color,
                                            }))
                                        }
                                        key={i}
                                    >
                                        {color}
                                    </OptionsBtn>
                                ))}
                            </div>
                        </div>

                        <div className="border-y flex flex-col gap-2 md:flex-row justify-between lg:items-center text-xs lg:text-base py-2 lg:py-5">
                            <div className="text-xs md:text-lg">Size:</div>
                            <div className="flex gap-1">
                                {product?.sizes?.map((size, i) => (
                                    <OptionsBtn
                                        isActive={order.size === size}
                                        className="uppercase py-2 px-3"
                                        onClick={() =>
                                            setOrder((prevOrder) => ({
                                                ...prevOrder,
                                                size: size,
                                            }))
                                        }
                                        key={i}
                                    >
                                        {size}
                                    </OptionsBtn>
                                ))}
                            </div>
                        </div>
                        {product.details && (
                            <div className="flex flex-col md:flex-row gap-2 justify-between h-max pt-2 lg:pt-5">
                                <Btn
                                    className="underline self-start text-xs px-0"
                                    onClick={() => setShowDetails(!showDetails)}
                                >
                                    Fit Details
                                </Btn>
                                {showDetails && (
                                    <div className="md:w-4/5 text-justify text-xs lg:text-sm">
                                        <table className="w-full">
                                            <thead className="font-semibold">
                                                <tr>
                                                    {product.details.rows[0].cells.map(
                                                        (cell, i) => (
                                                            <td key={i}>
                                                                {cell}
                                                            </td>
                                                        )
                                                    )}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="[&>td:nth-child(1)]:font-semibold">
                                                    {product.details.rows[1].cells.map(
                                                        (cell, i) => (
                                                            <td key={i}>
                                                                {cell}
                                                            </td>
                                                        )
                                                    )}
                                                </tr>
                                                <tr className="[&>td:nth-child(1)]:font-semibold">
                                                    {product.details.rows[2].cells.map(
                                                        (cell, i) => (
                                                            <td key={i}>
                                                                {cell}
                                                            </td>
                                                        )
                                                    )}
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    <div className="text-xs md:text-sm lg:text-xs">
                        <Btn
                            className="w-full py-3 text-white lg:bg-[size:200%,100%] lg:bg-right lg:bg-gradient-to-r from-yellow-400 from-50% to-black to-50% lg:[transition:background_.5s] lg:hover:bg-left lg:hover:text-black bg-black md:py-4 lg:text-lg"
                            onClick={addToCart}
                        >
                            ADD TO CART
                        </Btn>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="font-semibold text-xs md:text-base">
                            DESCRIPTION
                        </h4>
                        <p className="text-xs md:text-sm text-neutral-500">
                            {product.description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProduct;
