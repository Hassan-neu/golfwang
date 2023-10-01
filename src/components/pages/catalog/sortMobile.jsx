"use client";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import useHandleQuery from "@/utils/functions/handleQuery";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
const SortMobile = () => {
    const [openPan, setOpenPan] = useState(false);
    const { sortMethod } = useHandleQuery();
    const closePanel = () => setTimeout(() => setOpenPan(false), 500);
    return (
        <Sheet open={openPan} onOpenChange={() => setOpenPan(!openPan)}>
            <SheetTrigger className="flex gap-2 items-center">
                <span>NEWEST</span>
                <IoIosArrowDown size={18} />
            </SheetTrigger>
            <SheetContent className="w-full">
                <SheetHeader>
                    <SheetTitle className="self-start relative -top-4">
                        SORT
                    </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-3">
                    <div className="flex gap-1">
                        <Radio
                            value="newest"
                            id="newest"
                            onChange={(e) => sortMethod(e.target.value)}
                            onClick={closePanel}
                        />
                        <label htmlFor="newest">NEWEST</label>
                    </div>
                    <div className="flex gap-1">
                        <Radio
                            value="priceAsc"
                            id="priceAsc"
                            onChange={(e) => sortMethod(e.target.value)}
                            onClick={closePanel}
                        />
                        <label htmlFor="priceAsc">PRICE LOW</label>
                    </div>
                    <div className="flex gap-1">
                        <Radio
                            value="priceDesc"
                            id="priceDesc"
                            onChange={(e) => sortMethod(e.target.value)}
                            onClick={closePanel}
                        />
                        <label htmlFor="priceDesc">PRICE HIGH</label>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};
const Radio = ({ ...props }) => {
    return (
        <span className="w-[14px] h-[14px] rounded-full border border-black flex justify-center items-center self-center">
            <input
                type="radio"
                name="sort"
                className="appearance-none m-auto w-[8px] h-[8px] rounded-full checked:bg-black"
                {...props}
            />
        </span>
    );
};
export default SortMobile;
