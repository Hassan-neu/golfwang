import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
const CatalogLayout = ({ children }) => {
    return (
        <div className="flex flex-col overflow-hidden">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default CatalogLayout;
