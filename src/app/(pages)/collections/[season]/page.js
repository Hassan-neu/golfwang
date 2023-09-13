"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Winter from "@/components/pages/collections/winter";
import Autumn from "@/components/pages/collections/autumn";
import Summer from "@/components/pages/collections/summer";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
const Page = ({ params: { season } }) => {
    // const [season, setSeason] = useState("W2022");
    const router = useRouter();

    return (
        <main className="min-h-screen flex flex-col gap-4 py-4 lg:my-6 px-2 md:px-5 lg:px-10">
            <div className="flex gap-3 items-center text-xs md:px-5">
                <label htmlFor="sort" className=" text-gray-500">
                    COLLECTION:
                </label>

                <Select
                    onValueChange={(value) => router.push(value)}
                    defaultValue="w2022"
                >
                    <SelectTrigger className="w-[120px] border-0 focus:ring-0 shadow-none text-xs  font-bold">
                        <SelectValue placeholder="W2022" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem
                            className="text-xs  font-bold"
                            value="w2022"
                        >
                            W2022
                        </SelectItem>
                        <SelectItem
                            className="text-xs  font-bold"
                            value="aut2022"
                        >
                            AUT2022
                        </SelectItem>
                        <SelectItem
                            className="text-xs  font-bold"
                            value="summ2022"
                        >
                            SUMM2022
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>
            {season == "w2022" && <Winter />}
            {season == "aut2022" && <Autumn />}
            {season == "summ2022" && <Summer />}
        </main>
    );
};

export default Page;
