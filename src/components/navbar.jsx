"use client";
import React, { useState } from "react";
import Link from "next/link";
import Cart from "./cart/cart";
import { HiMiniBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { useCart } from "@/utils/libs/cart";
const Navbar = () => {
    const [openNav, setOpenNav] = useState(false);
    const setCart = useCart((cart) => cart.setCart);
    const openCart = useCart((cart) => cart.openCart);
    return (
        <div className={`px-2 py-4 md:px-5 lg:px-10 lg:py-4 relative`}>
            <div className="flex gap-2 justify-between lg:font-semibold relative">
                <div
                    className="text-gray-400 lg:hidden"
                    onClick={() => setOpenNav(true)}
                >
                    <HiMiniBars3 size={25} />
                </div>

                <div
                    className={`text-sm font-normal flex absolute ${
                        openNav
                            ? "-top-4 left-0 -translate-x-3"
                            : " -top-4 -left-full -translate-x-28"
                    } px-5 py-2 md:px-4 w-screen md:w-[45%] h-screen z-50 [transition:all_.2s_linear] bg-white lg:static  lg:items-center lg:text-xs lg:w-auto lg:h-auto lg:p-0 lg:translate-x-0`}
                >
                    <ul className="flex flex-col w-full gap-4 lg:gap-10 lg:flex-row lg:font-semibold">
                        <li className="text-lg flex justify-between items-center py-2 border-b lg:hidden">
                            <div>MENU</div>
                            <div onClick={() => setOpenNav(false)}>
                                <RxCross1 size={20} />
                            </div>
                        </li>
                        <li>
                            <Link href="/catalog/all">SHOP</Link>
                        </li>
                        <li>
                            <Link href="/collections">LOOKBOOK</Link>
                        </li>
                        <li>
                            <Link href="/info">INFO</Link>
                        </li>
                    </ul>
                </div>

                <div className="ml-10 lg:ml-0 bg-yellow-400 font-extrabold px-3">
                    <Link href="/">
                        <h4>GOLF</h4>
                    </Link>
                </div>
                <div className="text-xs flex items-center">
                    <ul className="flex gap-7 items-center lg:gap-10">
                        <li className="hidden lg:block">
                            <Link href="/login">LOGIN</Link>
                        </li>
                        <li className="lg:hidden">
                            <Link href="/login">
                                <AiOutlineUser size={20} />
                            </Link>
                        </li>
                        <li className="hidden lg:flex" onClick={setCart}>
                            <button>CART</button>
                            <p className=" text-gray-400">(0)</p>
                        </li>
                        <li className="relative lg:hidden" onClick={setCart}>
                            <BsHandbag size={20} />
                            <p className="absolute px-1 top-1/2 left-1/2 bg-gray-400 text-gray-900 rounded-full">
                                0
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            {openCart && <Cart />}
        </div>
    );
};

export default Navbar;
