import Image from "next/image";
import Link from "next/link";
import React from "react";
import Btn from "@/components/shared/buttons/btn";

const Autumn = () => {
    return (
        <div className="flex flex-col h-full gap-5">
            <div className="relative">
                <div className="flex flex-col text-2xl md:text-7xl lg:text-9xl items-start lg:items-center font-extrabold">
                    <h1 className=" lg:[transform:scale(1.15,1.15)]">
                        COLLECTION:
                    </h1>
                    <h1 className="lg:[transform:scale(1.15,1.15)]">
                        AUTUMN 2022
                    </h1>
                </div>
                <div className="hidden lg:block w-56 h-32 border absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <Image
                        src="/winter/wmodel11.png"
                        alt="winter-model-11"
                        fill={true}
                    />
                </div>
            </div>
            <div className="hidden lg:flex gap-2 h-screen justify-center">
                <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-2 w-60">
                        <p className="text-sm text-gray-400">
                            The collection&apos;s wrestling shirt, puzzle
                            jacket, and all the puffers are undoubtedly the
                            season&apos;s banger, landing on nearly every GOLF
                            head&apos;s wishlist
                        </p>
                        <div className="border-b-2 border-black text-sm font-semibold self-start">
                            <Link href="/catalog/all">SHOP NOW</Link>
                        </div>
                    </div>
                    <div className="w-64 h-80 relative">
                        <Image
                            src="/autumn/autmodel10.png"
                            alt="autumn-model-10"
                            fill={true}
                        />
                        <div className="w-full h-full absolute -top-8 -left-8 border -z-20"></div>
                        <div className="bg-yellow-400 w-full h-full absolute -top-4 -left-4 border -z-10"></div>
                    </div>
                </div>
                <div className="w-2/5 h-full relative">
                    <Image
                        src="/autumn/autmodel9.png"
                        alt="autumn-model-9"
                        fill={true}
                    />
                </div>
            </div>
            <div className="hidden lg:block w-64 self-center">
                <p className="text-sm text-gray-400">
                    All nylon jacket with water resistance coating and duck down
                    filling. Left chest pvc patch, velcro closures at cuffs and
                    cinch toggles at waist
                </p>
            </div>
            <div className="hidden lg:flex gap-3 h-[95vh] justify-center">
                <div className="w-[35%] h-full relative">
                    <Image
                        src="/autumn/autmodel6.png"
                        alt="autumn-model-6"
                        fill={true}
                    />
                </div>
                <div className="flex flex-col gap-3 w-64">
                    <div className="w-full h-1/2 relative">
                        <Image
                            src="/autumn/autmodel8.png"
                            alt="autumn-model-8"
                            fill={true}
                        />
                    </div>
                    <div className="w-full h-1/2 relative">
                        <Image
                            src="/autumn/autmodel7.png"
                            alt="autumn-model-7"
                            fill={true}
                        />
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex flex-col gap-2 w-80 self-center">
                <h2 className="text-3xl font-semibold">
                    COLORFUL VISUAL AESTHETIC
                </h2>
                <p className="text-sm text-gray-400">
                    Heavyweight sherpa fleece jacket with ribbed cuffs and hem.
                    Heavy duty of zipper and custom golf patch at front pocket.
                    All leather jacket with chenile front chest graphic, ribbed
                    trims and metal snap closures.
                </p>
            </div>
            <div className="hidden lg:flex gap-3 h-[150vh] justify-center px-5">
                <div className="w-3/5 h-full shrink-0 relative">
                    <Image
                        src="/autumn/autmodel3.png"
                        alt="autumn-model-3"
                        fill={true}
                    />
                </div>
                <div className="flex flex-col gap-3 w-full">
                    <div className="w-[45%] h-[30%] shrink-0 relative">
                        <Image
                            src="/autumn/autmodel5.png"
                            alt="autumn-model-5"
                            fill={true}
                        />
                    </div>
                    <div className="w-full h-full relative">
                        <Image
                            src="/autumn/autmodel4.png"
                            alt="autumn-model-4"
                            fill={true}
                        />
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex gap-2 h-screen justify-center">
                <div className="w-64 h-80 self-end relative">
                    <Image
                        src="/autumn/autmodel2.png"
                        alt="autumn-model-2"
                        fill={true}
                    />
                    <div className="w-full h-full absolute -top-8 -left-8 border -z-20"></div>
                    <div className="bg-yellow-400 w-full h-full absolute -top-4 -left-4 border -z-10"></div>
                </div>

                <div className="w-2/5 h-full relative">
                    <Image
                        src="/autumn/autmodel1.png"
                        alt="autumn-model-1"
                        fill={true}
                    />
                </div>
            </div>
            <div className="flex gap-4 overflow-scroll h-[50vh] md:h-[65vh] lg:hidden hidescroll">
                <div className="w-3/4 md:w-2/3 h-full border shrink-0 relative">
                    <Image
                        src="/autumn/autmodel9.png"
                        alt="autumn-model-9"
                        fill={true}
                    />
                </div>
                <div className="w-3/4 md:w-2/3 h-full border shrink-0 relative">
                    <Image
                        src="/autumn/autmodel10.png"
                        alt="autumn-model-10"
                        fill={true}
                    />
                </div>
                <div className="w-3/4 md:w-2/3 h-full border shrink-0 relative">
                    <Image
                        src="/autumn/autmodel6.png"
                        alt="autumn-model-6"
                        fill={true}
                    />
                </div>
                <div className="w-3/4 md:w-2/3 h-full border shrink-0 relative">
                    <Image
                        src="/autumn/autmodel8.png"
                        alt="autumn-model-8"
                        fill={true}
                    />
                </div>
                <div className="w-3/4 md:w-2/3 h-full border shrink-0 relative">
                    <Image
                        src="/autumn/autmodel7.png"
                        alt="autumn-model-7"
                        fill={true}
                    />
                </div>
                <div className="w-3/4 md:w-2/3 h-full border shrink-0 relative">
                    <Image
                        src="/autumn/autmodel3.png"
                        alt="autumn-model-3"
                        fill={true}
                    />
                </div>
                <div className="w-3/4 md:w-2/3 h-full border shrink-0 relative">
                    <Image
                        src="/autumn/autmodel5.png"
                        alt="autumn-model-5"
                        fill={true}
                    />
                </div>
                <div className="w-3/4 md:w-2/3 h-full border shrink-0 relative">
                    <Image
                        src="/autumn/autmodel4.png"
                        alt="autumn-model-4"
                        fill={true}
                    />
                </div>
                <div className="w-3/4 md:w-2/3 h-full border shrink-0 relative">
                    <Image
                        src="/autumn/autmodel2.png"
                        alt="autumn-model-2"
                        fill={true}
                    />
                </div>
                <div className="w-3/4 md:w-2/3 h-full border shrink-0 relative">
                    <Image
                        src="/autumn/autmodel1.png"
                        alt="autumn-model-1"
                        fill={true}
                    />
                </div>
            </div>
            <div className="flex gap-8 text-sm text-neutral-500 lg:hidden">
                <div>
                    The collection&apos;s wrestling shirt, puzzle jacket, and
                    all of the puffers are undoubtedly the season&apos;s
                    bangers, landing on nearly every GOLF heads&apos; wishlist.
                </div>
                <div className="hidden md:block">
                    All nylon jacket with water resistance coating and duck down
                    filling. Left chest pvc patch, velcro closures at cuffs and
                    cinch toggles at waist.
                </div>
            </div>
            <Btn
                className={
                    "py-4 self-stretch text-lg bg-black text-white lg:hidden"
                }
            >
                <Link href={"/catalog/all"}>SHOP NOW</Link>
            </Btn>
        </div>
    );
};

export default Autumn;
