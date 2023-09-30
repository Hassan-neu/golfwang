"use client";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import useHandleFilter from "@/utils/functions/handleFilter";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
const SortOptions = () => {
    const { handleSort, sort } = useHandleFilter();
    const router = useRouter();
    const path = usePathname();
    const sortMethod = (value) => {
        router.push(`${path}?sort=${value}`);
    };
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
