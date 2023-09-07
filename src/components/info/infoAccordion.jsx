"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const Accordion = ({ policy }) => {
    const { title, content } = policy;
    const [open, setOpen] = useState(false);
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <button
                    className={`font-semibold text-xs md:text-sm uppercase cursor-pointer flex items-center ${
                        open ? "underline underline-offset-2" : ""
                    }`}
                    onClick={() => setOpen(!open)}
                >
                    {title} {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>
                {open && (
                    <p className="text-xs md:text-sm lg:text-base">{content}</p>
                )}
            </div>
        </div>
    );
};

export default Accordion;
