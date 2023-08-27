import React from "react";

const TabBtn = ({ children, isActive, onClick }) => {
    return (
        <button
            className={`text-left ${
                isActive ? "underline underline-offset-2" : ""
            }`}
            onClick={() => onClick()}
        >
            {children}
        </button>
    );
};

export default TabBtn;
