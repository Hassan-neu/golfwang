"use client";
import React, { useState } from "react";
import ShippingInfo from "@/components/info/shippingInfo";
import MiscInfo from "@/components/info/miscInfo";
import PrivacyStatement from "@/components/info/privacyStatement";
import TabBtn from "@/components/info/tabBtn";
const Page = () => {
    const [info, setInfo] = useState(<ShippingInfo />);
    const [tab, setTab] = useState("SHIPPING INFO");
    return (
        <main className="flex flex-col gap-6 px-2 md:px-5 lg:px-10 min-h-screen border-t">
            <div className="text-5xl lg:text-6xl font-semibold border-b py-4 lg:py-6">
                <h1>INFO</h1>
            </div>
            <div className="flex gap-4 flex-col lg:flex-row justify-between">
                <div className="flex flex-row gap-4 md:justify-between lg:flex-col lg:justify-start lg:gap-5">
                    <TabBtn
                        isActive={tab === "SHIPPING INFO"}
                        onClick={() => {
                            setInfo(<ShippingInfo />);
                            setTab("SHIPPING INFO");
                        }}
                    >
                        SHIPPING INFO
                    </TabBtn>
                    <TabBtn
                        isActive={tab === "MISC. INFO"}
                        onClick={() => {
                            setInfo(<MiscInfo />);
                            setTab("MISC. INFO");
                        }}
                    >
                        MISC. INFO
                    </TabBtn>
                    <TabBtn
                        isActive={tab === "PRIVACY STATEMENT"}
                        onClick={() => {
                            setInfo(<PrivacyStatement />);
                            setTab("PRIVACY STATEMENT");
                        }}
                    >
                        PRIVACY STATEMENT
                    </TabBtn>
                </div>
                <div className="w-full lg:w-3/5">{info}</div>
            </div>
        </main>
    );
};

export default Page;
