import React from "react";

const TabBtn = ({ children, isActive, ...props }) => {
    return (
        <button
            className={`text-left text-sm md:text-lg ${
                isActive ? "underline underline-offset-2 font-semibold" : ""
            }`}
            {...props}
        >
            {children}
        </button>
    );
};

export default TabBtn;
