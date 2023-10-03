"use client";
import React from "react";
import ProductCard from "./productCard";
import { RxCross2 } from "react-icons/rx";
import { useCartStore } from "@/libs/cart";
import Btn from "../shared/buttons/btn";
import { useRouter } from "next/navigation";
import { PiShoppingCartThin } from "react-icons/pi";
import { FaRegFaceMeh } from "react-icons/fa6";
import Link from "next/link";
const Cart = ({ setOpenCart }) => {
    const router = useRouter();
    const products = useCartStore((cart) => cart.products);
    const totalPrice = useCartStore((cart) => cart.totalPrice);
    const totalQty = useCartStore((cart) => cart.totalQty);
    return (
        <div className="flex flex-col h-screen w-full lg:w-[45%] py-4 px-2 md:px-5 lg:px-10 fixed top-0 right-0  bg-white z-50 ">
            <div className="flex justify-between pb-4 border-b">
                <h2 className="text-xl">YOUR CART ({totalQty})</h2>
                <Btn className="text-2xl" onClick={() => setOpenCart(false)}>
                    <RxCross2 size={25} />
                </Btn>
            </div>
            <div className="h-full flex flex-col overflow-scroll hidescroll pt-2">
                {products.length <= 0 ? (
                    <EmptyCart />
                ) : (
                    products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))
                )}
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex justify-between text-xl py-2 border-b">
                    <h2>SUBTOTAL</h2>

                    <h4>${totalPrice}</h4>
                </div>
                <div>
                    <Btn
                        disabled={totalPrice <= 0}
                        onClick={() => {
                            router.push("/checkout");
                            setTimeout(() => setOpenCart(false), 500);
                        }}
                        className="w-full py-3 text-white font-semibold bg-[size:200%,100%] bg-right bg-gradient-to-r from-yellow-400 from-50% to-black to-50% [transition:background_.5s] hover:bg-left hover:text-black"
                    >
                        CHECKOUT
                    </Btn>
                </div>
            </div>
        </div>
    );
};

const EmptyCart = () => {
    return (
        <div className="m-auto text-lg flex flex-col items-center">
            <PiShoppingCartThin size={150} fill="rgba(156, 163, 175,0.5)" />
            <div className="text-sm uppercase">
                Your cart is currently empty
            </div>
            <div>
                <Link
                    href={"/catalog/all"}
                    className="underline uppercase text-sm"
                >
                    start shopping
                </Link>
            </div>
        </div>
    );
};

export default Cart;
