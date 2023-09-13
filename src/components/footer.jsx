import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <div className="flex flex-col border mt-5">
            <div className="bg-yellow-300 p-1 text-xs overflow-hidden font-bold">
                <div className="w-full flex gap-10  marquee hidescroll">
                    <p className="shrink-0">
                        FREE SHIPING FOR ALL ORDERS OVER $150
                    </p>
                    <p>&#x25A0;</p>
                    <p className="shrink-0">
                        FREE SHIPING FOR ALL ORDERS OVER $150
                    </p>
                    <p>&#x25A0;</p>
                    <p className="shrink-0">
                        FREE SHIPING FOR ALL ORDERS OVER $150
                    </p>
                    <p>&#x25A0;</p>
                    <p className="shrink-0">
                        FREE SHIPING FOR ALL ORDERS OVER $150
                    </p>
                    <p>&#x25A0;</p>
                    <p className="shrink-0">
                        FREE SHIPING FOR ALL ORDERS OVER $150
                    </p>
                    <p>&#x25A0;</p>
                    <p className="shrink-0">
                        FREE SHIPING FOR ALL ORDERS OVER $150
                    </p>
                    <p>&#x25A0;</p>
                    <p className="shrink-0">
                        FREE SHIPING FOR ALL ORDERS OVER $150
                    </p>
                    <p>&#x25A0;</p>
                    <p className="shrink-0">
                        FREE SHIPING FOR ALL ORDERS OVER $150
                    </p>
                    <p>&#x25A0;</p>
                    <p className="shrink-0">
                        FREE SHIPING FOR ALL ORDERS OVER $150
                    </p>
                    <p>&#x25A0;</p>
                    <p className="shrink-0">
                        FREE SHIPING FOR ALL ORDERS OVER $150
                    </p>
                    <p>&#x25A0;</p>
                    <p className="shrink-0">
                        FREE SHIPING FOR ALL ORDERS OVER $150
                    </p>
                    <p>&#x25A0;</p>
                    <p className="shrink-0">
                        FREE SHIPING FOR ALL ORDERS OVER $150
                    </p>
                    <p>&#x25A0;</p>
                    <p className="shrink-0">
                        FREE SHIPING FOR ALL ORDERS OVER $150
                    </p>
                    <p>&#x25A0;</p>
                    <p className="shrink-0">
                        FREE SHIPING FOR ALL ORDERS OVER $150
                    </p>
                    <p>&#x25A0;</p>
                    <p className="shrink-0">
                        FREE SHIPING FOR ALL ORDERS OVER $150
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-3 items-center justify-between px-2 py-3  bg-black text-white lg:flex-row md:px-5 lg:px-10 lg:py-4">
                <div className="flex flex-col gap-2 self-start items-start">
                    <div className="text-3xl font-extrabold">
                        <Link href="/">
                            <h1>GOLF</h1>
                        </Link>
                    </div>
                    <div className="text-gray-400 text-sm">
                        GOLF WANG &copy; 2023
                    </div>
                </div>
                <div className="flex justify-between w-full lg:gap-16 lg:w-3/5 lg:justify-evenly">
                    <div className="text-xs">
                        <ul className="flex flex-col gap-2">
                            <li>
                                <Link href="/catalog/all">SHOP</Link>
                            </li>
                            <li>
                                <Link href="/collections/w2022">LOOKBOOK</Link>
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
