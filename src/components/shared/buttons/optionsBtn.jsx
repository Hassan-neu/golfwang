import React from "react";

const OptionsBtn = ({ children, isActive, ...props }) => {
    return (
        <button
            className={`px-2 py-[2px] border ${
                isActive ? "bg-yellow-400" : ""
            } transition`}
            {...props}
        >
            {children}
        </button>
    );
};

export default OptionsBtn;
