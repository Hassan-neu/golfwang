import { useCartStore } from "@/libs/cart";
import { useEffect, useState } from "react";

export const useCoupon = () => {
    const updateDiscount = useCartStore((cart) => cart.updateDiscount);
    const totalPrice = useCartStore((cart) => cart.totalPrice);
    const updateTotalCost = useCartStore((cart) => cart.updateTotalCost);
    const [coupon, setCoupon] = useState("");
    const [error, setError] = useState("");
    useEffect(() => {
        if (totalPrice < 1000) {
            updateDiscount(0);
            updateTotalCost();
        }
    }, [totalPrice, updateDiscount, updateTotalCost]);
    const handleCoupon = async () => {
        const res = await fetch(
            `/api/coupon?code=${coupon}&price=${totalPrice}`
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
    const handleChange = (e) => setCoupon(e.target.value);
    return {
        coupon,
        handleChange,
        error,
        handleCoupon,
    };
};
