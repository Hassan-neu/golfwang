import Btn from "@/components/shared/buttons/btn";
import Checkbox from "@/components/shared/checkbox";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { IoIosArrowDown } from "react-icons/io";

const FilterMobile = () => {
    return (
        <Sheet>
            <SheetTrigger className="flex gap-2 items-center">
                <span>CATEGORY</span>
                <IoIosArrowDown size={18} />
            </SheetTrigger>
            <SheetContent className="w-full" side={"left"}>
                <SheetHeader>
                    <SheetTitle>CATEGORY</SheetTitle>
                    <SheetDescription>
                        <div className="flex flex-col gap-8">
                            <div className="grid grid-cols-2 auto-rows-auto gap-5">
                                <div className="flex flex-col gap-3 items-start">
                                    <h1 className="text-xs font-medium text-neutral-500">
                                        TOPS
                                    </h1>
                                    <div className="flex flex-col gap-2">
                                        <Checkbox name="tops" id="all">
                                            <p className="text-[10px]">ALL</p>
                                        </Checkbox>
                                        <Checkbox name="tops" id="jacket">
                                            <p className="text-[10px]">
                                                JACKET
                                            </p>
                                        </Checkbox>
                                        <Checkbox name="tops" id="knitwear">
                                            <p className="text-[10px]">
                                                KNITWEAR
                                            </p>
                                        </Checkbox>
                                        <Checkbox name="tops" id="tees">
                                            <p className="text-[10px]">TEES</p>
                                        </Checkbox>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 items-start">
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
                                            <p className="text-[10px]">
                                                UNDERWEAR
                                            </p>
                                        </Checkbox>
                                        <Checkbox name="bottoms" id="shorts">
                                            <p className="text-[10px]">
                                                SHORTS
                                            </p>
                                        </Checkbox>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 items-start">
                                    <h1 className="text-xs font-medium text-neutral-500">
                                        HATS
                                    </h1>
                                    <div className="flex flex-col gap-2">
                                        <Checkbox name="hats" id="all">
                                            <p className="text-[10px]">ALL</p>
                                        </Checkbox>
                                        <Checkbox name="hats" id="beanies">
                                            <p className="text-[10px]">
                                                BEANIES
                                            </p>
                                        </Checkbox>
                                        <Checkbox name="hats" id="caps">
                                            <p className="text-[10px]">CAPS</p>
                                        </Checkbox>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 items-start">
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
                                        <Checkbox
                                            name="accessories"
                                            id="stickers"
                                        >
                                            <p className="text-[10px]">
                                                STICKERS
                                            </p>
                                        </Checkbox>
                                        <Checkbox
                                            name="accessories"
                                            id="slides"
                                        >
                                            <p className="text-[10px]">
                                                SLIDES
                                            </p>
                                        </Checkbox>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 items-start">
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
                                            <p className="text-[10px]">
                                                CASSETTE
                                            </p>
                                        </Checkbox>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Btn
                                    className={
                                        " px-6 py-3 text-[9px] bg-yellow-300"
                                    }
                                >
                                    APPLY
                                </Btn>
                                <Btn className={" px-6 py-3 text-[9px]"}>
                                    RESET
                                </Btn>
                            </div>
                        </div>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
};

export default FilterMobile;
