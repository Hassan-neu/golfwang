"use client";
import Btn from "@/components/shared/buttons/btn";
import Checkbox from "@/components/shared/checkbox";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
const FilterOptions = () => {
    const hoverCard = useRef();
    const router = useRouter();
    const [filterOption, setFilterOption] = useState({
        filterKey: "",
        filterValue: [],
    });
    const handleFilter = (e) =>
        setFilterOption((prev) =>
            e.target.checked
                ? {
                      filterKey: e.target.name,
                      filterValue: [...prev.filterValue, e.target.value],
                  }
                : {
                      filterKey: prev.filterKey,
                      filterValue: prev.filterValue.filter(
                          (val) => val !== e.target.value
                      ),
                  }
        );
    const resetFilter = (status) => {
        !status && setFilterOption({ filterKey: "", filterValue: [] });
    };
    return (
        <div className="hidden gap-7 font-light lg:flex" ref={hoverCard}>
            <HoverCard>
                <HoverCardTrigger
                    onClick={() => router.push("/catalog/all")}
                    className="hover:cursor-pointer"
                >
                    ALL
                </HoverCardTrigger>
                <HoverCardContent className="w-max" align="start">
                    <div className="flex flex-col gap-8">
                        <div className="flex gap-5">
                            <div className="flex flex-col gap-3">
                                <h1 className="text-xs font-medium text-neutral-500">
                                    TOPS
                                </h1>
                                <div className="flex flex-col gap-2">
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
                            </div>
                            <div className="flex flex-col gap-3">
                                <h1 className="text-xs font-medium text-neutral-500">
                                    BOTTOMS
                                </h1>
                                <div className="flex flex-col gap-2">
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
                            </div>
                            <div className="flex flex-col gap-3">
                                <h1 className="text-xs font-medium text-neutral-500">
                                    HATS
                                </h1>
                                <div className="flex flex-col gap-2">
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
                            </div>
                            <div className="flex flex-col gap-3">
                                <h1 className="text-xs font-medium text-neutral-500">
                                    ACCESSORIES
                                </h1>
                                <div className="flex flex-col gap-2">
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
                            </div>
                            <div className="flex flex-col gap-3">
                                <h1 className="text-xs font-medium text-neutral-500">
                                    MUSIC
                                </h1>
                                <div className="flex flex-col gap-2">
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
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Btn
                                className={
                                    " px-6 py-2 text-[9px] bg-yellow-300"
                                }
                            >
                                APPLY
                            </Btn>
                            <Btn className={" px-6 py-2 text-[9px]"}>RESET</Btn>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
            <HoverCard>
                <HoverCardTrigger
                    onClick={() => router.push("/catalog/new")}
                    className="hover:cursor-pointer"
                >
                    NEW
                </HoverCardTrigger>
                <HoverCardContent className="w-max" align="start">
                    <div className="flex flex-col gap-8">
                        <div className="flex gap-5">
                            <div className="flex flex-col gap-3">
                                <h1 className="text-xs font-medium text-neutral-500">
                                    TOPS
                                </h1>
                                <div className="flex flex-col gap-2">
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
                            </div>
                            <div className="flex flex-col gap-3">
                                <h1 className="text-xs font-medium text-neutral-500">
                                    BOTTOMS
                                </h1>
                                <div className="flex flex-col gap-2">
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
                            </div>
                            <div className="flex flex-col gap-3">
                                <h1 className="text-xs font-medium text-neutral-500">
                                    HATS
                                </h1>
                                <div className="flex flex-col gap-2">
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
                            </div>
                            <div className="flex flex-col gap-3">
                                <h1 className="text-xs font-medium text-neutral-500">
                                    ACCESSORIES
                                </h1>
                                <div className="flex flex-col gap-2">
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
                            </div>
                            <div className="flex flex-col gap-3">
                                <h1 className="text-xs font-medium text-neutral-500">
                                    MUSIC
                                </h1>
                                <div className="flex flex-col gap-2">
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
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Btn
                                className={
                                    " px-6 py-2 text-[9px] bg-yellow-300"
                                }
                            >
                                APPLY
                            </Btn>
                            <Btn className={" px-6 py-2 text-[9px]"}>RESET</Btn>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
            <HoverCard>
                <HoverCardTrigger
                    onClick={() => router.push("/catalog/tops")}
                    className="hover:cursor-pointer"
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
                                className={
                                    " px-6 py-2 text-[9px] bg-yellow-300"
                                }
                            >
                                APPLY
                            </Btn>
                            <Btn className={" px-6 py-2 text-[9px]"}>RESET</Btn>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
            <HoverCard>
                <HoverCardTrigger
                    onClick={() => router.push("/catalog/bottoms")}
                    className="hover:cursor-pointer"
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
                                className={
                                    " px-6 py-2 text-[9px] bg-yellow-300"
                                }
                            >
                                APPLY
                            </Btn>
                            <Btn className={" px-6 py-2 text-[9px]"}>RESET</Btn>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
            <HoverCard>
                <HoverCardTrigger
                    onClick={() => router.push("/catalog/hats")}
                    className="hover:cursor-pointer"
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
                                className={
                                    " px-6 py-2 text-[9px] bg-yellow-300"
                                }
                            >
                                APPLY
                            </Btn>
                            <Btn className={" px-6 py-2 text-[9px]"}>RESET</Btn>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
            <HoverCard>
                <HoverCardTrigger
                    onClick={() => router.push("/catalog/accessories")}
                    className="hover:cursor-pointer"
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
                                className={
                                    " px-6 py-2 text-[9px] bg-yellow-300"
                                }
                            >
                                APPLY
                            </Btn>
                            <Btn className={" px-6 py-2 text-[9px]"}>RESET</Btn>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
            <HoverCard onOpenChange={resetFilter}>
                <HoverCardTrigger
                    onClick={() => router.push("/catalog/music")}
                    className="hover:cursor-pointer"
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
                                className={
                                    " px-6 py-2 text-[9px] bg-yellow-300"
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
