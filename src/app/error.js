"use client";
import Btn from "@/components/shared/buttons/btn";
import React from "react";
import { BiErrorCircle } from "react-icons/bi";

const Error = ({ error: { message }, reset }) => {
    return (
        <div className="h-screen bg-[#f2f2f2] bg-[url('/home/noise.png')] flex items-center px-2 md:px-5 lg:px-10">
            <div className="flex flex-col items-center gap-3 lg:w-1/2 mx-auto">
                <BiErrorCircle size={50} fill="rgba(156, 163, 175,0.5)" />
                <div className="text-xl text-red-500 text-center">
                    <p>
                        We&apos;re experiencing some technical difficulties at
                        the moment. Please wait a few minutes and then try
                        again.
                    </p>
                </div>
                <Btn
                    onClick={reset}
                    className={
                        "bg-black text-[#f2f2f2] w-40 px-10 py-3 rounded-md active:scale-95"
                    }
                >
                    Retry
                </Btn>
            </div>
        </div>
    );
};

export default Error;
