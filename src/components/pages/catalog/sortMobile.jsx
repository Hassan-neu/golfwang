"use client";
import Radio from "@/components/shared/radio";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import useHandleQuery from "@/utils/hooks/handleQuery";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
const SortMobile = () => {
    const [openPan, setOpenPan] = useState(false);
    const [action, setAction] = useState("NEWEST");
    const { sortMethod } = useHandleQuery();
    const closePanel = () => setTimeout(() => setOpenPan(false), 500);
    return (
        <Sheet open={openPan} onOpenChange={() => setOpenPan(!openPan)}>
            <SheetTrigger className="flex gap-2 items-center">
                <span>{action}</span>
                <IoIosArrowDown size={18} />
            </SheetTrigger>
            <SheetContent className="w-full">
                <SheetHeader>
                    <SheetTitle className="self-start relative -top-4">
                        SORT
                    </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-3">
                    <div className="flex gap-1 items-center">
                        <Radio
                            value="newest"
                            id="newest"
                            onChange={(e) => {
                                sortMethod(e.target.value);
                                setAction("NEWEST");
                            }}
                            onClick={closePanel}
                        />
                        <label htmlFor="newest">NEWEST</label>
                    </div>
                    <div className="flex gap-1 items-center">
                        <Radio
                            value="priceAsc"
                            name="sort"
                            id="priceAsc"
                            onChange={(e) => {
                                sortMethod(e.target.value);
                                setAction("PRICE: LOW TO HIGH");
                            }}
                            onClick={closePanel}
                        />
                        <label htmlFor="priceAsc">PRICE LOW</label>
                    </div>
                    <div className="flex gap-1 items-center">
                        <Radio
                            value="priceDesc"
                            name="sort"
                            id="priceDesc"
                            onChange={(e) => {
                                sortMethod(e.target.value);
                                setAction("PRICE: HIGH TO LOW");
                            }}
                            onClick={closePanel}
                        />
                        <label htmlFor="priceDesc">PRICE HIGH</label>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default SortMobile;
