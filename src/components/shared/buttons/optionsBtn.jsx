import React from "react";

const OptionsBtn = ({ children, className, isActive, ...props }) => {
    return (
        <button
            className={`px-2 py-[2px] border ${
                isActive ? "bg-yellow-400" : ""
            } ${className} transition`}
            {...props}
        >
            {children}
        </button>
    );
};

export default OptionsBtn;
