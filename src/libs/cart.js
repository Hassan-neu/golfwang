import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
const CartStore = (set) => ({
    products: [],
    totalPrice: 0,
    totalQty: 0,
    addProduct: (product) =>
        set((prev) => ({ products: [...prev.products, product] })),
    deleteProduct: (id) =>
        set((prev) => ({
            products: prev.products.filter((product) => product._id !== id),
        })),
    itemTotal: (id) =>
        set((prev) => ({
            products: prev.products.map((product) =>
                product._id === id
                    ? { ...product, itemTotal: product.qty * product.price }
                    : product
            ),
        })),
    updateQty: (id, qty) =>
        set((prev) => ({
            products: prev.products.map((product) =>
                product._id === id ? { ...product, qty } : product
            ),
        })),
    updatePrice: () =>
        set((prev) => ({
            totalPrice: prev.products.reduce(
                (total, product) => total + product.itemTotal,
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

export const useCartStore = create(devtools(CartStore));
