"use client";
import useHandleFilter from "@/utils/functions/handleFilter";
import Btn from "@/components/shared/buttons/btn";
import Checkbox from "@/components/shared/checkbox";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useRouter } from "next/navigation";
const FilterOptions = () => {
    const router = useRouter();
    const { handleFilter, resetFilter, filterMethod, filterOption } =
        useHandleFilter();
    return (
        <div className="hidden gap-7 font-light lg:flex">
            <HoverCard onOpenChange={(state) => !state && resetFilter}>
                <HoverCardTrigger
                    onClick={() => router.push("/catalog/all")}
                    className="hover:cursor-pointer text-[11px]"
                >
                    ALL
                </HoverCardTrigger>
            </HoverCard>
            <HoverCard openDelay={1000} onOpenChange={resetFilter}>
                <HoverCardTrigger
                    onClick={() => router.push("/catalog/tops")}
                    className="hover:cursor-pointer text-[11px]"
                >
                    TOPS
                </HoverCardTrigger>
                <HoverCardContent className="w-max" align="start">
                    <div className="flex flex-col gap-8">
                        <div className="flex gap-5">
                            <Checkbox
                                checked={filterOption.value.includes("jacket")}
                                name="tops"
                                id="tops"
                                value={"jacket"}
                                onChange={handleFilter}
                            >
                                <p className="text-[10px]">JACKET</p>
                            </Checkbox>
                            <Checkbox
                                checked={filterOption.value.includes(
                                    "knitwear"
                                )}
                                name="tops"
                                id="tops"
                                value={"knitwear"}
                                onChange={handleFilter}
                            >
                                <p className="text-[10px]">KNITWEAR</p>
                            </Checkbox>
                            <Checkbox
                                checked={filterOption.value.includes("tees")}
                                name="tops"
                                id="tops"
                                value={"tees"}
                                onChange={handleFilter}
                            >
                                <p className="text-[10px]">TEES</p>
                            </Checkbox>
                        </div>
                        <div className="flex gap-2">
                            <Btn
                                className=" px-10 py-1.5 text-[9px] bg-yellow-300"
                                onClick={filterMethod}
                            >
                                APPLY
                            </Btn>
                            <Btn
                                className={" px-10 py-1.5 text-[9px] border"}
                                onClick={resetFilter}
                            >
                                RESET
                            </Btn>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
            <HoverCard openDelay={1000} onOpenChange={resetFilter}>
                <HoverCardTrigger
                    onClick={() => router.push("/catalog/bottoms")}
                    className="hover:cursor-pointer text-[11px]"
                >
                    BOTTOMS
                </HoverCardTrigger>
                <HoverCardContent className="w-max" align="start">
                    <div className="flex flex-col gap-8">
                        <div className="flex gap-5">
                            <Checkbox
                                checked={filterOption.value.includes("pant")}
                                name="bottoms"
                                id="bottoms"
                                value={"pant"}
                                onChange={handleFilter}
                            >
                                <p className="text-[10px]">PANT</p>
                            </Checkbox>
                            <Checkbox
                                checked={filterOption.value.includes(
                                    "underwear"
                                )}
                                name="bottoms"
                                id="bottoms"
                                value={"underwear"}
                                onChange={handleFilter}
                            >
                                <p className="text-[10px]">UNDERWEAR</p>
                            </Checkbox>
                            <Checkbox
                                checked={filterOption.value.includes("short")}
                                name="bottoms"
                                id="bottoms"
                                value={"short"}
                                onChange={handleFilter}
                            >
                                <p className="text-[10px]">SHORT</p>
                            </Checkbox>
                        </div>
                        <div className="flex gap-2">
                            <Btn
                                className=" px-10 py-1.5 text-[9px] bg-yellow-300"
                                onClick={filterMethod}
                            >
                                APPLY
                            </Btn>
                            <Btn
                                className={" px-10 py-1.5 text-[9px] border"}
                                onClick={resetFilter}
                            >
                                RESET
                            </Btn>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
            <HoverCard openDelay={1000} onOpenChange={resetFilter}>
                <HoverCardTrigger
                    onClick={() => router.push("/catalog/hats")}
                    className="hover:cursor-pointer text-[11px]"
                >
                    HATS
                </HoverCardTrigger>
                <HoverCardContent className="w-max" align="start">
                    <div className="flex flex-col gap-8">
                        <div className="flex gap-5">
                            <Checkbox
                                checked={filterOption.value.includes("beanie")}
                                name="hats"
                                id="hats"
                                value={"beanie"}
                                onChange={handleFilter}
                            >
                                <p className="text-[10px]">BEANIE</p>
                            </Checkbox>
                            <Checkbox
                                checked={filterOption.value.includes("cap")}
                                name="hats"
                                id="hats"
                                value={"cap"}
                                onChange={handleFilter}
                            >
                                <p className="text-[10px]">CAP</p>
                            </Checkbox>
                        </div>
                        <div className="flex gap-2">
                            <Btn
                                className=" px-10 py-1.5 text-[9px] bg-yellow-300"
                                onClick={filterMethod}
                            >
                                APPLY
                            </Btn>
                            <Btn
                                className={" px-10 py-1.5 text-[9px] border"}
                                onClick={resetFilter}
                            >
                                RESET
                            </Btn>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
            <HoverCard openDelay={1000} onOpenChange={resetFilter}>
                <HoverCardTrigger
                    onClick={() => router.push("/catalog/accessories")}
                    className="hover:cursor-pointer text-[11px]"
                >
                    ACCESSORIES
                </HoverCardTrigger>
                <HoverCardContent className="w-max" align="start">
                    <div className="flex flex-col gap-8">
                        <div className="flex gap-5">
                            <Checkbox
                                checked={filterOption.value.includes("bag")}
                                name="accessories"
                                id="accessories"
                                value={"bag"}
                                onChange={handleFilter}
                            >
                                <p className="text-[10px]">BAG</p>
                            </Checkbox>
                            <Checkbox
                                checked={filterOption.value.includes("sticker")}
                                name="accessories"
                                id="accessories"
                                value={"sticker"}
                                onChange={handleFilter}
                            >
                                <p className="text-[10px]">STICKER</p>
                            </Checkbox>
                            <Checkbox
                                checked={filterOption.value.includes("slides")}
                                name="accessories"
                                id="accessories"
                                value={"slides"}
                                onChange={handleFilter}
                            >
                                <p className="text-[10px]">SLIDES</p>
                            </Checkbox>
                        </div>
                        <div className="flex gap-2">
                            <Btn
                                className=" px-10 py-1.5 text-[9px] bg-yellow-300"
                                onClick={filterMethod}
                            >
                                APPLY
                            </Btn>
                            <Btn
                                className={" px-10 py-1.5 text-[9px] border"}
                                onClick={resetFilter}
                            >
                                RESET
                            </Btn>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
            <HoverCard openDelay={1000} onOpenChange={resetFilter}>
                <HoverCardTrigger
                    onClick={() => router.push("/catalog/music")}
                    className="hover:cursor-pointer text-[11px]"
                >
                    MUSIC
                </HoverCardTrigger>
                <HoverCardContent className="w-max" align="start">
                    <div className="flex flex-col gap-8">
                        <div className="flex gap-5">
                            <Checkbox
                                checked={filterOption.value.includes("vinyl")}
                                name="music"
                                id="music"
                                value={"vinyl"}
                                onChange={handleFilter}
                            >
                                <p className="text-[10px]">VINYL</p>
                            </Checkbox>
                            <Checkbox
                                checked={filterOption.value.includes(
                                    "cassette"
                                )}
                                name="music"
                                id="music"
                                value={"cassette"}
                                onChange={handleFilter}
                            >
                                <p className="text-[10px]">CASSETTE</p>
                            </Checkbox>
                        </div>
                        <div className="flex gap-2">
                            <Btn
                                className="px-10 py-1.5 text-[9px] bg-yellow-300"
                                onClick={filterMethod}
                            >
                                APPLY
                            </Btn>
                            <Btn
                                className={" px-10 py-1.5 text-[9px] border"}
                                data-name="music"
                                onClick={resetFilter}
                            >
                                RESET
                            </Btn>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
        </div>
    );
};

export default FilterOptions;
