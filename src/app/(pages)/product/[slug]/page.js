import React, { Suspense } from "react";
import { client } from "../../../../../sanity/lib/client";
import SimilarProducts from "@/components/pages/product/similarProduct";
import SingleProduct from "@/components/pages/product/singleProduct";
import ItemsLoading from "@/components/pages/product/itemsLoading";
export const generateMetadata = async ({ params: { slug } }) => {
    const getProduct = async () => {
        const res = await client.fetch(
            `*[_type=='product' && slug.current=='${slug}'][0]{...,category->}`
        );
        return res;
    };
    const product = await getProduct();
    return {
        title: product.name.toUpperCase(),
    };
};
const Page = async ({ params: { slug } }) => {
    const getProduct = async () => {
        const res = await client.fetch(
            `*[_type=='product' && slug.current=='${slug}'][0]{...,category->}`
        );
        return res;
    };
    const product = await getProduct();
    return (
        <>
            <SingleProduct product={product}>
                <Suspense fallback={<ItemsLoading />}>
                    <SimilarProducts
                        slug={slug}
                        category={product.category.name}
                    />
                </Suspense>
            </SingleProduct>
        </>
    );
};

export default Page;
