import React from "react";
import Btn from "../../shared/buttons/btn";
import Link from "next/link";
import Image from "next/image";
import { client } from "../../../../sanity/lib/client";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import { urlForImage } from "../../../../sanity/lib/image";
const NewArrivals = async () => {
    const getProducts = async () => {
        const res = await client.fetch(
            `*[_type=='product'] | order(_createdAt desc)[0..5]`
        );
        return res;
    };
    const products = await getProducts();
    return (
        <div className="flex flex-col gap-2 lg:gap-4 px-2 md:px-5 lg:p-10 lg:min-h-screen justify-start lg:justify-center lg:border lg:border-gray-400 lg:rounded-3xl mt-14  md:mt-20 lg:mt-5 ">
            <div className="flex justify-between">
                <div className="text-xl md:text-4xl font-medium">
                    <h2>NEW ARRIVALS</h2>
                </div>
                <Btn className="hidden border md:block">
                    <Link href={"/catalog/new"}>SHOW MORE</Link>
                </Btn>
            </div>
            <div className="flex gap-3 w-full flex-nowrap overflow-x-scroll py-2 lg:py-10 hidescroll transition">
                {products.map((product) => (
                    <NewItem key={product._id} product={product} />
                ))}
                {/* <div className="hidden lg:block w-[594px] max-w-[594px] h-[600px] max-h-[600px] border relative bg-yellow-400 shrink-0"></div> */}
            </div>
            <Btn className="bg-black self-stretch text-white py-4 md:hidden">
                <Link href={"/catalog/new"}>SHOW MORE</Link>
            </Btn>
            <div className="hidden lg:flex gap-1">
                <Btn className="rounded-full w-10 h-10 border flex items-center justify-center text-gray-500">
                    <IoArrowBack />
                </Btn>
                <Btn className="rounded-full w-10 h-10 border flex items-center justify-center text-gray-500">
                    <IoArrowForward />
                </Btn>
            </div>
        </div>
    );
};

const NewItem = ({ product }) => {
    const {
        colors,
        images,
        name,
        price,
        slug: { current },
    } = product;
    return (
        <Link
            href={`/product/${current}`}
            className="w-72 lg:w-72 h-96 lg:h-96 shrink-0 flex flex-col gap-1"
        >
            <div className="flex flex-col p-5 relative border border-neutral-400 bg-[#f2f2f2] bg-[url('/home/noise.png')] ">
                <p className="text-neutral-400 text-xs uppercase self-end">
                    {colors.length + " " + "colors"}
                </p>
                <div className="w-full max-w-[350px] self-center relative h-64">
                    <Image
                        src={urlForImage(images[0]).url()}
                        alt={"itemplaceholder"}
                        fill={true}
                        className="lg:hover:scale-110 [transition:transform_.5s_ease-in]"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-xs font-semibold uppercase">{name}</p>
                <p className="text-sm text-neutral-400">$ {price}</p>
            </div>
        </Link>
    );
};

export default NewArrivals;
