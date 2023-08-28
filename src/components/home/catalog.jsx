import React from "react";
import Btn from "../buttons/btn";
import Link from "next/link";
import CatalogItem from "./catalog/catalogItem";
import Image from "next/image";

const Catalog = () => {
    return (
        <div className="flex flex-col gap-4 px-10 h-screen justify-center border-t border-gray-400 rounded-3xl mt-5">
            <div className="flex justify-between">
                <div className="text-xl font-semibold">
                    <h2>CATALOG</h2>
                </div>
                <Btn>SHOP NOW</Btn>
            </div>
            <div className="flex gap-2 [&>a:nth-child(4n+1)]:h-96 [&>a:nth-child(2n+2)]:h-[320px] [&>a:nth-child(3)]:h-[430px] [&>a]:w-1/2 items-start">
                <Link href={"/catalog/all"}>
                    <CatalogItem item={"Tops"}>
                        <Image
                            src={"/home/tops.png"}
                            width={300}
                            height={400}
                            alt="tops"
                            className="hover:scale-110 [transition:transform_.5s_ease-in]"
                        />
                    </CatalogItem>
                </Link>
                <Link href={"/catalog/hats"}>
                    <CatalogItem item={"Hat"}>
                        <Image
                            src={"/home/hats.png"}
                            width={300}
                            height={400}
                            alt="hat"
                            className="hover:scale-110 [transition:transform_.5s_ease-in]"
                        />
                    </CatalogItem>
                </Link>
                <Link href={"/catalog/bottoms"}>
                    <CatalogItem item={"Bottoms"}>
                        <Image
                            src={"/home/bottoms.png"}
                            width={300}
                            height={400}
                            alt="bottoms"
                            className="hover:scale-110 [transition:transform_.5s_ease-in]"
                        />
                    </CatalogItem>
                </Link>
                <Link href={"/accessories"}>
                    <CatalogItem item={"Accessories"}>
                        <Image
                            src={"/home/accessories.png"}
                            width={300}
                            height={400}
                            alt="accessories"
                            className="hover:scale-110 [transition:transform_.5s_ease-in]"
                        />
                    </CatalogItem>
                </Link>
                <Link href={"/catalog/music"}>
                    <CatalogItem item={"Music"}>
                        <Image
                            src={"/home/music.png"}
                            width={300}
                            height={400}
                            alt="music"
                            className="hover:scale-110 [transition:transform_.5s_ease-in]"
                        />
                    </CatalogItem>
                </Link>
            </div>
        </div>
    );
};

export default Catalog;
