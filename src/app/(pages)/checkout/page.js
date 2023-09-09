"use client";
import ProductCard from "@/components/pages/checkout/productCard";
import CartItem from "@/components/pages/checkout/cartitem";
import DeliveryDetails from "@/components/pages/checkout/deliveryDetails";
import React, { useState } from "react";
import { useStoreCart } from "@/libs/cart";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const Page = () => {
    const [openCart, setOpenCart] = useState(false);
    const products = useStoreCart((cart) => cart.products);
    return (
        <div className="flex flex-col gap-6 px-2 md:px-5 lg:px-10 min-h-screen">
            <div className="text-4xl md:text-6xl font-semibold border-b py-4">
                <h1>CHECKOUT</h1>
            </div>
            <div className="flex flex-col gap-2 lg:hidden">
                <button
                    className="text-2xl flex justify-between"
                    onClick={() => setOpenCart(!openCart)}
                >
                    <span>YOUR CART (0)</span>
                    <span>
                        {openCart ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </span>
                </button>
                {openCart && (
                    <div className="flex flex-col gap-2">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
            <div className="flex gap-4 h-full">
                <DeliveryDetails />
                <CartItem>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </CartItem>
            </div>
        </div>
    );
};

export default Page;
