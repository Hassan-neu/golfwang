"use client";
import React, { useEffect, useCallback, useRef, useState } from "react";
import Btn from "../../shared/buttons/btn";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
import { client } from "../../../../sanity/lib/client";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import { urlForImage } from "../../../../sanity/lib/image";
import { Skeleton } from "@/components/ui/skeleton";
import ItemLoading from "@/components/ui/itemLoading";
import useWindowSize from "@/utils/functions/windowSize";
const NewArrivals = () => {
    const productScroll = useRef();
    const { smallScreen, largeScreen } = useWindowSize();
    const [products, setProducts] = useState([]);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(3);
    const [distance, setDistance] = useState(0);
    const getProducts = async () => {
        const res = await client.fetch(
            `*[_type=='product'] | order(_createdAt desc)[0..9]`
        );
        setProducts(res);
    };
    useEffect(() => {
        getProducts();
    }, []);
    const productList = useCallback((node) => {
        if (node != null) {
            setDistance(node.scrollWidth / 10);
        }
    }, []);
    const carousel = (scroll) => {
        gsap.to(productScroll.current, {
            scrollTo: {
                x: productScroll.current.scrollLeft + scroll,
            },
        });
    };
    return (
        <>
            {products.length > 0 ? (
                <div className="flex flex-col gap-2 lg:gap-4 px-2 md:px-5 lg:p-10 lg:min-h-screen justify-start lg:justify-center lg:border lg:border-gray-400 lg:rounded-3xl mt-14 md:mt-20 lg:mt-5 relative">
                    <div className="flex justify-between">
                        <div className="text-xl md:text-4xl font-medium">
                            <h2>NEW ARRIVALS</h2>
                        </div>
                        <Btn
                            className="hidden border md:block"
                            aria-label="Show More"
                        >
                            <Link href={"/catalog/all"}>SHOW MORE</Link>
                        </Btn>
                    </div>
                    <div
                        ref={productScroll}
                        className="overflow-hidden hidescroll"
                    >
                        <div
                            ref={productList}
                            className="grid lg:grid-cols-[repeat(5,278px)] grid-flow-col gap-[10px] w-full py-2  border-t  transition"
                        >
                            {smallScreen &&
                                products?.map((product) => (
                                    <NewItem
                                        key={product._id}
                                        product={product}
                                    />
                                ))}
                            {largeScreen &&
                                products
                                    ?.slice(start, end)
                                    .map((product) => (
                                        <NewItem
                                            key={product._id}
                                            product={product}
                                        />
                                    ))}

                            <div className="hidden lg:block lg:[grid-column:3/5] h-[600px] max-h-[600px] relative bg-yellow-400 shrink-0">
                                <Image
                                    src={"/home/arrival.png"}
                                    alt="new-arrivalsImg"
                                    fill={true}
                                    sizes="(max-width: 991px) 100vw, 594px"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex lg:hidden justify-between gap-1">
                        <Btn
                            className="rounded-full w-10 h-10 border flex items-center justify-center disabled:text-[rgb(229,_231,_235)] text-gray-500"
                            aria-label="Scroll left"
                            onClick={() => carousel(-distance)}
                        >
                            <IoArrowBack />
                        </Btn>
                        <Btn
                            className="rounded-full w-10 h-10 border flex items-center justify-center disabled:text-[rgb(229,_231,_235)] text-gray-500"
                            aria-label="Scroll right"
                            onClick={() => carousel(distance)}
                        >
                            <IoArrowForward />
                        </Btn>
                    </div>
                    <Btn className="bg-black text-xs self-stretch text-white py-4 md:hidden">
                        <Link href={"/catalog/all"}>SHOW MORE</Link>
                    </Btn>
                    <div className="hidden lg:flex gap-1">
                        <Btn
                            className="rounded-full w-10 h-10 border flex items-center justify-center disabled:text-[rgb(229,_231,_235)] text-gray-500"
                            aria-label="Scroll left"
                            onClick={() => {
                                if (start === 0) return;
                                setStart((prev) => prev - 1);
                                setEnd((prev) => prev - 1);
                            }}
                            disabled={start === 0}
                        >
                            <IoArrowBack />
                        </Btn>
                        <Btn
                            className="rounded-full w-10 h-10 border flex items-center justify-center disabled:text-[rgb(229,_231,_235)] text-gray-500"
                            aria-label="Scroll right"
                            onClick={() => {
                                if (end === products.length) return;
                                setStart((prev) => prev + 1);
                                setEnd((prev) => prev + 1);
                            }}
                            disabled={end === products.length}
                        >
                            <IoArrowForward />
                        </Btn>
                    </div>
                </div>
            ) : (
                <ArrivalsLoading />
            )}
        </>
    );
};

const NewItem = ({ product }) => {
    const {
        colors,
        images,
        name,
        price,
        slug: { current },
    } = product;
    return (
        <Link
            href={`/product/${current}`}
            className="w-72 lg:w-[278px] h-96 lg:h-96 shrink-0 flex flex-col gap-1"
        >
            <div className="flex flex-col p-5 relative border border-neutral-400 bg-[#f2f2f2] bg-[url('/home/noise.png')] ">
                <p className="text-neutral-400 text-xs uppercase self-end">
                    {colors.length + " " + "colors"}
                </p>
                <div className="w-full max-w-[350px] self-center relative h-64">
                    <Image
                        src={urlForImage(images[0]).url()}
                        alt={"itemplaceholder"}
                        fill={true}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="lg:hover:scale-110 [transition:transform_.5s_ease-in]"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-xs font-semibold uppercase">{name}</p>
                <p className="text-sm text-neutral-400">$ {price}</p>
            </div>
        </Link>
    );
};

export default NewArrivals;

export const ArrivalsLoading = () => {
    return (
        <div className="flex flex-col gap-2 lg:gap-4 px-2 md:px-5 lg:p-10 lg:min-h-screen justify-start lg:justify-center lg:border lg:border-gray-400 lg:rounded-3xl mt-14  md:mt-20 lg:mt-5 ">
            <div className="flex justify-between">
                <div className="text-xl md:text-4xl font-medium">
                    <h2>NEW ARRIVALS</h2>
                </div>
                <Skeleton className="px-2 py-1 w-32 rounded-none hidden md:block" />
            </div>
            <div className="grid md:grid-cols-[repeat(5,278px)] grid-flow-col auto-rows-auto gap-3 py-2 overflow-scroll hidescroll">
                {Array.from({ length: 6 }, (_, i) => (
                    <ItemLoading key={i} />
                ))}
            </div>
            <Skeleton className="h-11 self-stretch py-4 md:hidden" />
            <div className="hidden lg:flex gap-1">
                <Skeleton className="rounded-full w-10 h-10" />
                <Skeleton className="rounded-full w-10 h-10 " />
            </div>
        </div>
    );
};
