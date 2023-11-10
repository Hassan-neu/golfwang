import React from "react";
import Btn from "@/components/shared/buttons/btn";
import SortOptions from "./sortOption";
import FilterOptions from "./filterOptions";
import FilterMobile from "./filterMobile";
import SortMobile from "./sortMobile";
import Image from "next/image";
import {
    catalogProducts,
    getTotalPages,
} from "../../../../sanity/queries/queries";
import { Itemcard, EmptyItem } from "./itemcard";
import Pagination from "./pagination";
const ShopItems = async ({ category, searchParams }) => {
    const { sort, filter, page } = searchParams;
    const products = await catalogProducts(category, sort, filter, page);
    const totalPages = await getTotalPages(category, filter);
    return (
        <main className="flex flex-col gap-2 md:gap-4 lg:gap-6 min-h-screen mt-4">
            <div className="flex justify-between text-xs ">
                <div className="flex items-center">
                    <FilterOptions />
                    <div className="lg:hidden">
                        <FilterMobile />
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="hidden lg:flex  items-center font-bold">
                        <label htmlFor="sort" className=" text-gray-500">
                            SORT BY:
                        </label>

                        <SortOptions />
                    </div>
                    <div className="lg:hidden">
                        <SortMobile />
                    </div>
                </div>
            </div>
            <div className="pb-1 text-xl lg:text-5xl font-medium border-b mt-4">
                <div className="flex gap-3">
                    <h3 className="uppercase">{category}</h3>
                    <p className="text-sm self-start text-gray-400">
                        ({products.length})
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-2 h-full">
                <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] md:grid-cols-2 lg:grid-cols-5 auto-rows-auto gap-4 md:gap-3 md:gap-y-7 md:[&>a:nth-child(5)]:col-span-full md:[&>a:nth-child(8)]:col-span-full lg:[&>a:nth-child(5)]:col-span-1 lg:[&>a:nth-child(8)]:col-span-1">
                    {products.length > 0 ? (
                        products?.map((product) => (
                            <Itemcard key={product._id} product={product} />
                        ))
                    ) : (
                        <EmptyItem />
                    )}

                    <div
                        className={`hidden lg:${
                            products.length < 4 ? "hidden" : "flex"
                        } flex-col gap-[2px] col-start-4 col-end-6 row-start-1 row-end-3 `}
                    >
                        <div className="w-full self-center relative h-full overflow-hidden">
                            <Image
                                src={"/shop/shop1.png"}
                                alt={"itemplaceholder"}
                                fill={true}
                            />
                        </div>
                        <p className="text-neutral-400 text-sm w-52">
                            All cotton classic fit t-shirt with golf screen
                            printed logo
                        </p>
                    </div>
                </div>
            </div>
            <Pagination totalPages={Number(totalPages)} page={page} />
        </main>
    );
};
export default ShopItems;
