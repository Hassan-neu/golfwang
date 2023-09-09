import React from "react";

const Btn = ({ children, className }) => {
    return (
        <button
            className={`px-2 py-1 border text-xs font-semibold  ${
                className ? className : ""
            }`}
        >
            {children}
        </button>
    );
};

export default Btn;
