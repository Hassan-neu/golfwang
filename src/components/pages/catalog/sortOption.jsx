"use client";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import useHandleFilter from "@/utils/functions/handleFilter";
const SortOptions = () => {
    const { sortMethod } = useHandleFilter();
    return (
        <Select onValueChange={sortMethod} defaultValue="newest">
            <SelectTrigger className="w-max underline border-0 focus:ring-0 shadow-none text-xs">
                <SelectValue placeholder="NEWEST" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem
                    className="text-xs"
                    value="newest"
                    position={"popper"}
                >
                    NEWEST
                </SelectItem>
                <SelectItem className="text-xs" value="priceDesc">
                    PRICE: HIGH TO LOW
                </SelectItem>
                <SelectItem className="text-xs" value="priceAsc">
                    PRICE: LOW TO HIGH
                </SelectItem>
            </SelectContent>
        </Select>
    );
};
export default SortOptions;
