import Banner from "@/components/pages/catalog/banner";
import ShopItems from "@/components/pages/catalog/shopItems";
import React from "react";
import { client } from "../../../../../sanity/lib/client";
import Itemcard from "@/components/pages/catalog/itemcard";
const Page = async ({ params: { filter } }) => {
    const fetchProducts = async () => {
        const res = await client.fetch(
            `*[_type=='product' && category._ref in *[_type=='category' && name=='${filter}']._id]`,
            {
                next: {
                    revalidate: 30,
                },
            }
        );
        return res;
    };
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const products = await fetchProducts();

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
