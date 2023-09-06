"use client";
import React, { useState } from "react";
import ProductCard from "./productCard";
import { useCart } from "@/utils/libs/cart";
const Cart = () => {
    const setCart = useCart((cart) => cart.setCart);
    return (
        <div className="flex flex-col h-screen w-[45%] py-6 px-10 fixed top-0 right-0 bg-white z-50 ">
            <div className="flex justify-between pb-5 border-b">
                <h2 className="text-xl">YOUR CART (0)</h2>
                <button className="text-2xl" onClick={setCart}>
                    X
                </button>
            </div>
            <div className="h-full overflow-scroll hidescroll pt-2">
                {/* <p className="text-gray-400 text-sm">
                    Your cart is currently empty
                </p> */}
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
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