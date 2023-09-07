import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
const StoreCart = (set) => ({
    products: [
        {
            id: 1,
            name: "Adidas Bennasi",
            color: "yellow",
            size: "XL",
            price: 50,
            qty: 2,
        },
        {
            id: 2,
            name: "Street Jumper",
            color: "black",
            size: "SM",
            price: 150,
            qty: 1,
        },
        {
            id: 3,
            name: "Argentina 1999",
            color: "Blue",
            size: "XXL",
            price: 200,
            qty: 3,
        },
        {
            id: 4,
            name: "Liverpool 1975",
            color: "red",
            size: "M",
            price: 250,
            qty: 1,
        },
    ],
    totalPrice: 0,
    totalQty: 0,
    addProduct: (product) =>
        set((prev) => ({ products: [...prev.products, product] })),
    deleteProduct: (id) =>
        set((prev) => ({
            products: prev.products.filter((product) => product.id !== id),
        })),
    updateQty: (id, qty) =>
        set((prev) => ({
            products: prev.products.map((product) =>
                product.id === id ? { ...product, itemQty: qty } : product
            ),
        })),
    updatePrice: () =>
        set((prev) => ({
            totalPrice: prev.products.reduce(
                (total, product) => total + product.price * product.qty,
                0
            ),
        })),
    updateTotalQty: () =>
        set((prev) => ({
            totalQty: prev.products.reduce(
                (total, product) => total + product.qty,
                0
            ),
        })),
});

export const useStoreCart = create(devtools(StoreCart));
