import React from "react";

const TabBtn = ({ children, isActive, onClick }) => {
    return (
        <button
            className={`text-left text-sm md:text-lg ${
                isActive ? "underline underline-offset-2 font-semibold" : ""
            }`}
            onClick={() => onClick()}
        >
            {children}
        </button>
    );
};

export default TabBtn;
