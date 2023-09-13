export const accessories = {
    name: "accessories",
    title: "Accessories",
    type: "document",
    fields: [
        {
            name: "name",
            type: "string",
            title: "name",
        },
        {
            name: "price",
            title: "Price",
            type: "number",
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
            to: [{ name: "categories" }],
        },
        {
            name: "colors",
            title: "Colors",
            type: "array",
            of: [{ type: "string" }],
        },
        {
            name: "sizes",
            title: "Sizes",
            type: "array",
            of: [{ type: "string" }],
        },
        {
            name: "images",
            title: "Images",
            type: "array",
            of: [{ type: "image" }],
            options: {
                hotspot: true,
            },
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 40,
            },
        },
    ],
};
