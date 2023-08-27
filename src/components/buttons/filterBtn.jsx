import React from "react";

const FilterBtn = ({ children, onClick, isActive }) => {
    return (
        <li
            className={`${
                isActive ? " border-black" : " border-transparent"
            } hover:cursor-pointer border-b-2`}
            onClick={() => onClick()}
        >
            {children}
        </li>
    );
};

export default FilterBtn;
