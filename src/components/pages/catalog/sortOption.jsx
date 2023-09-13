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
    const { handleSort, sort } = useHandleFilter();
    // console.log(sort);
    return (
        <Select onValueChange={handleSort} defaultValue="NEWEST">
            <SelectTrigger className="w-[120px] underline border-0 focus:ring-0 shadow-none text-xs">
                <SelectValue placeholder="NEWEST" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem
                    className="text-xs"
                    value="NEWEST"
                    position={"popper"}
                >
                    NEWEST
                </SelectItem>
                <SelectItem className="text-xs" value="PRICE LOW">
                    PRICE LOW
                </SelectItem>
                <SelectItem className="text-xs" value="PRICE HIGH">
                    PRICE HIGH
                </SelectItem>
            </SelectContent>
        </Select>
    );
};
export default SortOptions;
