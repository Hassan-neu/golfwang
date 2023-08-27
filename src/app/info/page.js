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
        <main className="flex flex-col gap-6 px-10 min-h-screen">
            <div className="text-6xl font-semibold border-b py-4">
                <h1>INFO</h1>
            </div>
            <div className="flex gap-4 justify-between">
                <div className="flex flex-col gap-6">
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
                <div className="w-3/5">{info}</div>
            </div>
        </main>
    );
};

export default Page;
