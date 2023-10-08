import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const ProductLoading = () => {
    return (
        <>
            <div className="text-xs font-semibold">
                <div className="flex gap-2 items-center">
                    <Skeleton className={"h-5 w-14"} />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 h-full">
                <div className="flex lg:w-3/5 h-full md:h-[80vh] lg:h-screen relative">
                    <Skeleton className="w-full h-80 md:h-full" />
                </div>
                <div className="flex flex-col gap-7 lg:gap-14 lg:w-2/5">
                    <div className="flex flex-col gap-1">
                        <Skeleton className={"h-10"} />
                        <Skeleton className={"h-5 w-10"} />
                    </div>
                    <div className="flex flex-col">
                        <div className=" border-t flex gap-2 flex-col md:flex-row justify-between lg:items-center lg:text-base py-2 lg:py-5">
                            <Skeleton className={"h-5 w-10"} />
                            <div className="flex gap-1">
                                <Skeleton className={"h-5 w-10"} />
                                <Skeleton className={"h-5 w-10"} />
                                <Skeleton className={"h-5 w-10"} />
                            </div>
                        </div>
                        <div className="border-y flex flex-col gap-2 md:flex-row justify-between lg:items-center text-xs lg:text-base py-2 lg:py-5">
                            <Skeleton className={"h-5 w-10"} />
                            <div className="flex gap-1">
                                <Skeleton className={"h-5 w-10"} />
                                <Skeleton className={"h-5 w-10"} />
                                <Skeleton className={"h-5 w-10"} />
                            </div>
                        </div>
                        <Skeleton className={"h-5 w-14 self-start mt-3"} />
                    </div>
                    <Skeleton className={"h-11"} />
                    <div className="flex flex-col gap-1">
                        <Skeleton className={"h-4"} />
                        <Skeleton className={"h-4"} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductLoading;
