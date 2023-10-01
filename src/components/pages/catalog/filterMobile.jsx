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
import useHandleQuery from "@/utils/functions/handleQuery";
const FilterMobile = () => {
    const router = useRouter();
    const { handleFilter, resetFilter, filterMethod, filterOption } =
        useHandleQuery();
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
                                    checked={filterOption.value.includes(
                                        "jacket"
                                    )}
                                    name="tops"
                                    id="tops"
                                    value={"jacket"}
                                    onChange={handleFilter}
                                >
                                    <p className="text-[10px]">JACKETS</p>
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
                                    <p className="text-[10px]">KNITWEARS</p>
                                </Checkbox>
                                <Checkbox
                                    checked={filterOption.value.includes("tee")}
                                    name="tops"
                                    id="tops"
                                    value={"tee"}
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
                                    checked={filterOption.value.includes(
                                        "pant"
                                    )}
                                    name="bottoms"
                                    id="bottoms"
                                    value={"pant"}
                                    onChange={handleFilter}
                                >
                                    <p className="text-[10px]">PANTS</p>
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
                                    <p className="text-[10px]">UNDERWEARS</p>
                                </Checkbox>
                                <Checkbox
                                    checked={filterOption.value.includes(
                                        "short"
                                    )}
                                    name="bottoms"
                                    id="bottoms"
                                    value={"short"}
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
                                    checked={filterOption.value.includes(
                                        "beanie"
                                    )}
                                    name="hats"
                                    id="hats"
                                    value={"beanie"}
                                    onChange={handleFilter}
                                >
                                    <p className="text-[10px]">BEANIES</p>
                                </Checkbox>
                                <Checkbox
                                    checked={filterOption.value.includes("cap")}
                                    name="hats"
                                    id="hats"
                                    value={"cap"}
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
                                    checked={filterOption.value.includes("bag")}
                                    name="accessories"
                                    id="accessories"
                                    value={"bag"}
                                    onChange={handleFilter}
                                >
                                    <p className="text-[10px]">BAGS</p>
                                </Checkbox>
                                <Checkbox
                                    checked={filterOption.value.includes(
                                        "sticker"
                                    )}
                                    name="accessories"
                                    id="accessories"
                                    value={"sticker"}
                                    onChange={handleFilter}
                                >
                                    <p className="text-[10px]">STICKERS</p>
                                </Checkbox>
                                <Checkbox
                                    checked={filterOption.value.includes(
                                        "slides"
                                    )}
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
                                    checked={filterOption.value.includes(
                                        "vinyl"
                                    )}
                                    name="music"
                                    id="music"
                                    value={"vinyl"}
                                    onChange={handleFilter}
                                >
                                    <p className="text-[10px]">VINYLS</p>
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
                                    <p className="text-[10px]">CASSETTES</p>
                                </Checkbox>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Btn
                            className={" px-6 py-3 text-[9px] bg-yellow-300"}
                            onClick={filterMethod}
                        >
                            APPLY
                        </Btn>
                        <Btn
                            className={" px-6 py-3 text-[9px] border"}
                            onClick={resetFilter}
                        >
                            RESET
                        </Btn>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default FilterMobile;
