import ProductCard from "@/components/checkout/productCard";
import CartItem from "@/components/checkout/cartitem";
import DeliveryDetails from "@/components/checkout/deliveryDetails";
import React from "react";
import { arr } from "@/utils/products";
const Page = () => {
    return (
        <div className="flex flex-col gap-6 px-2 md:px-5 lg:px-10 min-h-screen">
            <div className="text-6xl font-semibold border-b py-4">
                <h1>CHECKOUT</h1>
            </div>
            <div className="flex gap-4 h-full">
                <DeliveryDetails />
                <CartItem>
                    {arr.map((ar) => (
                        <ProductCard key={ar.id} ar={ar} />
                    ))}
                </CartItem>
            </div>
        </div>
    );
};

export default Page;
