"use client";
import React, { useState } from "react";

const Accordion = ({ mode, children, iName, id }) => {
    const [checked, setChecked] = useState("");
    return (
        <div className="flex flex-col gap-2 border-b pb-4">
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <div className="w-[12px] h-[12px] rounded-full border border-black flex justify-center items-center">
                        <input
                            type="checkbox"
                            name={iName}
                            id={id}
                            value="Hello"
                            className="appearance-none w-[7px] h-[7px] rounded-full checked:bg-black"
                            onChange={(e) => setChecked(e.target.value)}
                        />
                    </div>

                    <div className="text-sm font-medium uppercase flex flex-col gap-[2px]">
                        {mode}
                    </div>
                </div>
                <div className="text-sm font-medium">
                    <h2>$30</h2>
                </div>
            </div>
            {checked && children}
        </div>
    );
};

export default Accordion;
