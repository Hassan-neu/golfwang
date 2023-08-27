"use client";
import React, { useState } from "react";

const Cart = () => {
    const [openCart, setOpenCart] = useState(false);
    return (
        <div className="flex flex-col h-screen w-[45%] py-6 px-10">
            <div className="flex justify-between pb-5 border-b">
                <h2 className="text-xl">YOUR CART (0)</h2>
                <button
                    className="text-2xl"
                    onClick={() => setOpenCart(!openCart)}
                >
                    X
                </button>
            </div>
            <div className="h-full pt-2">
                <p className="text-gray-400 text-sm">
                    Your cart is currently empty
                </p>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex justify-between text-xl py-2 border-b">
                    <h2>SUBTOTAL</h2>

                    <h4>$0</h4>
                </div>
                <div>
                    <button
                        disabled
                        className="w-full py-3 text-white font-semibold bg-[size:200%,100%] bg-right bg-gradient-to-r from-yellow-400 from-50% to-black to-50% [transition:background_.5s] hover:bg-left hover:text-black"
                    >
                        CHECKOUT
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
