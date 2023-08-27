"use client";
import React from "react";
import Link from "next/link";
const Navbar = ({ className }) => {
    return (
        <div className={`px-10 py-4 border ${className ? className : ""}`}>
            <div className="flex gap-2 justify-between font-semibold">
                <div className="text-xs flex items-center">
                    <ol className="flex gap-10">
                        <li>
                            <Link href="/catalog/all">SHOP</Link>
                        </li>
                        <li>
                            <Link href="/lookbook">LOOKBOOK</Link>
                        </li>
                        <li>
                            <Link href="/info">INFO</Link>
                        </li>
                    </ol>
                </div>

                <div className="bg-yellow-400 font-extrabold px-3">
                    <Link href="/">
                        <h4>GOLF</h4>
                    </Link>
                </div>
                <div className="text-xs flex items-center">
                    <ul className="flex gap-10">
                        <li>
                            <Link href="/login">LOGIN</Link>
                        </li>
                        <li className="flex">
                            <Link href="/cart">CART</Link>
                            <p className=" text-gray-400">(0)</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
