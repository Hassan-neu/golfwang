"use client";
import Btn from "@/components/shared/buttons/btn";
import Checkbox from "@/components/shared/checkbox";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/navigation";
import useHandleFilter from "@/utils/functions/handleFilter";
const FilterMobile = () => {
    const router = useRouter();
    const { handleFilter, resetFilter, filterOption } = useHandleFilter();
    console.log(filterOption);

    return (
        <Sheet onOpenChange={resetFilter}>
            <SheetTrigger className="flex gap-2 items-center">
                <span>CATEGORY</span>
                <IoIosArrowDown size={18} />
            </SheetTrigger>
            <SheetContent className="w-full" side={"left"}>
                <SheetHeader className="relative -top-4">
                    <SheetTitle>CATEGORY</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-8">
                    <div className="grid grid-cols-2 auto-rows-auto gap-5">
                        <div className="flex flex-col gap-3 items-start">
                            <h1
                                className="text-xs font-medium text-neutral-500"
                                onClick={() => router.push("/catalog/tops")}
                            >
                                TOPS
                            </h1>
                            <div className="flex flex-col gap-2">
                                <Checkbox name="tops" id="tops" value={"all"}>
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
                        <div className="flex flex-col gap-3 items-start">
                            <h1
                                className="text-xs font-medium text-neutral-500"
                                onClick={() => router.push("/catalog/bottoms")}
                            >
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
                        <div className="flex flex-col gap-3 items-start">
                            <h1
                                className="text-xs font-medium text-neutral-500"
                                onClick={() => router.push("/catalog/hats")}
                            >
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
                        <div className="flex flex-col gap-3 items-start">
                            <h1
                                className="text-xs font-medium text-neutral-500"
                                onClick={() =>
                                    router.push("/catalog/accessories")
                                }
                            >
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
                        <div className="flex flex-col gap-3 items-start">
                            <h1
                                className="text-xs font-medium text-neutral-500"
                                onClick={() => router.push("/catalog/music")}
                            >
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
                    <div className="flex flex-col gap-2">
                        <Btn
                            className={" px-6 py-3 text-[9px] bg-yellow-300"}
                            onClick={() => console.log(filterOption)}
                        >
                            APPLY
                        </Btn>
                        <Btn className={" px-6 py-3 text-[9px]"}>RESET</Btn>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default FilterMobile;
