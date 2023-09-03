"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import FilterBtn from "../buttons/filterBtn";
import { useRouter } from "next/navigation";
import Itemcard from "./itemcard";
import Btn from "../buttons/btn";
const ShopItems = ({ shopImage, cat }) => {
    const [sortBy, setSortBy] = useState("newest");
    const router = useRouter();
    return (
        <main className="flex flex-col gap-6 min-h-screen mt-4">
            <div className="flex justify-between text-xs font-semibold">
                <div className="flex items-center">
                    <ul className="flex gap-3">
                        <FilterBtn
                            isActive={cat === "all"}
                            onClick={() => router.push("/catalog/all")}
                        >
                            ALL
                        </FilterBtn>
                        <FilterBtn
                            isActive={cat === "new"}
                            onClick={() => router.push("/catalog/new")}
                        >
                            NEW
                        </FilterBtn>
                        <FilterBtn
                            isActive={cat === "tops"}
                            onClick={() => router.push("/catalog/tops")}
                        >
                            TOPS
                        </FilterBtn>
                        <FilterBtn
                            isActive={cat === "bottoms"}
                            onClick={() => router.push("/catalog/bottoms")}
                        >
                            BOTTOMS
                        </FilterBtn>

                        <FilterBtn
                            isActive={cat === "hats"}
                            onClick={() => router.push("/catalog/hats")}
                        >
                            HATS
                        </FilterBtn>
                        <FilterBtn
                            isActive={cat === "accessories"}
                            onClick={() => router.push("/catalog/accessories")}
                        >
                            ACCESSORIES
                        </FilterBtn>
                        <FilterBtn
                            isActive={cat === "music"}
                            onClick={() => router.push("/catalog/music")}
                        >
                            MUSIC
                        </FilterBtn>
                    </ul>
                </div>

                <div className="flex gap-3 items-center">
                    <label htmlFor="sort" className=" text-gray-500">
                        SORT BY:
                    </label>
                    <select
                        name="sort"
                        id="sort"
                        className="focus:outline-none focus:underline focus:underline-offset-2"
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="newest">NEWEST</option>
                        <option value="lowprice">PRICE LOW</option>
                        <option value="highprice">PRICE HIGH</option>
                    </select>
                </div>
            </div>
            <div className="pb-1 text-5xl font-medium border-b border-b-fuchsia-600 mt-6">
                <div className="flex gap-3">
                    <h3 className="uppercase">{cat}</h3>
                    <p className="text-sm self-start text-gray-400">(67)</p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-2 h-full">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 auto-rows-fr lg:grid-cols-3 md:auto-rows-auto lg:w-2/3 gap-4 md:gap-2 md:[&>div:nth-child(5)]:col-span-full md:[&>div:nth-child(8)]:col-span-full lg:[&>div:nth-child(5)]:col-span-1 lg:[&>div:nth-child(8)]:col-span-1">
                    <Itemcard />
                    <Itemcard />
                    <Itemcard />
                    <Itemcard />
                    <Itemcard />
                    <Itemcard />
                    <Itemcard />
                    <Itemcard />
                </div>
                <div
                    ref={shopImage}
                    className="hidden lg:block h-screen border border-red-500 w-1/3 bg-[url('/shop/shop1.png')] bg-[size:800px] bg-center bg-no-repeat"
                ></div>
                <Btn
                    className={
                        "py-4 uppercase bg-black text-white md:self-center md:px-20 lg:hidden"
                    }
                >
                    Show More
                </Btn>
            </div>
        </main>
    );
};

export default ShopItems;
