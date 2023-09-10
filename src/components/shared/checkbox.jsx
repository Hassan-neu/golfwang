"use client";
import React from "react";
const Checkbox = ({ children, ...props }) => {
    return (
        <div className="flex gap-2 items-center">
            <span className="w-[12px] h-[12px] border border-black flex justify-center items-center">
                <input
                    type="checkbox"
                    className="appearance-none m-auto w-[7px] h-[7px] checked:bg-black"
                    {...props}
                />
            </span>
            {children}
        </div>
    );
};

export default Checkbox;
