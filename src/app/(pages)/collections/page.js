"use client";
import React, { useEffect, useState } from "react";
import Winter from "@/components/collections/winter";
import Autumn from "@/components/collections/autumn";
import Summer from "@/components/collections/summer";
import { useCart } from "@/utils/libs/cart";
const Page = () => {
    const [season, setSeason] = useState("WINTER");

    return (
        <main className="min-h-screen flex flex-col gap-4 py-4 lg:my-6 px-2 md:px-5 lg:px-10">
            <div className="flex gap-3 items-center text-xs md:px-5">
                <label htmlFor="sort" className=" text-gray-500">
                    COLLECTION:
                </label>
                <select
                    name="sort"
                    id="sort"
                    className="focus:outline-none focus:underline focus:underline-offset-2 px-2 font-bold"
                    onChange={(e) => setSeason(e.target.value)}
                >
                    <option value="WINTER">W2022</option>
                    <option value="AUTUMN">AUT2022</option>
                    <option value="SUMMER">SUMM2022</option>
                </select>
            </div>
            {season === "WINTER" && <Winter />}
            {season === "AUTUMN" && <Autumn />}
            {season === "SUMMER" && <Summer />}
        </main>
    );
};

export default Page;
