"use client";
import ProductCard from "@/components/pages/checkout/productCard";
import CartItem from "@/components/pages/checkout/cartitem";
import DeliveryDetails from "@/components/pages/checkout/deliveryDetails";
import React, { useState } from "react";
import { useCartStore } from "@/libs/cart";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import useWindowSize from "@/utils/functions/windowSize";
import Btn from "@/components/shared/buttons/btn";
import Modal from "@/components/pages/checkout/modal";
const Page = () => {
    const { smallScreen, largeScreen } = useWindowSize();
    const [openCart, setOpenCart] = useState(false);
    const products = useCartStore((cart) => cart.products);
    const totalQty = useCartStore((cart) => cart.totalQty);
    const showModal = useCartStore((cart) => cart.successModal);
    return (
        <div className="flex flex-col gap-6 px-2 md:px-5 lg:px-10 min-h-screen mb-5">
            <div className="text-4xl md:text-6xl font-semibold border-b py-4">
                <h1>CHECKOUT</h1>
            </div>
            {smallScreen && (
                <div className="flex flex-col gap-2">
                    <Btn
                        className="text-xl flex justify-between border-0"
                        onClick={() => setOpenCart(!openCart)}
                    >
                        <span>YOUR CART ({totalQty})</span>
                        <span>
                            {openCart ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </span>
                    </Btn>
                    {openCart && (
                        <div className="flex flex-col gap-2">
                            {products.map((product) => (
                                <ProductCard
                                    key={product._id}
                                    product={product}
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}

            <div className="flex gap-4 h-full">
                <DeliveryDetails />
                {largeScreen && (
                    <CartItem>
                        {products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </CartItem>
                )}
            </div>
            {showModal && <Modal />}
        </div>
    );
};

export default Page;
