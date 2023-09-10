"use client";
import React from "react";
import { useState } from "react";
import Itemcard from "./itemcard";
import Btn from "@/components/shared/buttons/btn";
import SortOptions from "./sortOption";
import FilterOptions from "./filterOptions";
import FilterMobile from "./filterMobile";
import SortMobile from "./sortMobile";
const ShopItems = ({ shopImage, filter }) => {
    const [sortBy, setSortBy] = useState("newest");
    return (
        <main className="flex flex-col gap-6 min-h-screen mt-4">
            <div className="flex justify-between text-xs ">
                <div className="flex items-center">
                    <FilterOptions />
                    <div className="lg:hidden">
                        <FilterMobile />
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="hidden lg:flex gap-3 items-center font-bold">
                        <label htmlFor="sort" className=" text-gray-500">
                            SORT BY:
                        </label>

                        <SortOptions />
                    </div>
                    <div className="lg:hidden">
                        <SortMobile />
                    </div>
                </div>
            </div>
            <div className="pb-1 text-5xl font-medium border-b border-b-fuchsia-600 mt-6">
                <div className="flex gap-3">
                    <h3 className="uppercase">{filter}</h3>
                    <p className="text-sm self-start text-gray-400">(67)</p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-2 h-full">
                <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] md:grid-cols-2 auto-rows-[360px] lg:grid-cols-3 md:auto-rows-auto lg:w-2/3 gap-4 md:gap-2 md:[&>div:nth-child(5)]:col-span-full md:[&>div:nth-child(8)]:col-span-full lg:[&>div:nth-child(5)]:col-span-1 lg:[&>div:nth-child(8)]:col-span-1">
                    <Itemcard />
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
