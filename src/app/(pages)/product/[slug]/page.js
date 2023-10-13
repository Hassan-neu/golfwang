import React, { Suspense } from "react";
import { client } from "../../../../../sanity/lib/client";
import SimilarProducts from "@/components/pages/product/similarProduct";
import ItemsLoading from "@/components/pages/product/itemsLoading";
import Product from "@/components/pages/product/product";
import ProductLoading from "@/components/pages/product/productLoading";
export const generateMetadata = async ({ params: { slug } }) => {
    const getProduct = async () => {
        const res = await client.fetch(
            `*[_type=='product' && slug.current=='${slug}'][0]`
        );
        return res;
    };
    const product = await getProduct();
    return {
        title: product.name.toUpperCase(),
    };
};
const Page = async ({ params: { slug } }) => {
    return (
        <div className="mt-10 flex flex-col gap-2 px-2 md:px-5 lg:px-10 min-h-screen mb-5">
            <Suspense fallback={<ProductLoading />}>
                <Product slug={slug} />
            </Suspense>
            <Suspense fallback={<ItemsLoading />}>
                <SimilarProducts slug={slug} />
            </Suspense>
        </div>
    );
};

export default Page;
