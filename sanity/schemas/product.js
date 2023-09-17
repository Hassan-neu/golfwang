import { AiOutlineShoppingCart } from "react-icons/ai";
export const product = {
    name: "product",
    title: "Product",
    type: "document",
    icon: AiOutlineShoppingCart,
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            validation: (rule) => rule.required(),
        },
        {
            name: "price",
            title: "Price",
            type: "number",
            validation: (rule) => rule.required(),
        },
        {
            name: "description",
            title: "Description",
            type: "string",
        },
        {
            name: "category",
            title: "Category",
            type: "reference",
            to: [{ type: "category" }],
            validation: (rule) => rule.required(),
        },
        {
            name: "colors",
            title: "Colors",
            type: "array",
            of: [{ type: "string" }],
            validation: (rule) => rule.required(),
        },
        {
            name: "sizes",
            title: "Sizes",
            type: "array",
            of: [{ type: "string" }],
            validation: (rule) => rule.required(),
        },
        {
            name: "images",
            title: "Images",
            type: "array",
            of: [{ type: "image" }],
            options: {
                hotspot: true,
            },
            validation: (rule) => rule.required(),
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 40,
            },
            validation: (rule) => rule.required(),
        },
    ],
};
