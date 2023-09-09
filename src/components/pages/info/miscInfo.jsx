import React from "react";

const MiscInfo = () => {
    return (
        <div className="flex flex-col gap-4 w-full md:w-3/5">
            <div className="flex flex-col gap-2">
                <h2 className="font-bold text-xs md:text-sm">PAYMENT</h2>
                <p className="text-xs md:text-sm lg:text-base">
                    We accept major credit cards (Visa, MasterCard and American
                    Express) via Apple Pay, Shopify Pay, Google Pay and PayPal.
                    We reserve the right to require additional identification
                    verification for international or suspicious orders in
                    effort to prevent credit card fraud.
                </p>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="font-bold text-xs md:text-sm">
                    PRODUCT AVAILABILITY
                </h2>
                <p className="text-xs md:text-sm lg:text-base">
                    Although availability may be indicated on our website, we
                    cannot guarantee product availability. We reserve the right,
                    without liability or prior notice to revise, discontinue, or
                    cease to make available any or all products or to cancel any
                    order.
                </p>
            </div>
        </div>
    );
};

export default MiscInfo;
