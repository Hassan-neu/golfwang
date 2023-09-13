export const music = {
    name: "music",
    title: "Music",
    type: "document",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Product Name",
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
