"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HiMiniBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
const Navbar = ({ className }) => {
    const [openNav, setOpenNav] = useState(false);
    return (
        <div
            className={`px-2 py-4 ${
                className ? className : ""
            } md:px-10 md:py-4`}
        >
            <div className="flex gap-2 justify-between md:font-semibold relative">
                <div
                    className="text-gray-400 md:hidden"
                    onClick={() => setOpenNav(true)}
                >
                    <HiMiniBars3 size={25} />
                </div>

                <div
                    className={`text-sm font-normal flex absolute ${
                        openNav
                            ? "-top-4 left-0 -translate-x-3"
                            : " -top-4 -left-96 -translate-x-28"
                    } px-3 py-2 w-screen h-screen z-50 [transition:all_.2s_ease-in-out] bg-white md:static sm:p-0 md:items-center md:text-xs md:w-auto md:h-auto md:left-0 top-0 md:translate-x-0`}
                >
                    <ul className="flex flex-col w-full gap-3 md:gap-10 md:flex-row md:font-semibold">
                        <div className="text-lg flex justify-between items-center py-1 border-b md:hidden">
                            <div>MENU</div>
                            <div onClick={() => setOpenNav(false)}>
                                <RxCross1 size={20} />
                            </div>
                        </div>
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

                <div className="ml-10 md:ml-0 bg-yellow-400 font-extrabold px-3">
                    <Link href="/">
                        <h4>GOLF</h4>
                    </Link>
                </div>
                <div className="text-xs flex items-center">
                    <ul className="flex gap-7 items-center md:gap-10">
                        <li className="hidden md:block">
                            <Link href="/login">LOGIN</Link>
                        </li>
                        <li className="md:hidden">
                            <Link href="/login">
                                <AiOutlineUser size={20} />
                            </Link>
                        </li>
                        <li className="hidden md:flex">
                            <Link href="/cart">CART</Link>
                            <p className=" text-gray-400">(0)</p>
                        </li>
                        <li className="relative md:hidden">
                            <Link href="/cart">
                                <BsHandbag size={20} />
                                <p className="absolute px-1 top-1/2 left-1/2 bg-gray-400 text-gray-900 rounded-full">
                                    0
                                </p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
