import React from "react";

const Btn = ({ children, className, ...props }) => {
    return (
        <button
            className={`px-2 py-1 border text-xs font-semibold  ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Btn;
