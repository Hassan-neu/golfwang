import React from "react";
import Btn from "../buttons/btn";
const NewArivals = () => {
    return (
        <div className="flex flex-col gap-4 px-10 h-screen justify-center border border-gray-400 rounded-3xl mt-5">
            <div className="flex justify-between">
                <div className="text-xl font-semibold">
                    <h2>NEW ARRIVALS</h2>
                </div>
                <Btn>SHOW MORE</Btn>
            </div>
            <div className="flex gap-2 w-full flex-nowrap overflow-x-scroll py-10 hidescroll transition">
                <div className="w-56 h-56 border shrink-0"></div>
                <div className="w-56 h-56 border shrink-0"></div>
                <div className="w-96 h-96 border relative bg-yellow-400 shrink-0">
                    <canvas className="w-96 h-96 absolute top-0 left-0 bg-red-500 hover:rotate-6 [transition:transform_.5s_ease-out] origin-[75%_75%]"></canvas>
                </div>
                <div className="w-56 h-56 border shrink-0"></div>
                <div className="w-56 h-56 border shrink-0"></div>
                <div className="w-56 h-56 border shrink-0"></div>
                <div className="w-56 h-56 border shrink-0"></div>
            </div>
            <div className="flex gap-1">
                <button className="rounded-full w-6 h-6 border flex items-center justify-center text-gray-500">
                    &lt;-
                </button>
                <button className="rounded-full w-6 h-6 border flex items-center justify-center text-gray-500">
                    -&gt;
                </button>
            </div>
        </div>
    );
};

export default NewArivals;
