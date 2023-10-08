import React from "react";
import { Skeleton } from "./skeleton";
export const ItemLoading = () => {
    return (
        <div className="flex flex-col gap-1">
            <Skeleton className={"w-full h-72 lg:h-64 rounded-none "} />
            <Skeleton className={"w-full h-6 rounded-none"} />
        </div>
    );
};
export default ItemLoading;
