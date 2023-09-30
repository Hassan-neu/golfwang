import Banner from "@/components/pages/catalog/banner";
import ShopItems from "@/components/pages/catalog/shopItems";
import React from "react";
import { client } from "../../../../../sanity/lib/client";
import Itemcard from "@/components/pages/catalog/itemcard";
import NotFound from "@/app/not-found";
import {
    catalogProducts,
    sortProducts,
} from "../../../../../sanity/queries/queries";
const Page = async ({ params: { filter }, searchParams: { sort } }) => {
    const matcher = [
        "all",
        "accessories",
        "tops",
        "bottoms",
        "hats",
        "music",
    ].some((match) => match === filter);
    if (!matcher) {
        return <NotFound />;
    }
    const products = await catalogProducts(filter, sort);
    return (
        <div className="px-2 md:px-5 lg:px-10">
            <Banner />
            <ShopItems filter={filter} count={products.length}>
                {products?.map((product) => (
                    <Itemcard key={product._id} product={product} />
                ))}
            </ShopItems>
        </div>
    );
};

export default Page;
