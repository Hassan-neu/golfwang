import CartItem from "@/components/checkout/cartitem";
import DeliveryDetails from "@/components/checkout/deliveryDetails";
import React from "react";
DeliveryDetails;
const Page = () => {
    return (
        <div className="flex flex-col gap-6 px-10 min-h-screen">
            <div className="text-6xl font-semibold border-b py-4">
                <h1>CHECKOUT</h1>
            </div>
            <div className="flex gap-4 h-full">
                <DeliveryDetails />
                <CartItem />
            </div>
        </div>
    );
};

export default Page;
