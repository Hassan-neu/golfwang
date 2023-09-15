"use client";
import React, { useRef } from "react";
import { useState } from "react";
import OptionsBtn from "@/components/shared/buttons/optionsBtn";
import ghostSwipe from "@/utils/functions/ghostSwipe";
import Btn from "@/components/shared/buttons/btn";
const Page = ({ params: { id } }) => {
    const ghost = useRef();
    const [order, setOrder] = useState({
        color: "",
        size: "",
    });
    const [showDetails, setShowDetails] = useState(false);
    return (
        <div className="mt-10 flex flex-col gap-2 px-2 md:px-5 lg:px-10 min-h-[calc(100vh_-_100px)] ">
            <div className="text-xs font-semibold">
                <p>
                    {id}-&gt; Link -&gt; {id}
                </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 h-full">
                <div className="lg:w-3/5 flex gap-2 lg:flex-col lg:h-screen overflow-scroll hidescroll">
                    <div className="w-11/12 lg:w-full h-80 md:h-96 lg:h-full border relative bg-[#f2f2f2] bg-[url('/home/noise.png')] shrink-0">
                        <div
                            ref={ghost}
                            className="w-72 h-72 opacity-0 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 border bg-green-200"
                        ></div>
                    </div>
                    <div className="w-11/12 lg:w-full h-80 md:h-96 lg:h-full border relative bg-[#f2f2f2] bg-[url('/home/noise.png')] shrink-0"></div>
                </div>
                <div className="flex flex-col gap-7 lg:gap-14 lg:w-2/5">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-2xl md:text-4xl lg:text-3xl font-bold">
                            {id}
                        </h2>
                        <p className="md:text-xl">$1000</p>
                    </div>
                    <div className="flex flex-col">
                        <div className="lg:h-10 border-t flex gap-2 flex-col md:flex-row justify-between lg:items-center text-xs lg:text-xs font-semibold py-2">
                            <div>Color:</div>
                            <div className="flex  gap-1">
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

                        <div className="lg:h-10 border-y flex flex-col gap-2 md:flex-row justify-between lg:items-center text-xs lg:text-xs font-semibold py-2">
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
                        <div className="hidden lg:flex gap-2 justify-between mt-2 h-max">
                            <Btn
                                className="underline self-start text-xs"
                                onClick={() => setShowDetails(!showDetails)}
                            >
                                Fit Details
                            </Btn>
                            {showDetails && (
                                <div className="w-4/5 text-justify">
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
                    <div className="text-xs md:text-sm lg:text-xs">
                        <Btn
                            className="w-full py-3 text-white font-bold bg-[size:200%,100%] bg-right bg-gradient-to-r from-yellow-400 from-50% to-black to-50% [transition:background_.5s] hover:bg-left hover:text-black"
                            onClick={() => ghostSwipe(ghost)}
                        >
                            ADD TO CART
                        </Btn>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="font-semibold text-xs md:text-base">
                            DESCRIPTION
                        </h4>
                        <p className="text-xs md:text-sm text-neutral-500">
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
