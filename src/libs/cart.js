import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { toast } from "@/components/ui/use-toast";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import ghostSwipe from "@/utils/functions/ghostSwipe";
const CartStore = (set) => ({
    products: [],
    totalPrice: 0,
    totalCost: 0,
    totalQty: 0,
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
    updateTotalCost: (fee) =>
        set((prev) => ({ totalCost: prev.totalPrice + fee })),
});

export const useCartStore = create(devtools(CartStore));
