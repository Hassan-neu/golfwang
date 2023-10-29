"use client";
import Btn from "@/components/shared/buttons/btn";
import React, { useState } from "react";
import { useCartStore } from "@/libs/cart";
const CartItem = ({ children }) => {
    const totalQty = useCartStore((cart) => cart.totalQty);
    const totalCost = useCartStore((cart) => cart.totalCost);
    const shipping = useCartStore((cart) => cart.shipping);
    const updateTotalCost = useCartStore((cart) => cart.updateTotalCost);
    const discount = useCartStore((cart) => cart.discount);
    const updateDiscount = useCartStore((cart) => cart.updateDiscount);
    const [voucher, setVoucher] = useState("");
    const handleVoucher = async () => {
        const data = await fetch(`/api/voucher?code=${voucher}`);
        const res = await data.json();
        updateDiscount(res.value);
        updateTotalCost();
    };
    return (
        <div className="hidden lg:flex flex-col gap-2 w-1/2">
            <h2 className="text-xl ">YOUR CART ({totalQty}):</h2>
            <div className="flex flex-col gap-2 h-min">{children}</div>
            <div className="flex gap-2 border-b pb-5">
                <input
                    type="text"
                    name="voucher"
                    id="voucher"
                    placeholder="Discount code"
                    className="px-3 py-2 w-4/5 border border-black border-opacity-50 focus:border-opacity-100 focus:outline-none text-sm"
                    onChange={(e) => setVoucher(e.target.value)}
                />
                <Btn
                    className="text-gray-400 lg:hover:bg-black lg:hover:text-white py-3 w-1/5 text-sm border disabled:bg-transparent lg:disabled:hover:bg-transparent lg:disabled:hover:text-gray-400"
                    onClick={handleVoucher}
                    disabled={!voucher}
                >
                    APPLY
                </Btn>
            </div>
            <div className="flex justify-between pb-3 border-b text-gray-400">
                <h3 className="text-sm font-medium">DISCOUNT</h3>
                <p>$&nbsp;{discount}</p>
            </div>
            <div className="flex justify-between pb-3 border-b text-gray-400">
                <h3 className="text-sm font-medium">SHIPPING</h3>
                <p>$&nbsp;{shipping}</p>
            </div>
            <div className="flex justify-between pb-3 border-b text-4xl text-black">
                <h3>TOTAL</h3>
                <p>$&nbsp;{totalCost}</p>
            </div>
        </div>
    );
};

export default CartItem;
