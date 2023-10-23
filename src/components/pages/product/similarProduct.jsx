import React from "react";
import Btn from "@/components/shared/buttons/btn";
import Link from "next/link";
import Itemcard from "../catalog/itemcard";
import { client } from "../../../../sanity/lib/client";
const SimilarProducts = async ({ slug }) => {
    const getProducts = async () => {
        const res = await client.fetch(
            `*[_type=='product' && slug.current=='${slug}'][0]{'similar':*[_type=='product' && slug.current!='${slug}' && category._ref == ^.category._ref]{...,category->{name}}}`,
            {
                next: {
                    revalidate: 30,
                },
            }
        );
        return res;
    };
    const { similar } = await getProducts();
    return (
        <>
            {similar.length > 0 ? (
                <div className="flex flex-col gap-2 mt-16">
                    <div className="flex justify-between">
                        <div className="text-xl md:text-4xl font-medium">
                            <h2>YOU MAY ALSO LIKE</h2>
                        </div>
                        <Btn className="hidden border md:block">
                            <Link
                                href={`/catalog/${similar[0].category?.name}`}
                            >
                                SHOW MORE
                            </Link>
                        </Btn>
                    </div>
                    <div className="flex flex-row overflow-scroll hidescroll gap-3 py-2  [&>a]:shrink-0">
                        {similar?.map((product) => (
                            <Itemcard key={product._id} product={product} />
                        ))}
                    </div>
                    <Btn className="bg-black self-stretch text-white py-4 md:hidden">
                        <Link href={`/catalog/${similar[0].category?.name}`}>
                            SHOW MORE
                        </Link>
                    </Btn>
                </div>
            ) : (
                ""
            )}
        </>
    );
};
export default SimilarProducts;
