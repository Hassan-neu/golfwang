import { useCartStore } from "@/libs/cart";
import { useState } from "react";

export const useVoucher = () => {
    const updateDiscount = useCartStore((cart) => cart.updateDiscount);
    const totalPrice = useCartStore((cart) => cart.totalPrice);
    const updateTotalCost = useCartStore((cart) => cart.updateTotalCost);
    const [voucher, setVoucher] = useState("");
    const [error, setError] = useState("");

    const handleVoucher = async () => {
        const res = await fetch(
            `/api/voucher?code=${voucher}&price=${totalPrice}`
        );
        const data = await res.json();
        if (res.ok) {
            updateDiscount(data.value);
            updateTotalCost();
            setError("");
        } else {
            setError(data.error);
            console.log(data.error);
        }
    };
    const handleChange = (e) => setVoucher(e.target.value);
    return {
        voucher,
        handleChange,
        error,
        handleVoucher,
    };
};
