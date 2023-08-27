import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
const LookBookLayout = ({ children }) => {
    return (
        <div className="flex flex-col">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default LookBookLayout;
