import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { IoIosArrowDown } from "react-icons/io";
const SortMobile = () => {
    return (
        <Sheet>
            <SheetTrigger className="flex gap-2 items-center">
                <span>NEWEST</span>
                <IoIosArrowDown size={18} />
            </SheetTrigger>
            <SheetContent className="w-full">
                <SheetHeader>
                    <SheetTitle className="self-start">SORT BY:</SheetTitle>
                    <SheetDescription>
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-1">
                                <input
                                    type="radio"
                                    name="sort"
                                    value="newest"
                                    id="newest"
                                />
                                <label htmlFor="newest">NEWEST</label>
                            </div>
                            <div className="flex gap-1">
                                <input
                                    type="radio"
                                    name="sort"
                                    value="lowprice"
                                    id="lowprice"
                                />
                                <label htmlFor="lowprice">LOWPRICE</label>
                            </div>
                            <div className="flex gap-1">
                                <input
                                    type="radio"
                                    name="sort"
                                    value="highprice"
                                    id="highprice"
                                />
                                <label htmlFor="highprice">HIGH PRICE</label>
                            </div>
                        </div>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
};

export default SortMobile;
