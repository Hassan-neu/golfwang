import React from "react";

const OptionsBtn = ({ children, onClick, isActive }) => {
    return (
        <button
            className={`px-2 py-[2px] border ${
                isActive ? "bg-yellow-400" : ""
            } transition`}
            onClick={() => onClick()}
        >
            {children}
        </button>
    );
};

export default OptionsBtn;
