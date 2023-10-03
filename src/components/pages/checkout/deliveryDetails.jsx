"use client";
import Btn from "@/components/shared/buttons/btn";
import Checkbox from "@/components/shared/checkbox";
import Radio from "@/components/shared/radio";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useCartStore } from "@/libs/cart";
const DeliveryDetails = () => {
    const totalPrice = useCartStore((cart) => cart.totalPrice);
    const [isChecked, setIsChecked] = useState(false);
    const [deliveryDetails, setDeliveryDetails] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        shippingType: "",
        paymentMode: "",
    });
    const handleChange = (e) => {
        setDeliveryDetails((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    return (
        <form className="flex flex-col gap-6 w-full lg:w-1/2 h-full sticky top-14">
            <div className="flex flex-col gap-4">
                <h3 className="text-xl font-medium">CONTACT INFORMATION</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-auto gap-2">
                    <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        placeholder="First name"
                        className="px-3 py-3 border border-black border-opacity-50 focus:border-opacity-100 focus:outline-none text-sm"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        placeholder="Last name"
                        className="px-3 py-3 border border-black border-opacity-50 focus:border-opacity-100 focus:outline-none text-sm"
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="E-mail"
                        className="px-3 py-3 border border-black border-opacity-50 focus:border-opacity-100 focus:outline-none text-sm"
                        onChange={handleChange}
                    />
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="Phone"
                        className="px-3 py-3 border border-black border-opacity-50 focus:border-opacity-100 focus:outline-none text-sm"
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center pb-3 border-b">
                    <h3 className="text-xl font-medium ">DELIVERY</h3>
                    <div className="text-xs underline">
                        <Link href="/info/shippinginfo"> SHIPPING INFO</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-2 border-b pb-4">
                        <div className="flex justify-between">
                            <div className="flex gap-2 items-baseline">
                                <Radio
                                    type="radio"
                                    name="shippingType"
                                    id="domestic"
                                    value={"domestic"}
                                    onChange={handleChange}
                                />
                                <div className="flex flex-col gap-[2px]">
                                    <h2 className="text-sm font-medium">
                                        DOMESTIC SHIPPING
                                    </h2>
                                    <p className="text-[10px] text-black text-opacity-40">
                                        Delivery 5-10 days
                                    </p>
                                </div>
                            </div>

                            <div className="text-sm font-medium">
                                <h2>FREE</h2>
                            </div>
                        </div>
                        {deliveryDetails.shippingType === "domestic" && (
                            <p>Hello</p>
                        )}
                    </div>

                    <div className="flex flex-col gap-2 border-b pb-4">
                        <div className="flex justify-between">
                            <div className="flex gap-2 items-baseline">
                                <Radio
                                    type="radio"
                                    name="shippingType"
                                    id="international"
                                    value={"international"}
                                    onChange={handleChange}
                                />
                                <div className="flex flex-col gap-[2px]">
                                    <h2 className="text-sm font-medium">
                                        INTERNATIONAL SHIPPING
                                    </h2>
                                    <p className="text-[10px] text-black text-opacity-40">
                                        Delivery 5-10 days
                                    </p>
                                </div>
                            </div>

                            <div className="text-sm font-medium">
                                <h2>$30</h2>
                            </div>
                        </div>
                        {deliveryDetails.shippingType === "international" && (
                            <p>Hello</p>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="text-xl font-medium border-b pb-3">PAYMENT</h3>
                <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center border-b pb-4">
                        <div className="flex gap-2 items-center">
                            <Radio
                                type="radio"
                                name="paymentMode"
                                id="flutterwave"
                                value={"flutterwave"}
                                onChange={handleChange}
                            />

                            <h2 className="text-sm font-medium">FLUTTERWAVE</h2>
                        </div>
                        <div className="text-sm font-medium">
                            <Image
                                src={"/flutterwave.svg"}
                                alt="flutterwave-logo"
                                width={100}
                                height={20}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between items-center border-b pb-4">
                        <div className="flex gap-2 items-center">
                            <Radio
                                type="radio"
                                name="paymentMode"
                                id="paystack"
                                value={"paystack"}
                                onChange={handleChange}
                            />

                            <h2 className="text-sm font-medium">PAYSTACK</h2>
                        </div>
                        <div className="text-sm font-medium">
                            <Image
                                src={"/paystack.svg"}
                                alt="flutterwave-logo"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 lg:hidden">
                <div className="flex flex-col md:flex-row gap-2 border-b pb-5">
                    <input
                        type="text"
                        name="voucher"
                        id="voucher"
                        placeholder="Discount code"
                        className="px-3 py-3 w-full md:w-4/5 border border-black border-opacity-50 focus:border-opacity-100 focus:outline-none text-sm"
                    />
                    <Btn className="bg-black text-white py-3 md:w-1/5 text-sm border">
                        APPLY
                    </Btn>
                </div>
                <div className="flex justify-between pb-3 border-b text-gray-400">
                    <h3 className="text-sm font-medium">DISCOUNT</h3>
                    <p>$0</p>
                </div>
                <div className="flex justify-between pb-3 border-b text-gray-400">
                    <h3 className="text-sm font-medium">SHIPPING</h3>
                    <p>$0</p>
                </div>
                <div className="flex justify-between pb-3 border-b text-4xl text-black">
                    <h3>TOTAL</h3>
                    <p>$&nbsp;{totalPrice}</p>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <Checkbox
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                >
                    <p className="text-xs">
                        I agree to{" "}
                        <Link href="" className="underline">
                            {" "}
                            personal data protection policy
                        </Link>
                    </p>
                </Checkbox>
                <Btn
                    className="w-full py-3 text-sm text-white bg-[size:200%,100%] bg-right bg-gradient-to-r from-yellow-400 from-50% to-black to-50% [transition:background_.5s] hover:bg-left hover:text-black"
                    disabled={!isChecked}
                >
                    PAY AND MAKE ORDER
                </Btn>
            </div>
        </form>
    );
};

export default DeliveryDetails;
