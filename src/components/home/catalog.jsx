import React from "react";
import Btn from "../buttons/btn";
import Link from "next/link";
import CatalogItem from "./catalog/catalogItem";
import Image from "next/image";

const Catalog = () => {
    return (
        <div className="flex flex-col gap-4 px-2 md:px-10 h-[70vh] md:h-screen  justify-start md:justify-center md:border-t md:border-gray-400 rounded-3xl mt-14 md:mt-5">
            <div className="flex justify-between">
                <div className="text-xl md:text-4xl font-medium">
                    <h2>CATALOG</h2>
                </div>
                <Btn className={"hidden md:block"}>
                    <Link href={"/catalog/all"}>SHOP NOW</Link>
                </Btn>
            </div>
            <div className="flex gap-2 overflow-scroll md:overflow-hidden [&>a]:h-96 md:[&>a:nth-child(4n+1)]:h-[430px] md:[&>a:nth-child(2n+2)]:h-96 md:[&>a:nth-child(3)]:h-[480px] [&>a]:w-3/4 [&>a]:shrink-0 md:[&>a]:shrink items-start">
                <Link href={"/catalog/tops"}>
                    <CatalogItem item={"Tops"}>
                        <Image
                            src={"/home/tops.png"}
                            fill={true}
                            alt="tops"
                            className="md:hover:scale-110 [transition:transform_.5s_ease-in]"
                        />
                    </CatalogItem>
                </Link>
                <Link href={"/catalog/hats"}>
                    <CatalogItem item={"Hat"}>
                        <Image
                            src={"/home/hats.png"}
                            fill={true}
                            alt="hat"
                            className="md:hover:scale-110 [transition:transform_.5s_ease-in]"
                        />
                    </CatalogItem>
                </Link>
                <Link href={"/catalog/bottoms"}>
                    <CatalogItem item={"Bottoms"}>
                        <Image
                            src={"/home/bottoms.png"}
                            fill={true}
                            alt="bottoms"
                            className="md:hover:scale-110 [transition:transform_.5s_ease-in]"
                        />
                    </CatalogItem>
                </Link>
                <Link href={"/accessories"}>
                    <CatalogItem item={"Accessories"}>
                        <Image
                            src={"/home/accessories.png"}
                            fill={true}
                            alt="accessories"
                            className="md:hover:scale-110 [transition:transform_.5s_ease-in]"
                        />
                    </CatalogItem>
                </Link>
                <Link href={"/catalog/music"}>
                    <CatalogItem item={"Music"}>
                        <Image
                            src={"/home/music.png"}
                            fill={true}
                            alt="music"
                            className="md:hover:scale-110 [transition:transform_.5s_ease-in]"
                        />
                    </CatalogItem>
                </Link>
            </div>
            <Btn className={"py-4 self-stretch bg-black text-white md:hidden"}>
                <Link href={"/catalog/all"}>SHOP NOW</Link>
            </Btn>
        </div>
    );
};

export default Catalog;
