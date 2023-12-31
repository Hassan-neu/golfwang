"use client";
import Btn from "@/components/shared/buttons/btn";
import Checkbox from "@/components/shared/checkbox";
import Radio from "@/components/shared/radio";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useCartStore } from "@/libs/cart";
import { useRouter } from "next/navigation";
import { Domestic, International } from "./address";
import { validateForm } from "@/libs/validateForm";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useFormik } from "formik";
import { useCoupon } from "@/utils/hooks/handleDiscount";
import { usePayWithFlutter, usePayWithPaystack } from "@/utils/payment";
import { Toast, ToastDescription, ToastProvider } from "@/components/ui/toast";
const DeliveryDetails = () => {
    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            shipping: "",
            payment: "",
            address: "",
            apartment: "",
            city: "",
            zipcode: "",
            country: "",
        },
        validate: validateForm,
        onSubmit,
    });

    const { coupon, handleChange, error, handleCoupon } = useCoupon();
    const totalCost = useCartStore((cart) => cart.totalCost);
    const updateTotalCost = useCartStore((cart) => cart.updateTotalCost);
    const updateShipping = useCartStore((cart) => cart.updateShipping);
    const shipping = useCartStore((cart) => cart.shipping);
    const discount = useCartStore((cart) => cart.discount);
    const [isChecked, setIsChecked] = useState(false);
    const { handleFlutterPayment, payCallback } = usePayWithFlutter(formik);
    const { initializePayment, onClose, onSuccess } =
        usePayWithPaystack(formik);
    async function onSubmit(values) {
        if (values.payment === "flutterwave") {
            return handleFlutterPayment({
                callback: (res) => payCallback(res),
                onClose: () => {},
            });
        } else {
            return initializePayment(onSuccess, onClose);
        }
    }
    return (
        <div className="flex flex-col gap-6 w-full lg:w-1/2 h-full sticky top-14">
            <form className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-medium">CONTACT INFORMATION</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-auto gap-2">
                        <input
                            type="text"
                            name="firstname"
                            required={true}
                            placeholder="First name"
                            className={`px-3 py-3 border border-black border-opacity-50 focus:border-opacity-100 focus:outline-none text-sm ${
                                formik.errors.firstname &&
                                formik.touched.firstname
                                    ? "border-red-500"
                                    : ""
                            }`}
                            {...formik.getFieldProps("firstname")}
                        />
                        <input
                            type="text"
                            name="lastname"
                            required={true}
                            placeholder="Last name"
                            className={`px-3 py-3 border border-black border-opacity-50 focus:border-opacity-100 focus:outline-none text-sm ${
                                formik.errors.lastname &&
                                formik.touched.lastname
                                    ? "border-red-500"
                                    : ""
                            }`}
                            {...formik.getFieldProps("lastname")}
                        />
                        <input
                            type="email"
                            name="email"
                            required={true}
                            placeholder="E-mail"
                            className={`px-3 py-3 border border-black border-opacity-50 focus:border-opacity-100 focus:outline-none text-sm ${
                                formik.errors.email && formik.touched.email
                                    ? "border-red-500"
                                    : ""
                            }`}
                            {...formik.getFieldProps("email")}
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            className={`px-3 py-3 border border-black border-opacity-50 focus:border-opacity-100 focus:outline-none text-sm ${
                                formik.errors.phone && formik.touched.phone
                                    ? "border-red-500"
                                    : ""
                            }`}
                            {...formik.getFieldProps("phone")}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center pb-3 border-b">
                        <h3
                            className={`text-xl font-medium ${
                                formik.errors.shipping ? "text-red-500" : ""
                            }`}
                        >
                            DELIVERY
                        </h3>
                        <div className="text-xs underline">
                            <Link href="/info/shippinginfo">
                                {" "}
                                SHIPPING INFO
                            </Link>
                        </div>
                    </div>
                    <Accordion
                        type="single"
                        className={`flex flex-col gap-2`}
                        onValueChange={(value) => {
                            formik.setFieldValue("shipping", value);
                            updateShipping(value);
                            updateTotalCost();
                        }}
                    >
                        <AccordionItem value="domestic">
                            <AccordionTrigger className="hover:no-underline flex [&>svg]:hidden p-0">
                                <div className="flex gap-2 items-baseline w-full h-full">
                                    <Radio
                                        type="radio"
                                        name="shipping"
                                        id="domestic"
                                        value={"domestic"}
                                        checked={
                                            formik.values.shipping ===
                                            "domestic"
                                        }
                                        readOnly={true}
                                    />
                                    <div className="flex justify-between w-full">
                                        <div className="flex flex-col gap-[2px] items-start">
                                            <h2 className="text-sm font-medium">
                                                DOMESTIC SHIPPING
                                            </h2>
                                            <p className="text-[10px] text-black text-opacity-40">
                                                Delivery 5-10 days
                                            </p>
                                        </div>

                                        <div className="text-sm font-medium self-start">
                                            <h2>FREE</h2>
                                        </div>
                                    </div>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <Domestic formik={formik} />
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="international">
                            <AccordionTrigger className="hover:no-underline [&>svg]:hidden py-0 pt-2">
                                <div className="flex gap-2 items-baseline w-full h-full">
                                    <Radio
                                        type="radio"
                                        name="shipping"
                                        id="international"
                                        value={"international"}
                                        checked={
                                            formik.values.shipping ===
                                            "international"
                                        }
                                        readOnly={true}
                                    />
                                    <div className="flex justify-between w-full">
                                        <div className="flex flex-col gap-[2px] items-start">
                                            <h2 className="text-sm font-medium">
                                                INTERNATIONAL SHIPPING
                                            </h2>
                                            <p className="text-[10px] text-black text-opacity-40">
                                                Delivery 5-10 days
                                            </p>
                                        </div>
                                        <div className="text-sm font-medium self-start">
                                            <h2>$30</h2>
                                        </div>
                                    </div>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <International formik={formik} />
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className="flex flex-col gap-4">
                    <h3
                        className={`text-xl font-medium border-b pb-3 ${
                            formik.errors.payment ? "text-red-500" : ""
                        }`}
                    >
                        PAYMENT
                    </h3>
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-between items-center border-b pb-4">
                            <div className="flex gap-2 items-center">
                                <Radio
                                    type="radio"
                                    name="payment"
                                    id="flutterwave"
                                    value={"flutterwave"}
                                    checked={
                                        formik.values.payment === "flutterwave"
                                    }
                                    onChange={
                                        formik.getFieldProps("payment").onChange
                                    }
                                />

                                <button
                                    type="button"
                                    className="text-sm font-medium"
                                    onClick={() =>
                                        formik.setFieldValue(
                                            "payment",
                                            "flutterwave"
                                        )
                                    }
                                >
                                    FLUTTERWAVE
                                </button>
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
                                    name="payment"
                                    id="paystack"
                                    value={"paystack"}
                                    checked={
                                        formik.values.payment === "paystack"
                                    }
                                    onChange={
                                        formik.getFieldProps("payment").onChange
                                    }
                                />

                                <button
                                    type="button"
                                    className="text-sm font-medium"
                                    onClick={() =>
                                        formik.setFieldValue(
                                            "payment",
                                            "paystack"
                                        )
                                    }
                                >
                                    PAYSTACK
                                </button>
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
            </form>
            <div className="flex flex-col gap-2 lg:hidden">
                <div className="flex flex-col md:flex-row gap-2 border-b pb-5 relative">
                    <input
                        type="text"
                        name="coupon"
                        id="coupon"
                        placeholder="Discount code"
                        className={`px-3 py-3 w-full md:w-4/5 border border-black border-opacity-50 focus:border-opacity-100 focus:outline-none text-sm ${
                            error ? "border-red-500" : ""
                        }`}
                        onChange={handleChange}
                    />
                    <Btn
                        className="bg-black text-white py-3 md:w-1/5 text-sm border disabled:bg-transparent disabled:text-black border-black border-opacity-50"
                        onClick={handleCoupon}
                        disabled={!coupon}
                    >
                        APPLY
                    </Btn>
                    <p className="text-red-500 text-xs absolute left-0 bottom-0 italic">
                        {error}
                    </p>
                </div>
                <div className="flex justify-between pb-3 border-b text-gray-400">
                    <h3 className="text-sm font-medium">DISCOUNT</h3>
                    <p>${discount}</p>
                </div>
                <div className="flex justify-between pb-3 border-b text-gray-400">
                    <h3 className="text-sm font-medium">SHIPPING</h3>
                    <p>$&nbsp;{shipping}</p>
                </div>
                <div className="flex justify-between pb-3 border-b text-4xl text-black">
                    <h3>TOTAL</h3>
                    <p>$&nbsp;{totalCost}</p>
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
                    onClick={() => {
                        if (totalCost <= 0) return;
                        formik.submitForm();
                    }}
                >
                    PAY AND MAKE ORDER
                </Btn>
            </div>
            {/* <ToastProvider>
                <Toast>
                    <ToastDescription>Hello</ToastDescription>
                </Toast>
            </ToastProvider> */}
        </div>
    );
};

export default DeliveryDetails;
