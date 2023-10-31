import { GiTicket } from "react-icons/gi";
export const coupon = {
    name: "coupon",
    title: "Coupon",
    type: "document",
    icon: GiTicket,
    fields: [
        {
            name: "code",
            title: "Code",
            type: "string",
        },
        {
            name: "value",
            title: "Value",
            type: "number",
        },
        {
            name: "expirationDate",
            title: "Expiration Date",
            type: "date",
        },
        {
            name: "redeemed",
            title: "Redeemed",
            type: "boolean",
        },
        {
            name: "redeemedDate",
            title: "Redeemed Date",
            type: "date",
        },
    ],
};
