import React from "react";
const CartItem = ({ children }) => {
    return (
        <div className="flex flex-col gap-4 w-1/2">
            <h2 className="text-2xl ">YOUR CART (0)</h2>
            {children}
            <div className="flex gap-2 border-b pb-5">
                <input
                    type="text"
                    name="voucher"
                    id="voucher"
                    placeholder="Discount code"
                    className="px-3 py-2 w-4/5 border border-black focus:border-2 focus:outline-none"
                />
                <button className="text-gray-400 hover:bg-black hover:text-white py-3 w-1/5 text-sm border">
                    APPLY
                </button>
            </div>
            <div className="flex justify-between pb-3 border-b text-gray-400">
                <h3 className="text-sm font-medium">DISCOUNT</h3>
                <p>$0</p>
            </div>
            <div className="flex justify-between pb-3 border-b text-gray-400">
                <h3 className="text-sm font-medium">SHIPPING</h3>
                <p>$0</p>
            </div>
            <div className="flex justify-between pb-3 border-b text-4xl text-black">
                <h3>TOTAL</h3>
                <p>$255</p>
            </div>
        </div>
    );
};

export default CartItem;
