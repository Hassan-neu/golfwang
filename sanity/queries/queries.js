import { client } from "../lib/client";

const getAllProducts = async (sort) => {
    const options = {
        newest: "_createdAt desc",
        priceAsc: "price asc",
        priceDesc: "price desc",
    };
    const sortBy = options[sort];
    const query = () =>
        sort
            ? `*[_type=='product'] | order(${sortBy})`
            : `*[_type=='product'] | order(_createdAt desc)`;

    const res = await client.fetch(query(sort), {
        next: {
            revalidate: 30,
        },
    });
    return res;
};
// const sortAllProducts = async (sort) => {
//     const options = {
//         newest: "_createdAt desc",
//         priceAsc: "price asc",
//         priceDesc: "price desc",
//     };
//     const sortBy = options[sort];
//     const res = await client.fetch(`*[_type=='product'] | order(${sortBy})`, {
//         next: {
//             revalidate: 30,
//         },
//     });
//     return res;
// };
const getCategoryProduct = async (category, sort, filter) => {
    const options = {
        newest: "_createdAt desc",
        priceAsc: "price asc",
        priceDesc: "price desc",
    };
    const sortBy = options[sort];
    const query = () => {
        if (!sort && !filter) {
            return `*[_type=='product' && category._ref in *[_type=='category' && name=='${category}']._id] | order(_createdAt desc) `;
        } else if (sort && !filter) {
            return `*[_type=='product' && category._ref in *[_type=='category' && name=='${category}']._id] | order(${sortBy})`;
        } else if (!sort && filter) {
            return `*[_type=='product' && category._ref in *[_type=='category' && name=='${category}']._id && class in ${JSON.stringify(
                filter.split(",")
            )}]`;
        } else {
            return `*[_type=='product' && category._ref in *[_type=='category' && name=='${category}']._id && class in ${JSON.stringify(
                filter.split(",")
            )}] | order(${sortBy})`;
        }
    };
    const res = await client.fetch(query(category, sort, filter), {
        next: {
            revalidate: 30,
        },
    });
    return res;
};

// export const sortProducts = async (category, sort) => {
//     const options = {
//         newest: "_createdAt desc",
//         priceAsc: "price asc",
//         priceDesc: "price desc",
//     };
//     const sortBy = options[sort];
//     const res = await client.fetch(
//         `*[_type=='product' && category._ref in *[_type=='category' && name=='${category}']._id] | order(${sortBy})`,
//         {
//             next: {
//                 revalidate: 30,
//             },
//         }
//     );
//     return res;
// };

export const catalogProducts = async (category, sort, filter) =>
    category === "all"
        ? getAllProducts(sort)
        : getCategoryProduct(category, sort, filter);
