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
const getCategoryProduct = async (filter) => {
    const res = await client.fetch(
        `*[_type=='product' && category._ref in *[_type=='category' && name=='${filter}']._id] | order(_createdAt desc) `,
        {
            next: {
                revalidate: 30,
            },
        }
    );
    return res;
};

export const sortProducts = async (filter, sort) => {
    const options = {
        newest: "_createdAt desc",
        priceAsc: "price asc",
        priceDesc: "price desc",
    };
    const sortBy = options[sort];
    const res = await client.fetch(
        `*[_type=='product' && category._ref in *[_type=='category' && name=='${filter}']._id] | order(${sortBy})`,
        {
            next: {
                revalidate: 30,
            },
        }
    );
    return res;
};

export const catalogProducts = async (filter, sort) => {
    if (filter && !sort) {
        if (filter === "all") {
            return getAllProducts();
        } else {
            return getCategoryProduct(filter);
        }
    } else if (filter && sort) {
        if (filter === "all") {
            return sortAllProducts(sort);
        } else {
            return sortProducts(filter, sort);
        }
    }
};
