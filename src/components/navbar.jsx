"use client";
import React, { useState } from "react";
import Link from "next/link";
import Cart from "./cart/cart";
import { HiMiniBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { signIn } from "next-auth/react";
import { useCartStore } from "@/libs/cart";
import { useSession } from "next-auth/react";
import Btn from "./shared/buttons/btn";
import { SheetTrigger } from "./ui/sheet";
const Navbar = () => {
    const { data: session } = useSession();
    const [openNav, setOpenNav] = useState(false);
    const totalQty = useCartStore((cart) => cart.totalQty);
    const slideNav = openNav ? "left-0" : "-left-[100vw]";
    return (
        <div
            className={`px-2 py-4 md:px-5 lg:px-10 lg:py-4 relative lg:sticky lg:top-0 lg:bg-white lg:z-50`}
        >
            <div className="flex gap-2 justify-between lg:font-semibold relative">
                <div
                    className="text-gray-400 lg:hidden"
                    onClick={() => setOpenNav(!openNav)}
                >
                    <HiMiniBars3 size={25} />
                </div>

                <div
                    className={`text-sm font-normal flex fixed  top-0 ${slideNav} px-5 py-2 md:px-4 w-screen md:w-[45%] h-screen z-50 [transition:left_.2s_linear] bg-white lg:static  lg:items-center lg:text-xs lg:w-auto lg:h-auto lg:p-0 lg:translate-x-0`}
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
                            <Link href="/collections/w2022">LOOKBOOK</Link>
                        </li>
                        <li>
                            <Link href="/information-page">INFO</Link>
                        </li>
                    </ul>
                </div>

                <div className="ml-10 lg:ml-0 bg-yellow-300 font-extrabold px-3">
                    <Link href="/">
                        <h4>GOLF</h4>
                    </Link>
                </div>
                <div className="text-xs flex items-center">
                    <ul className="flex gap-7 items-center lg:gap-10">
                        <li className="hidden lg:block">
                            <Btn onClick={() => signIn("google")}>LOGIN</Btn>
                        </li>
                        <li className="lg:hidden">
                            <Btn onClick={() => signIn("google")}>
                                <AiOutlineUser size={20} />
                            </Btn>
                        </li>
                        <Cart />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
