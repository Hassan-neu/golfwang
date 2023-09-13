"use client";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { IoIosArrowDown } from "react-icons/io";
import useHandleFilter from "@/utils/functions/handleFilter";
const SortMobile = () => {
    const { sort, handleSort } = useHandleFilter();
    console.log(sort);
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
                            name="sort"
                            value="newest"
                            id="newest"
                            onChange={(e) => handleSort(e.target.value)}
                        />
                        <label htmlFor="newest">NEWEST</label>
                    </div>
                    <div className="flex gap-1">
                        <input
                            type="radio"
                            name="sort"
                            value="lowprice"
                            id="lowprice"
                            onChange={(e) => handleSort(e.target.value)}
                        />
                        <label htmlFor="lowprice">LOWPRICE</label>
                    </div>
                    <div className="flex gap-1">
                        <input
                            type="radio"
                            name="sort"
                            value="highprice"
                            id="highprice"
                            onChange={(e) => handleSort(e.target.value)}
                        />
                        <label htmlFor="highprice">HIGH PRICE</label>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default SortMobile;
