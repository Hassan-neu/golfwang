import Link from "next/link";
import React from "react";

const CatalogItem = ({ item, children }) => {
    return (
        <div className="flex flex-col items-center gap-2 h-full w-full border-2 bg-[#f2f2f2] bg-[url('/home/noise.png')] md:bg-none md:bg-transparent md:border-0">
            <div className="w-full flex flex-col gap-2 pt-2 h-[90%] md:border-2 md:bg-[#f2f2f2] bg-[url('/home/noise.png')]">
                <div className="w-full flex px-2 justify-between">
                    <button className="px-3 py-1 rounded-full border text-xs">
                        4 ITEMS
                    </button>
                    <div> -&gt;</div>
                </div>
                <div className=" w-full h-full relative">{children}</div>
            </div>
            <div className="p-2 uppercase text-sm font-semibold">{item}</div>
        </div>
    );
};

export default CatalogItem;
