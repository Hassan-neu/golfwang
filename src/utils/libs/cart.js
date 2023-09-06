import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
const cart = (set) => ({
    products: [
        { id: "1", name: "shoe", color: "red", price: 200, qty: 10 },
        { id: "2", name: "shirt", color: "green", price: 500, qty: 10 },
        { id: "3", name: "pants", color: "blue", price: 600, qty: 10 },
    ],
    totalPrice: 0,
    totalQty: 0,
    openCart: false,
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
    setCart: () =>
        set((prev) => ({
            openCart: !prev.openCart,
        })),
});

export const useCart = create(persist(devtools(cart), { name: "cart" }));
