import React from "react";

const Btn = ({ children, className, ...props }) => {
    return (
        <button className={`px-2 py-1  ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Btn;
