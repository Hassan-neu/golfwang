import { client } from "../lib/client";

const getAllProducts = async (sort, page) => {
    const start = page ? (Number(page) - 1) * 10 : 0;
    const end = page ? start + 10 : 10;
    const options = {
        newest: "_createdAt desc",
        priceAsc: "price asc",
        priceDesc: "price desc",
    };
    const sortBy = options[sort];
    const query = sort
        ? `*[_type=='product'] | order(${sortBy})[${start}..${end}]`
        : `*[_type=='product'] | order(_createdAt desc)[${start}..${end}]`;

    const res = await client.fetch(query, {
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
const getCategoryProduct = async (category, sort, filter, page) => {
    const start = page ? (Number(page) - 1) * 10 : 0;
    const end = page ? start + 10 : 10;
    const options = {
        newest: "_createdAt desc",
        priceAsc: "price asc",
        priceDesc: "price desc",
    };
    const sortBy = options[sort];
    const query = () => {
        if (!sort && !filter) {
            return `*[_type=='product' && category._ref in *[_type=='category' && name=='${category}']._id] | order(_createdAt desc)[${start}..${end}] `;
        } else if (sort && !filter) {
            return `*[_type=='product' && category._ref in *[_type=='category' && name=='${category}']._id] | order(${sortBy})[${start}..${end}]`;
        } else if (!sort && filter) {
            return `*[_type=='product' && category._ref in *[_type=='category' && name=='${category}']._id && class in ${JSON.stringify(
                filter.split(",")
            )}][${start}..${end}]`;
        } else {
            return `*[_type=='product' && category._ref in *[_type=='category' && name=='${category}']._id && class in ${JSON.stringify(
                filter.split(",")
            )}] | order(${sortBy})[${start}..${end}]`;
        }
    };
    const res = await client.fetch(query(), {
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
export const getAllPages = async () => {
    const query = `count(*[_type=='product'])`;
    const res = await client.fetch(query, {
        next: {
            revalidate: 30,
        },
    });
    return res;
};
const getCategoryPages = async (category, filter) => {
    const query = () => {
        if (filter) {
            return `count(*[_type=='product' && category._ref in *[_type=='category' && name=='${category}']._id && class in ${JSON.stringify(
                filter.split(",")
            )}])`;
        } else {
            return `count(*[_type=='product' && category._ref in *[_type=='category' && name=='${category}']._id])`;
        }
    };
    const res = await client.fetch(query(), {
        next: {
            revalidate: 30,
        },
    });
    return res;
};
export const catalogProducts = (category, sort, filter, page) =>
    category === "all"
        ? getAllProducts(sort, page)
        : getCategoryProduct(category, sort, filter, page);

export const getTotalPages = (category, filter) => {
    category === "all" ? getAllPages() : getCategoryPages(category, filter);
};
