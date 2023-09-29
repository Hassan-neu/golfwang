"use client";
import React, { useCallback, useEffect, useRef } from "react";
import { useState } from "react";
import OptionsBtn from "@/components/shared/buttons/optionsBtn";
import ghostSwipe from "@/utils/functions/ghostSwipe";
import Btn from "@/components/shared/buttons/btn";
import { useCartStore } from "@/libs/cart";
import { client } from "../../../../../sanity/lib/client";
import Image from "next/image";
import { urlForImage } from "../../../../../sanity/lib/image";
const Page = ({ params: { slug } }) => {
    const [product, setProduct] = useState({});
    const addProduct = useCartStore((cart) => cart.addProduct);
    const updatePrice = useCartStore((cart) => cart.updatePrice);
    const updateTotalQty = useCartStore((cart) => cart.updateTotalQty);
    const ghost = useRef();
    const [order, setOrder] = useState({
        color: "",
        size: "",
    });
    const [showDetails, setShowDetails] = useState(false);
    const getProduct = useCallback(async () => {
        const res = await client.fetch(
            `*[_type=='product' && slug.current=='${slug}'][0]`
        );
        setProduct(res);
        if (res.colors.length > 0) {
            setOrder((prev) => ({ ...prev, color: res.colors[0] }));
        }
        if (res.sizes.length > 0) {
            setOrder((prev) => ({ ...prev, size: res.sizes[0] }));
        }
    }, [slug]);
    useEffect(() => {
        getProduct();
    }, [getProduct]);
    const addToCart = () => {
        ghostSwipe(ghost);
        addProduct({ ...product, order, qty: 1, itemTotal: product.price });
        updatePrice();
        updateTotalQty();
    };
    return (
        <div className="mt-10 flex flex-col gap-2 px-2 md:px-5 lg:px-10 min-h-[calc(100vh_-_100px)] ">
            <div className="text-xs font-semibold">
                <p>
                    {slug}-&gt; Link -&gt; {slug}
                </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 h-full">
                <div className="flex lg:w-3/5 h-full md:h-[80vh] lg:h-screen relative">
                    <div className="flex w-full gap-2 lg:flex-col  overflow-scroll hidescroll">
                        {product?.images?.map((img, i) => (
                            <div
                                key={i}
                                className="w-11/12 lg:w-full h-80 md:h-full lg:h-full border relative bg-[#f2f2f2] bg-[url('/home/noise.png')] shrink-0"
                            >
                                <Image
                                    src={urlForImage(img).url()}
                                    alt={product?.name}
                                    fill={true}
                                />
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
                        <div className=" border-t flex gap-2 flex-col md:flex-row justify-between lg:items-center text-xs lg:text-base py-2 lg:py-5">
                            <div className="text-lg">Color:</div>
                            <div className="flex  gap-1">
                                {product?.colors?.map((color, i) => (
                                    <OptionsBtn
                                        isActive={order.color === color}
                                        className="capitalize py-2 px-3 text-base"
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
                            <div className="text-lg">Size:</div>
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
                        <div className="hidden lg:flex gap-2 justify-between mt-2 h-max">
                            <Btn
                                className="underline self-start text-xs"
                                onClick={() => setShowDetails(!showDetails)}
                            >
                                Fit Details
                            </Btn>
                            {showDetails && (
                                <div className="w-4/5 text-justify">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Quam perferendis ex
                                    dignissimos, recusandae sit sapiente quia
                                    nobis modi nisi exercitationem illo pariatur
                                    excepturi consectetur iusto expedita a
                                    deleniti dolor aliquid explicabo aut, non
                                    placeat ea. Maxime eaque voluptas totam
                                    nostrum!
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="text-xs md:text-sm lg:text-xs">
                        <Btn
                            className="w-full py-3 text-white bg-[size:200%,100%] bg-right bg-gradient-to-r from-yellow-400 from-50% to-black to-50% [transition:background_.5s] hover:bg-left hover:text-black md:py-4 lg:text-lg"
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
        </div>
    );
};

export default Page;
