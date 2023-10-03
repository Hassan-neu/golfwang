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
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet";
import { BsHandbag } from "react-icons/bs";
const Cart = ({ children }) => {
    // const [openPan, setOpenPan] = useState(false);
    const router = useRouter();
    const products = useCartStore((cart) => cart.products);
    const totalPrice = useCartStore((cart) => cart.totalPrice);
    const totalQty = useCartStore((cart) => cart.totalQty);
    // const closeCart = () => setTimeout(() => setOpenPan(false), 500);
    return (
        <Sheet>
            <SheetTrigger>
                <li className="hidden lg:flex">
                    CART
                    <p className=" text-gray-400">({totalQty})</p>
                </li>
                <li className="relative lg:hidden">
                    <BsHandbag size={20} />
                    <p className="absolute px-1 top-1/2 left-1/2 bg-gray-400 text-gray-900 rounded-full">
                        {totalQty}
                    </p>
                </li>
            </SheetTrigger>
            <SheetContent className="flex flex-col h-screen  sm:max-w-full  lg:w-[45%] py-4 px-2 md:px-5 lg:px-10 fixed top-0 right-0  bg-white z-50 ">
                <SheetHeader className={"pb-4 border-b"}>
                    <SheetTitle className="relative -top-1">
                        <h2 className="text-xl font-normal">
                            YOUR CART ({totalQty})
                        </h2>
                    </SheetTitle>
                </SheetHeader>
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
                    <SheetFooter>
                        <Btn
                            disabled={totalPrice <= 0}
                            onClick={() => {
                                router.push("/checkout");
                                // closeCart();
                            }}
                            className="w-full py-3 text-white font-semibold bg-[size:200%,100%] bg-right bg-gradient-to-r from-yellow-400 from-50% to-black to-50% [transition:background_.5s] hover:bg-left hover:text-black"
                        >
                            CHECKOUT
                        </Btn>
                    </SheetFooter>
                </div>
            </SheetContent>
        </Sheet>
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
