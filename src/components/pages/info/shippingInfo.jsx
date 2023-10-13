import React from "react";
import { policies } from "@/utils/policies";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
const ShippingInfo = () => {
    return (
        <div className="flex flex-col gap-6 w-full md:w-3/5">
            <p className="text-xs md:text-sm lg:text-base">
                All orders placed on golfwang.com are shipped by either USPS or
                DHL. GOLF is no responsible for any lost, damaged, or stolen
                items in transit once the order has been shipped from the
                warehouse.
            </p>
            <Accordion type="multiple">
                {policies.map((policy) => (
                    <AccordionItem
                        key={policy.id}
                        value={policy.title}
                        className="border-none"
                    >
                        <AccordionTrigger className="font-semibold text-xs md:text-sm uppercase data-[state=open]:underline">
                            {policy.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-xs md:text-sm lg:text-base">
                            {policy.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default ShippingInfo;
