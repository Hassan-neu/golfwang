import ItemLoading from "@/components/ui/itemLoading";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const ItemsLoading = () => {
    return (
        <div className="flex flex-col gap-2 mt-16">
            <div className="flex justify-between">
                <div className="text-xl md:text-4xl font-medium">
                    <h2>YOU MAY ALSO LIKE</h2>
                </div>
                <Skeleton className="px-2 py-1 w-32 hidden md:block" />
            </div>
            <div className="grid grid-cols-5 auto-rows-auto gap-3 py-2 ">
                {Array.from({ length: 4 }, (_, i) => (
                    <ItemLoading key={i} />
                ))}
            </div>
            <Skeleton className="px-2 self-stretch py-4 md:hidden" />
        </div>
    );
};

export default ItemsLoading;
