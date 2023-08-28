import Link from "next/link";
import React from "react";

const CatalogItem = ({ item, children }) => {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="w-full flex flex-col gap-2 pt-2 h-full border-2">
                <div className="w-full flex px-2 justify-between">
                    <button className="px-3 py-1 rounded-full border text-xs">
                        4 ITEMS
                    </button>
                    <div> -&gt;</div>
                </div>
                <div className=" w-full h-full">{children}</div>
            </div>
            <div className="h-[30px] uppercase text-sm font-semibold">
                {item}
            </div>
        </div>
    );
};

export default CatalogItem;
