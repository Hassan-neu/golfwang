"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

const Pagination = ({ totalPages, page }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const path = usePathname();
    const setPagination = (pageNumber) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber + 1);
        params.toString();
        return router.replace(`${path}?${params}`);
    };
    const length = Math.ceil(totalPages / 11);
    return (
        <div className="self-center">
            <div
                className={`flex gap-2 ${
                    !page
                        ? "[&>button:nth-child(2)]:bg-black [&>button:nth-child(2)]:text-white"
                        : ""
                }`}
            >
                <button
                    type="button"
                    onClick={() => setPagination(0)}
                    className="p-2 border rounded-lg w-10 h-10 flex justify-center items-center"
                >
                    <BiArrowBack />
                </button>
                {Array.from({ length }, (_v, i) => (
                    <button
                        type="button"
                        key={i}
                        onClick={() => setPagination(i)}
                        className={`p-1 border rounded-lg w-10 h-10 flex justify-center items-center ${
                            page == i + 1 ? "bg-black text-white" : ""
                        }`}
                    >
                        {console.log(!page && length <= 1)}
                        {i + 1}
                    </button>
                ))}
                <button
                    type="button"
                    onClick={() =>
                        setPagination(Math.ceil(totalPages / 11) - 1)
                    }
                    className="p-2 border rounded-lg w-10 h-10 flex justify-center items-center"
                >
                    <BiArrowBack className="rotate-180" />
                </button>
            </div>
        </div>
    );
};

export default Pagination;
