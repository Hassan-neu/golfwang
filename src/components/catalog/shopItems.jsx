"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import FilterBtn from "../buttons/filterBtn";
import { useRouter } from "next/navigation";
const ShopItems = ({ shopImage, cat }) => {
    const [sortBy, setSortBy] = useState("newest");
    const router = useRouter();
    return (
        <main className="flex flex-col gap-6 h-[120vh] mt-4">
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
            <div className="flex gap-2 h-full">
                <div className="grid grid-cols-3 grid-rows-[repeat(2,1fr)] w-2/3 gap-2">
                    <div className="border border-green-500"></div>
                    <div className="border border-green-500"></div>
                    <div className="border border-green-500"></div>
                    <div className="border border-green-500"></div>
                    <div className="border border-green-500"></div>
                    <div className="border border-green-500"></div>
                </div>
                <div
                    ref={shopImage}
                    className="border border-red-500 w-1/3 bg-[url('/shop/shop1.png')] bg-[size:800px] bg-center bg-no-repeat"
                ></div>
            </div>
        </main>
    );
};

export default ShopItems;
