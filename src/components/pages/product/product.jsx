import React from "react";
import SingleProduct from "./singleProduct";
import { client } from "../../../../sanity/lib/client";

const Product = async ({ slug }) => {
    const getProduct = async () => {
        const res = await client.fetch(
            `*[_type=='product' && slug.current=='${slug}'][0]{...,category->}`
        );
        return res;
    };
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const product = await getProduct();
    return <SingleProduct product={product} />;
};

export default Product;
