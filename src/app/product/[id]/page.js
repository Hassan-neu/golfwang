"use client";
import React, { useRef } from "react";
import { useState } from "react";
import OptionsBtn from "@/components/buttons/optionsBtn";
import ghostSwipe from "@/utils/functions/ghostSwipe";
const Page = ({ params: { id } }) => {
    const ghost = useRef();
    const [order, setOrder] = useState({
        color: "",
        size: "",
    });
    const [showDetails, setShowDetails] = useState(false);
    return (
        <div className="mt-10 flex flex-col gap-2 px-10 h-[calc(100vh_-_100px)] ">
            <div className="text-xs font-semibold">
                <p>Link -&gt; Link -&gt; {id}</p>
            </div>
            <div className="flex gap-4 h-full">
                <div className="w-3/5 h-full border relative bg-green-500">
                    <div
                        ref={ghost}
                        className="w-72 h-72 opacity-0 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 border bg-green-200"
                    ></div>
                </div>
                <div className="flex flex-col gap-14 w-2/5">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-3xl font-bold">{id}</h2>
                        <p>$1000</p>
                    </div>
                    <div className="flex flex-col">
                        <div className="h-10 border-t flex justify-between items-center text-xs font-semibold">
                            <div>Color:</div>
                            <div className="flex gap-1">
                                <OptionsBtn
                                    isActive={order.color === "MUSTARD"}
                                    onClick={() =>
                                        setOrder((prevOrder) => ({
                                            ...prevOrder,
                                            color: "MUSTARD",
                                        }))
                                    }
                                >
                                    Mustard
                                </OptionsBtn>
                                <OptionsBtn
                                    isActive={order.color === "CHOCOLATE"}
                                    onClick={() =>
                                        setOrder((prevOrder) => ({
                                            ...prevOrder,
                                            color: "CHOCOLATE",
                                        }))
                                    }
                                >
                                    Chocolate
                                </OptionsBtn>
                                <OptionsBtn
                                    isActive={order.color === "MINT"}
                                    onClick={() =>
                                        setOrder((prevOrder) => ({
                                            ...prevOrder,
                                            color: "MINT",
                                        }))
                                    }
                                >
                                    Mint
                                </OptionsBtn>
                            </div>
                        </div>

                        <div className="h-10 border-y flex justify-between items-center text-xs font-semibold">
                            <div>Size:</div>
                            <div className="flex gap-1">
                                <OptionsBtn
                                    isActive={order.size === "XS"}
                                    onClick={() =>
                                        setOrder((prevOrder) => ({
                                            ...prevOrder,
                                            size: "XS",
                                        }))
                                    }
                                >
                                    XS
                                </OptionsBtn>
                                <OptionsBtn
                                    isActive={order.size === "SM"}
                                    onClick={() =>
                                        setOrder((prevOrder) => ({
                                            ...prevOrder,
                                            size: "SM",
                                        }))
                                    }
                                >
                                    SM
                                </OptionsBtn>
                                <OptionsBtn
                                    isActive={order.size === "MD"}
                                    onClick={() =>
                                        setOrder((prevOrder) => ({
                                            ...prevOrder,
                                            size: "MD",
                                        }))
                                    }
                                >
                                    MD
                                </OptionsBtn>
                                <OptionsBtn
                                    isActive={order.size === "L"}
                                    onClick={() =>
                                        setOrder((prevOrder) => ({
                                            ...prevOrder,
                                            size: "L",
                                        }))
                                    }
                                >
                                    L
                                </OptionsBtn>
                                <OptionsBtn
                                    isActive={order.size === "XL"}
                                    onClick={() =>
                                        setOrder((prevOrder) => ({
                                            ...prevOrder,
                                            size: "XL",
                                        }))
                                    }
                                >
                                    XL
                                </OptionsBtn>
                            </div>
                        </div>
                        <div className="flex gap-2 justify-between mt-2 h-max">
                            <button
                                className="underline self-start text-xs"
                                onClick={() => setShowDetails(!showDetails)}
                            >
                                Fit Details
                            </button>
                            {showDetails && (
                                <div className="h-20 w-4/5 text-justify">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Quam perferendis ex
                                    dignissimos, recusandae sit sapiente quia
                                    nobis modi nisi exercitationem illo pariatur
                                    excepturi consectetur iusto expedita a
                                    deleniti dolor aliquid explicabo aut, non
                                    placeat ea. Maxime eaque voluptas totam
                                    nostrum!
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="text-xs">
                        <button
                            className="w-full py-3 text-white font-bold bg-[size:200%,100%] bg-right bg-gradient-to-r from-yellow-400 from-50% to-black to-50% [transition:background_.5s] hover:bg-left hover:text-black"
                            onClick={() => ghostSwipe(ghost)}
                        >
                            ADD TO CART
                        </button>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="font-semibold">DESCRIPTION</h4>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Recusandae velit animi a optio ex culpa ipsum
                            laboriosam quae accusamus cumque.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
