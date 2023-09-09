"use client";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Arrow } from "@radix-ui/react-select";

const SortOptions = () => {
    return (
        <Select onValueChange={(value) => console.log(value)}>
            <SelectTrigger className="w-[180px] underline border-0 focus:ring-0 shadow-none text-xs">
                <SelectValue placeholder="NEWEST" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem
                    className="text-xs"
                    value="NEWEST"
                    position={"popper"}
                >
                    NEWEST
                    <Arrow />
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
