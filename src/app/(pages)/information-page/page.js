"use client";
import React, { useState } from "react";
import ShippingInfo from "@/components/pages/info/shippingInfo";
import MiscInfo from "@/components/pages/info/miscInfo";
import PrivacyStatement from "@/components/pages/info/privacyStatement";
import TabBtn from "@/components/pages/info/tabBtn";
const Page = () => {
    const [info, setInfo] = useState("shipping");
    return (
        <main className="flex flex-col gap-6 px-2 md:px-5 lg:px-10 min-h-screen border-t">
            <div className="text-5xl lg:text-6xl font-semibold border-b py-4 lg:py-6">
                <h1>INFO</h1>
            </div>
            <div className="flex gap-4 flex-col lg:flex-row justify-between">
                <div className="flex flex-row gap-4 md:justify-between lg:flex-col lg:justify-start lg:gap-5">
                    <TabBtn
                        isActive={info === "shipping"}
                        onClick={() => setInfo("shipping")}
                    >
                        SHIPPING INFO
                    </TabBtn>
                    <TabBtn
                        isActive={info === "misc"}
                        onClick={() => setInfo("misc")}
                    >
                        MISC. INFO
                    </TabBtn>
                    <TabBtn
                        isActive={info === "privacyinfo"}
                        onClick={() => setInfo("privacyinfo")}
                    >
                        PRIVACY STATEMENT
                    </TabBtn>
                </div>
                <div className="w-full lg:w-3/5">
                    {info === "privacyinfo" && <PrivacyStatement />}
                    {info === "shipping" && <ShippingInfo />}
                    {info === "misc" && <MiscInfo />}
                </div>
            </div>
        </main>
    );
};

export default Page;
