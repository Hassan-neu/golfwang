import Banner from "@/components/pages/catalog/banner";
import ShopItems from "@/components/pages/catalog/shopItems";
import React, { Suspense } from "react";
import { client } from "../../../../../sanity/lib/client";
import Itemcard from "@/components/pages/catalog/itemcard";
import NotFound from "@/app/not-found";
import { catalogProducts } from "../../../../../sanity/queries/queries";
const Page = async ({
    params: { category },
    searchParams: { sort, filter },
}) => {
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
    const products = await catalogProducts(category, sort, filter);
    return (
        <div className="px-2 md:px-5 lg:px-10">
            <Banner />

            <ShopItems category={category} count={products.length}>
                {products?.map((product) => (
                    <Itemcard key={product._id} product={product} />
                ))}
            </ShopItems>
        </div>
    );
};

export default Page;
