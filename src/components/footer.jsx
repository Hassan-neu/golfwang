import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <div className="flex flex-col border mt-5">
            <div className="flex gap-10 overflow-scroll bg-yellow-400 p-1 text-xs font-bold">
                <p className="shrink-0">
                    FREE SHIPING FOR ALL ORDERS OVER $150
                </p>
                <p className="shrink-0">
                    FREE SHIPING FOR ALL ORDERS OVER $150
                </p>
                <p className="shrink-0">
                    FREE SHIPING FOR ALL ORDERS OVER $150
                </p>
                <p className="shrink-0">
                    FREE SHIPING FOR ALL ORDERS OVER $150
                </p>
                <p className="shrink-0">
                    FREE SHIPING FOR ALL ORDERS OVER $150
                </p>
            </div>
            <div className="flex flex-col gap-3 items-center justify-between px-2 py-3  bg-black text-white md:flex-row md:px-10 md:py-4">
                <div className="flex flex-col gap-2 self-start items-start">
                    <div className="text-3xl font-extrabold">
                        <Link href="/">
                            <h4>GOLF</h4>
                        </Link>
                    </div>
                    <div className="text-gray-400 text-sm">
                        GOLF WANG &copy; 2023
                    </div>
                </div>
                <div className="flex justify-between w-full md:gap-16 md:w-3/5 md:justify-evenly">
                    <div className="text-xs">
                        <ul className="flex flex-col gap-2">
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
                    <div className="text-xs">
                        <ul className="flex flex-col gap-2">
                            <li>
                                <Link href="/">INSTAGRAM</Link>
                            </li>
                            <li>
                                <Link href="/">TUMBLR</Link>
                            </li>
                            <li>
                                <Link href="/">TWITTER</Link>
                            </li>
                            <li>
                                <Link href="/">GOLF de Fleur</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="text-xs">
                        <ul className="flex flex-col gap-2">
                            <li>
                                <Link href="/">LOGIN</Link>
                            </li>
                            <li>
                                <Link href="/cart">CART</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
