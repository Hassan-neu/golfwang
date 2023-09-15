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
    const { handleFilter, resetFilter, filterOption } = useHandleFilter();
    return (
        <div className="hidden gap-7 font-light lg:flex">
            <HoverCard onOpenChange={resetFilter}>
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
                                name="tops"
                                id="tops"
                                value={"all"}
                                onChange={handleFilter}
                            >
                                <p className="text-[10px]">ALL</p>
                            </Checkbox>
                            <Checkbox
                                name="tops"
                                id="tops"
                                value={"jacket"}
                                onChange={handleFilter}
                            >
                                <p className="text-[10px]">JACKET</p>
                            </Checkbox>
                            <Checkbox
                                name="tops"
                                id="tops"
                                value={"knitwear"}
                                onChange={handleFilter}
                            >
                                <p className="text-[10px]">KNITWEAR</p>
                            </Checkbox>
                            <Checkbox
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
                                className=" px-6 py-2 text-[9px] bg-yellow-300"
                                onClick={() =>
                                    router.push(`/catalog/${filterOption.key}`)
                                }
                            >
                                APPLY
                            </Btn>
                            <Btn className={" px-6 py-2 text-[9px]"}>RESET</Btn>
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
                                name="bottoms"
                                id="bottoms"
                                value={"all"}
                                onChange={handleFilter}
                            >
                                <p className="text-[10px]">ALL</p>
                            </Checkbox>
                            <Checkbox
                                name="bottoms"
                                id="bottoms"
                                value={"pants"}
                                onChange={handleFilter}
                            >
                                <p className="text-[10px]">PANTS</p>
                            </Checkbox>
                            <Checkbox
                                name="bottoms"
                                id="bottoms"
                                value={"underwear"}
                                onChange={handleFilter}
                            >
                                <p className="text-[10px]">UNDERWEAR</p>
                            </Checkbox>
                            <Checkbox
                                name="bottoms"
                                id="bottoms"
                                value={"shorts"}
                                onChange={handleFilter}
                            >
                                <p className="text-[10px]">SHORTS</p>
                            </Checkbox>
                        </div>
                        <div className="flex gap-2">
                            <Btn
                                className=" px-6 py-2 text-[9px] bg-yellow-300"
                                onClick={() =>
                                    router.push(`/catalog/${filterOption.key}`)
                                }
                            >
                                APPLY
                            </Btn>
                            <Btn className={" px-6 py-2 text-[9px]"}>RESET</Btn>
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
                                name="hats"
                                id="hats"
                                value={"all"}
                                onChange={handleFilter}
                            >
                                <p className="text-[10px]">ALL</p>
                            </Checkbox>
                            <Checkbox
                                name="hats"
                                id="hats"
                                value={"beanies"}
                                onChange={handleFilter}
                            >
                                <p className="text-[10px]">BEANIES</p>
                            </Checkbox>
                            <Checkbox
                                name="hats"
                                id="hats"
                                value={"caps"}
                                onChange={handleFilter}
                            >
                                <p className="text-[10px]">CAPS</p>
                            </Checkbox>
                        </div>
                        <div className="flex gap-2">
                            <Btn
                                className=" px-6 py-2 text-[9px] bg-yellow-300"
                                onClick={() =>
                                    router.push(`/catalog/${filterOption.key}`)
                                }
                            >
                                APPLY
                            </Btn>
                            <Btn className={" px-6 py-2 text-[9px]"}>RESET</Btn>
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
                                name="accessories"
                                id="accessories"
                                value={"all"}
                                onChange={handleFilter}
                            >
                                <p className="text-[10px]">ALL</p>
                            </Checkbox>
                            <Checkbox
                                name="accessories"
                                id="accessories"
                                value={"bag"}
                                onChange={handleFilter}
                            >
                                <p className="text-[10px]">BAG</p>
                            </Checkbox>
                            <Checkbox
                                name="accessories"
                                id="accessories"
                                value={"stickers"}
                                onChange={handleFilter}
                            >
                                <p className="text-[10px]">STICKERS</p>
                            </Checkbox>
                            <Checkbox
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
                                className=" px-6 py-2 text-[9px] bg-yellow-300"
                                onClick={() =>
                                    router.push(`/catalog/${filterOption.key}`)
                                }
                            >
                                APPLY
                            </Btn>
                            <Btn className={" px-6 py-2 text-[9px]"}>RESET</Btn>
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
                                name="music"
                                id="music"
                                value={"all"}
                                onChange={handleFilter}
                            >
                                <p className="text-[10px]">ALL</p>
                            </Checkbox>
                            <Checkbox
                                name="music"
                                id="music"
                                value={"vinyl"}
                                onChange={handleFilter}
                            >
                                <p className="text-[10px]">VINYL</p>
                            </Checkbox>
                            <Checkbox
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
                                className="px-6 py-2 text-[9px] bg-yellow-300"
                                onClick={() =>
                                    router.push(`/catalog/${filterOption.key}`)
                                }
                            >
                                APPLY
                            </Btn>
                            <Btn
                                className={" px-6 py-2 text-[9px]"}
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
