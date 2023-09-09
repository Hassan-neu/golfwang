import React from "react";

const Checkbox = ({ children, name, id }) => {
    return (
        <div className="flex gap-2 items-center">
            <span className="w-[12px] h-[12px] border border-black flex justify-center items-center">
                <input
                    type="checkbox"
                    name={name}
                    id={id}
                    className="appearance-none m-auto w-[7px] h-[7px] checked:bg-black"
                />
            </span>
            {children}
        </div>
    );
};

export default Checkbox;
