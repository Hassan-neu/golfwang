import ItemLoading from "@/components/ui/itemLoading";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const ItemsLoading = () => {
    return (
        <main className="flex flex-col gap-2 md:gap-4 lg:gap-6 min-h-screen mt-4">
            <div className="flex justify-between text-xs ">
                <div className="flex items-center">
                    <div className="hidden lg:flex gap-1">
                        {Array.from({ length: 6 }, (_, i) => (
                            <Skeleton
                                key={i}
                                className={"py-2 px-4 w-16 rounded-none"}
                            />
                        ))}
                    </div>
                    <div className="lg:hidden">
                        <Skeleton className={"py-2 px-4 w-16 rounded-none"} />
                    </div>

                    <div className="lg:hidden">
                        <Skeleton className={"p-2 w-16 rounded-none"} />
                    </div>
                </div>
                <div className="flex items-center">
                    <Skeleton className={"py-2 px-4 w-16 rounded-none"} />
                </div>
            </div>
            <div className="pb-1 text-xl lg:text-5xl font-medium border-b mt-4 ">
                <Skeleton className={"p-2 w-16 rounded-none"} />
            </div>
            <div className="flex flex-col gap-2 h-full">
                <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] md:grid-cols-2 lg:grid-cols-5 auto-rows-auto gap-4 md:gap-3 md:gap-y-7 md:[&>a:nth-child(5)]:col-span-full md:[&>a:nth-child(8)]:col-span-full lg:[&>a:nth-child(5)]:col-span-1 lg:[&>a:nth-child(8)]:col-span-1">
                    {Array.from({ length: 10 }, (_v, i) => (
                        <ItemLoading key={i} />
                    ))}
                    <Skeleton
                        className={`hidden lg:flex col-start-4 col-end-6 row-start-1 row-end-3 rounded-none`}
                    />
                </div>
            </div>
            <Skeleton className="py-4 text-white md:self-center md:px-20 rounded-none" />
        </main>
    );
};

export default ItemsLoading;
