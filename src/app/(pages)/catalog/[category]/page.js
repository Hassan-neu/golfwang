import Banner from "@/components/pages/catalog/banner";
import ShopItems from "@/components/pages/catalog/shopItems";
import React, { Suspense } from "react";
import NotFound from "@/app/not-found";
import ItemsLoading from "@/components/pages/catalog/itemsLoading";

export const metadata = {
    title: "SHOP",
};
const Page = async ({ params: { category }, searchParams }) => {
    const matcher = [
        "all",
        "accessories",
        "tops",
        "bottoms",
        "hats",
        "music",
    ].some((match) => match === category);
    if (!matcher) {
        return <NotFound />;
    }
    return (
        <div className="px-2 md:px-5 lg:px-10">
            <Banner />
            <Suspense fallback={<ItemsLoading />}>
                <ShopItems category={category} searchParams={searchParams} />
            </Suspense>
        </div>
    );
};

export default Page;
