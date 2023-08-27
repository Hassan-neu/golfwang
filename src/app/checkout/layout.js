import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

const CheckoutLayout = ({ children }) => {
    return (
        <div className="flex flex-col gap-6">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default CheckoutLayout;
