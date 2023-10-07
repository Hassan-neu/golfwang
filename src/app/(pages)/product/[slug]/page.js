import React from "react";
import { client } from "../../../../../sanity/lib/client";
import SimilarProducts from "@/components/pages/product/similarProduct";
import SingleProduct from "@/components/pages/product/singleProduct";
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
                <SimilarProducts slug={slug} category={product.category.name} />
            </SingleProduct>
        </>
    );
};

export default Page;
