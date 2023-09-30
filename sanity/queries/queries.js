import { client } from "../lib/client";

const getAllProducts = async () => {
    const res = await client.fetch(
        `*[_type=='product'] |order(_createdAt desc)`,
        {
            next: {
                revalidate: 30,
            },
        }
    );
    return res;
};
const sortAllProducts = async (sort) => {
    const options = {
        newest: "_createdAt desc",
        priceAsc: "price asc",
        priceDesc: "price desc",
    };
    const sortBy = options[sort];
    const res = await client.fetch(`*[_type=='product'] | order(${sortBy})`, {
        next: {
            revalidate: 30,
        },
    });
    return res;
};
const getCategoryProduct = async (category) => {
    const res = await client.fetch(
        `*[_type=='product' && category._ref in *[_type=='category' && name=='${category}']._id] | order(_createdAt desc) `,
        {
            next: {
                revalidate: 30,
            },
        }
    );
    return res;
};

export const sortProducts = async (category, sort) => {
    const options = {
        newest: "_createdAt desc",
        priceAsc: "price asc",
        priceDesc: "price desc",
    };
    const sortBy = options[sort];
    const res = await client.fetch(
        `*[_type=='product' && category._ref in *[_type=='category' && name=='${category}']._id] | order(${sortBy})`,
        {
            next: {
                revalidate: 30,
            },
        }
    );
    return res;
};

export const catalogProducts = async (category, sort) => {
    if (category && !sort) {
        if (category === "all") {
            return getAllProducts();
        } else {
            return getCategoryProduct(category);
        }
    } else if (category && sort) {
        if (category === "all") {
            return sortAllProducts(sort);
        } else {
            return sortProducts(category, sort);
        }
    }
};
