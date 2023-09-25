"use client";
import React from "react";
import ShippingInfo from "@/components/pages/info/shippingInfo";
import MiscInfo from "@/components/pages/info/miscInfo";
import PrivacyStatement from "@/components/pages/info/privacyStatement";
import TabBtn from "@/components/pages/info/tabBtn";
import { useRouter } from "next/navigation";
const Page = ({ params: { info } }) => {
    const router = useRouter();
    return (
        <main className="flex flex-col gap-6 px-2 md:px-5 lg:px-10 min-h-screen border-t">
            <div className="text-5xl lg:text-6xl font-semibold border-b py-4 lg:py-6">
                <h1>INFO</h1>
            </div>
            <div className="flex gap-4 flex-col lg:flex-row justify-between">
                <div className="flex flex-row gap-4 md:justify-between lg:flex-col lg:justify-start lg:gap-5">
                    <TabBtn
                        isActive={info === "shippinginfo"}
                        onClick={() => router.push("/info/shippinginfo")}
                    >
                        SHIPPING INFO
                    </TabBtn>
                    <TabBtn
                        isActive={info === "miscinfo"}
                        onClick={() => router.push("/info/miscinfo")}
                    >
                        MISC. INFO
                    </TabBtn>
                    <TabBtn
                        isActive={info === "privacystatement"}
                        onClick={() => router.push("/info/privacystatement")}
                    >
                        PRIVACY STATEMENT
                    </TabBtn>
                </div>
                <div className="w-full lg:w-3/5">
                    {info === "privacystatement" && <PrivacyStatement />}
                    {info === "shippinginfo" && <ShippingInfo />}
                    {info === "miscinfo" && <MiscInfo />}
                </div>
            </div>
        </main>
    );
};

export default Page;
