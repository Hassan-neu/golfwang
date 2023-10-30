"use client";
import Btn from "@/components/shared/buttons/btn";
import React from "react";
import { useCartStore } from "@/libs/cart";
import { useVoucher } from "@/utils/hooks/handleDiscount";
const CartItem = ({ children }) => {
    const { voucher, handleChange, error, handleVoucher } = useVoucher();
    const totalQty = useCartStore((cart) => cart.totalQty);
    const totalCost = useCartStore((cart) => cart.totalCost);
    const shipping = useCartStore((cart) => cart.shipping);
    const discount = useCartStore((cart) => cart.discount);
    return (
        <div className="hidden lg:flex flex-col gap-2 w-1/2">
            <h2 className="text-xl ">YOUR CART ({totalQty}):</h2>
            <div className="flex flex-col gap-2 h-min">{children}</div>
            <div className="flex gap-2 border-b pb-5 relative">
                <input
                    type="text"
                    name="voucher"
                    id="voucher"
                    placeholder="Discount code"
                    className={`px-3 py-2 w-4/5 border border-black border-opacity-50 focus:border-opacity-100 focus:outline-none text-sm ${
                        error ? "border-red-500" : ""
                    }`}
                    onChange={handleChange}
                />
                <Btn
                    className="text-gray-400 hover:bg-black hover:text-white py-3 w-1/5 text-sm border disabled:bg-transparent disabled:hover:bg-transparent disabled:hover:text-gray-400"
                    onClick={handleVoucher}
                    disabled={!voucher}
                >
                    APPLY
                </Btn>
                <p className="text-red-500 text-xs absolute left-0 bottom-0 italic">
                    {error}
                </p>
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
