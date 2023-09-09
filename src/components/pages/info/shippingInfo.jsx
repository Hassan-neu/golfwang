import React from "react";
import Accordion from "./infoAccordion";
import { policies } from "@/utils/policies";
const ShippingInfo = () => {
    return (
        <div className="flex flex-col gap-6 w-full md:w-3/5">
            <p className="text-xs md:text-sm lg:text-base">
                All orders placed on golfwang.com are shipped by either USPS or
                DHL. GOLF is no responsible for any lost, damaged, or stolen
                items in transit once the order has been shipped from the
                warehouse.
            </p>
            {policies.map((policy) => (
                <Accordion key={policy.id} policy={policy} />
            ))}
        </div>
    );
};

export default ShippingInfo;
