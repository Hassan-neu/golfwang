"use client";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import useHandleFilter from "@/utils/functions/handleFilter";
import { IoIosArrowDown } from "react-icons/io";
const SortMobile = () => {
    const { sortMethod } = useHandleFilter();
    return (
        <Sheet>
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
                        <input
                            type="radio"
                            value="newest"
                            id="newest"
                            onChange={(e) => sortMethod(e.target.value)}
                        />
                        <label htmlFor="newest">NEWEST</label>
                    </div>
                    <div className="flex gap-1">
                        <input
                            type="radio"
                            value="priceAsc"
                            id="priceAsc"
                            onChange={(e) => sortMethod(e.target.value)}
                        />
                        <label htmlFor="priceAsc">PRICE LOW</label>
                    </div>
                    <div className="flex gap-1">
                        <input
                            type="radio"
                            value="priceDesc"
                            id="priceDesc"
                            onChange={(e) => sortMethod(e.target.value)}
                        />
                        <label htmlFor="priceDesc">PRICE HIGH</label>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default SortMobile;
