"use client";
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
    return (
        <>
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
                                    <Checkbox name="tops" id="all">
                                        <p className="text-[10px]">ALL</p>
                                    </Checkbox>
                                    <Checkbox name="tops" id="jacket">
                                        <p className="text-[10px]">JACKET</p>
                                    </Checkbox>
                                    <Checkbox name="tops" id="knitwear">
                                        <p className="text-[10px]">KNITWEAR</p>
                                    </Checkbox>
                                    <Checkbox name="tops" id="tees">
                                        <p className="text-[10px]">TEES</p>
                                    </Checkbox>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h1 className="text-xs font-medium text-neutral-500">
                                    BOTTOMS
                                </h1>
                                <div className="flex flex-col gap-2">
                                    <Checkbox name="bottoms" id="all">
                                        <p className="text-[10px]">ALL</p>
                                    </Checkbox>
                                    <Checkbox name="bottoms" id="pants">
                                        <p className="text-[10px]">PANTS</p>
                                    </Checkbox>
                                    <Checkbox name="bottoms" id="underwear">
                                        <p className="text-[10px]">UNDERWEAR</p>
                                    </Checkbox>
                                    <Checkbox name="bottoms" id="shorts">
                                        <p className="text-[10px]">SHORTS</p>
                                    </Checkbox>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h1 className="text-xs font-medium text-neutral-500">
                                    HATS
                                </h1>
                                <div className="flex flex-col gap-2">
                                    <Checkbox name="hats" id="all">
                                        <p className="text-[10px]">ALL</p>
                                    </Checkbox>
                                    <Checkbox name="hats" id="beanies">
                                        <p className="text-[10px]">BEANIES</p>
                                    </Checkbox>
                                    <Checkbox name="hats" id="caps">
                                        <p className="text-[10px]">CAPS</p>
                                    </Checkbox>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h1 className="text-xs font-medium text-neutral-500">
                                    ACCESSORIES
                                </h1>
                                <div className="flex flex-col gap-2">
                                    <Checkbox name="accessories" id="all">
                                        <p className="text-[10px]">ALL</p>
                                    </Checkbox>
                                    <Checkbox name="accessories" id="bag">
                                        <p className="text-[10px]">BAG</p>
                                    </Checkbox>
                                    <Checkbox name="accessories" id="stickers">
                                        <p className="text-[10px]">STICKERS</p>
                                    </Checkbox>
                                    <Checkbox name="accessories" id="slides">
                                        <p className="text-[10px]">SLIDES</p>
                                    </Checkbox>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h1 className="text-xs font-medium text-neutral-500">
                                    MUSIC
                                </h1>
                                <div className="flex flex-col gap-2">
                                    <Checkbox name="music" id="all">
                                        <p className="text-[10px]">ALL</p>
                                    </Checkbox>
                                    <Checkbox name="music" id="vinyl">
                                        <p className="text-[10px]">VINYL</p>
                                    </Checkbox>
                                    <Checkbox name="music" id="cassette">
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
                                    <Checkbox name="tops" id="all">
                                        <p className="text-[10px]">ALL</p>
                                    </Checkbox>
                                    <Checkbox name="tops" id="jacket">
                                        <p className="text-[10px]">JACKET</p>
                                    </Checkbox>
                                    <Checkbox name="tops" id="knitwear">
                                        <p className="text-[10px]">KNITWEAR</p>
                                    </Checkbox>
                                    <Checkbox name="tops" id="tees">
                                        <p className="text-[10px]">TEES</p>
                                    </Checkbox>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h1 className="text-xs font-medium text-neutral-500">
                                    BOTTOMS
                                </h1>
                                <div className="flex flex-col gap-2">
                                    <Checkbox name="bottoms" id="all">
                                        <p className="text-[10px]">ALL</p>
                                    </Checkbox>
                                    <Checkbox name="bottoms" id="pants">
                                        <p className="text-[10px]">PANTS</p>
                                    </Checkbox>
                                    <Checkbox name="bottoms" id="underwear">
                                        <p className="text-[10px]">UNDERWEAR</p>
                                    </Checkbox>
                                    <Checkbox name="bottoms" id="shorts">
                                        <p className="text-[10px]">SHORTS</p>
                                    </Checkbox>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h1 className="text-xs font-medium text-neutral-500">
                                    HATS
                                </h1>
                                <div className="flex flex-col gap-2">
                                    <Checkbox name="hats" id="all">
                                        <p className="text-[10px]">ALL</p>
                                    </Checkbox>
                                    <Checkbox name="hats" id="beanies">
                                        <p className="text-[10px]">BEANIES</p>
                                    </Checkbox>
                                    <Checkbox name="hats" id="caps">
                                        <p className="text-[10px]">CAPS</p>
                                    </Checkbox>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h1 className="text-xs font-medium text-neutral-500">
                                    ACCESSORIES
                                </h1>
                                <div className="flex flex-col gap-2">
                                    <Checkbox name="accessories" id="all">
                                        <p className="text-[10px]">ALL</p>
                                    </Checkbox>
                                    <Checkbox name="accessories" id="bag">
                                        <p className="text-[10px]">BAG</p>
                                    </Checkbox>
                                    <Checkbox name="accessories" id="stickers">
                                        <p className="text-[10px]">STICKERS</p>
                                    </Checkbox>
                                    <Checkbox name="accessories" id="slides">
                                        <p className="text-[10px]">SLIDES</p>
                                    </Checkbox>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h1 className="text-xs font-medium text-neutral-500">
                                    MUSIC
                                </h1>
                                <div className="flex flex-col gap-2">
                                    <Checkbox name="music" id="all">
                                        <p className="text-[10px]">ALL</p>
                                    </Checkbox>
                                    <Checkbox name="music" id="vinyl">
                                        <p className="text-[10px]">VINYL</p>
                                    </Checkbox>
                                    <Checkbox name="music" id="cassette">
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
                            <Checkbox name="tops" id="all">
                                <p className="text-[10px]">ALL</p>
                            </Checkbox>
                            <Checkbox name="tops" id="jacket">
                                <p className="text-[10px]">JACKET</p>
                            </Checkbox>
                            <Checkbox name="tops" id="knitwear">
                                <p className="text-[10px]">KNITWEAR</p>
                            </Checkbox>
                            <Checkbox name="tops" id="tees">
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
                            <Checkbox name="bottoms" id="all">
                                <p className="text-[10px]">ALL</p>
                            </Checkbox>
                            <Checkbox name="bottoms" id="pants">
                                <p className="text-[10px]">PANTS</p>
                            </Checkbox>
                            <Checkbox name="bottoms" id="underwear">
                                <p className="text-[10px]">UNDERWEAR</p>
                            </Checkbox>
                            <Checkbox name="bottoms" id="shorts">
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
                            <Checkbox name="hats" id="all">
                                <p className="text-[10px]">ALL</p>
                            </Checkbox>
                            <Checkbox name="hats" id="beanies">
                                <p className="text-[10px]">BEANIES</p>
                            </Checkbox>
                            <Checkbox name="hats" id="caps">
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
                            <Checkbox name="accessories" id="all">
                                <p className="text-[10px]">ALL</p>
                            </Checkbox>
                            <Checkbox name="accessories" id="bag">
                                <p className="text-[10px]">BAG</p>
                            </Checkbox>
                            <Checkbox name="accessories" id="stickers">
                                <p className="text-[10px]">STICKERS</p>
                            </Checkbox>
                            <Checkbox name="accessories" id="slides">
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
            <HoverCard>
                <HoverCardTrigger
                    onClick={() => router.push("/catalog/music")}
                    className="hover:cursor-pointer"
                >
                    MUSIC
                </HoverCardTrigger>
                <HoverCardContent className="w-max" align="start">
                    <div className="flex flex-col gap-8">
                        <div className="flex gap-5">
                            <Checkbox name="music" id="all">
                                <p className="text-[10px]">ALL</p>
                            </Checkbox>
                            <Checkbox name="music" id="vinyl">
                                <p className="text-[10px]">VINYL</p>
                            </Checkbox>
                            <Checkbox name="music" id="cassette">
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
                            <Btn className={" px-6 py-2 text-[9px]"}>RESET</Btn>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
        </>
    );
};

export default FilterOptions;
