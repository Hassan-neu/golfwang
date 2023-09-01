"use client";
import React, { useState } from "react";

const Accordion = ({ policy }) => {
    const { title, content } = policy;
    const [open, setOpen] = useState(false);
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <h2
                    className={`font-semibold text-xs md:text-sm uppercase cursor-pointer ${
                        open ? "underline underline-offset-2" : ""
                    }`}
                    onClick={() => setOpen(!open)}
                >
                    {title} {open ? <>&#x25B2;</> : <>&#x25BC;</>}
                </h2>
                {open && (
                    <p className="text-xs md:text-sm lg:text-base">{content}</p>
                )}
            </div>
        </div>
    );
};

export default Accordion;
