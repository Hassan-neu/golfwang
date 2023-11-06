import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { toast } from "@/components/ui/use-toast";
import ghostSwipe from "@/utils/functions/ghostSwipe";
const CartStore = (set) => ({
    products: [],
    totalPrice: 0,
    totalCost: 0,
    shipping: 0,
    discount: 0,
    totalQty: 0,
    successModal: false,
    addProduct: (product, ghost) =>
        set((prev) => {
            const checkItem = prev.products.some(
                (pp) => pp._id === product._id
            );
            if (checkItem) {
                return toast({
                    description: `${product.name.toUpperCase()} is already in cart`,
                });
            }
            return (
                ghostSwipe(ghost),
                toast({
                    description: `${product.name.toUpperCase()} added to cart`,
                }),
                { products: [...prev.products, product] }
            );
        }),
    resetProducts: () =>
        set({
            products: [],
            totalPrice: 0,
            totalCost: 0,
            shipping: 0,
            discount: 0,
            totalQty: 0,
        }),
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
    updateTotalCost: () =>
        set((prev) => ({
            totalCost: prev.totalPrice + prev.shipping - prev.discount,
        })),
    updateShipping: (ship) =>
        set(ship === "international" ? { shipping: 30 } : { shipping: 0 }),
    updateDiscount: (value) => set({ discount: value }),
    setSuccessModal: () =>
        set((prev) => ({ successModal: !prev.successModal })),
});

export const useCartStore = create(
    persist(devtools(CartStore), { name: "cart" })
);
