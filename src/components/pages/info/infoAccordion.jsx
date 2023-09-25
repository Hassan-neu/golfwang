"use client";
import Btn from "@/components/shared/buttons/btn";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const Accordion = ({ policy }) => {
    const { title, content } = policy;
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <Btn
                    className={`px-0 py-0 font-semibold text-xs md:text-sm uppercase cursor-pointer flex items-center gap-1 self-start ${
                        open ? "border-b border-neutral-950" : ""
                    }`}
                    onClick={() => setOpen(!open)}
                >
                    {title}
                    {open ? (
                        <IoIosArrowUp size={20} />
                    ) : (
                        <IoIosArrowDown size={20} />
                    )}
                </Btn>
                {open && (
                    <p className="text-xs md:text-sm lg:text-base">{content}</p>
                )}
            </div>
        </div>
    );
};

export default Accordion;
