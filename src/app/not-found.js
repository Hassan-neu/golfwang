import Link from "next/link";
import React from "react";

const NotFound = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-[#f2f2f2] bg-[url('/home/noise.png')] ">
            <div className="flex divide-x-2">
                <p className="p-2">404</p>
                <p className="p-2">This page does not exist</p>
            </div>
            <div className="flex gap-1">
                <span>Back to</span>
                <span>
                    <Link href={"/"} className="underline">
                        {" "}
                        Home
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default NotFound;
