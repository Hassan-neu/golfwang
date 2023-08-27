import React from "react";

const Btn = ({ children }) => {
    return (
        <button className="px-2 py-1 border text-xs font-semibold bg-white">
            {children}
        </button>
    );
};

export default Btn;
