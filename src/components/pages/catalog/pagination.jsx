"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

const Pagination = ({ totalPages }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const path = usePathname();
    const setPagination = (pageNumber) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber);
        params.toString();
        return router.replace(`${path}?${params}`, { scroll: false });
    };
    return (
        <div className="self-center">
            <div className="flex gap-2">
                <button
                    type="button"
                    className="p-2 border rounded-lg w-10 h-10 flex justify-center items-center"
                >
                    <BiArrowBack />
                </button>
                {Array.from({ length: totalPages }, (_v, i) => (
                    <button
                        type="button"
                        key={i}
                        onClick={() => setPagination(i + 1)}
                        className="p-1 border rounded-lg w-10 h-10 flex justify-center items-center"
                    >
                        {i + 1}
                    </button>
                ))}
                <button
                    type="button"
                    className="p-2 border rounded-lg w-10 h-10 flex justify-center items-center"
                >
                    <BiArrowBack className="rotate-180" />
                </button>
            </div>
        </div>
    );
};

export default Pagination;
