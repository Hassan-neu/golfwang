import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
const CatalogItem = ({ item, children }) => {
    return (
        <div className="flex flex-col items-center gap-2 h-full w-full border-2 bg-[#f2f2f2] bg-[url('/home/noise.png')] lg:bg-none lg:bg-transparent lg:border-0">
            <div className="w-full flex flex-col gap-2 pt-2 h-[90%] lg:border-2 lg:bg-[#f2f2f2] bg-[url('/home/noise.png')]">
                <div className="w-full flex px-2 justify-between items-center">
                    <button className="px-3 py-1 rounded-full border text-xs bg-white">
                        4 ITEMS
                    </button>
                    <BsArrowUpRight />
                </div>
                <div className=" w-full h-full relative">{children}</div>
            </div>
            <div className="p-2 uppercase text-sm font-semibold">{item}</div>
        </div>
    );
};

export default CatalogItem;
