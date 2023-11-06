"use client";
import { Cross1Icon } from "@radix-ui/react-icons";
import React from "react";
import { BiCheckCircle } from "react-icons/bi";
import { useCartStore } from "@/libs/cart";
const Modal = () => {
    const setModal = useCartStore((cart) => cart.setSuccessModal);
    return (
        <div className="h-screen w-screen left-0 z-[99] bg-yellow-400 fixed top-0 flex justify-center items-center">
            <div className="w-[calc(100%_-_4rem)] max-w-[384px] h-52 border flex flex-col justify-center items-center rounded-lg bg-white relative">
                <div className="text-green-500">
                    <BiCheckCircle size={60} />
                </div>
                <div className="text-2xl">
                    <h1>Success</h1>
                </div>
                <p>Your transaction was successful</p>
                <p>check your mail for details</p>
                <Cross1Icon
                    size={15}
                    className="absolute top-4 right-4"
                    onClick={() => setModal()}
                />
            </div>
        </div>
    );
};

export default Modal;
