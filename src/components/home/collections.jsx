import React from "react";
import Btn from "../buttons/btn";
import Link from "next/link";

const Collections = () => {
    return (
        <div className="flex flex-col gap-6 px-10 h-[120vh] justify-center border border-gray-400 rounded-3xl mt-5">
            <div className="flex justify-between">
                <div className="text-xl font-semibold">
                    <h2>COLLECTIONS</h2>
                </div>
                <Btn>SHOW MORE</Btn>
            </div>
            <div className="border-t flex items-center py-2 h-2/5 relative">
                <div className="w-60 h-72 border absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"></div>
                <div className="w-60 h-72 border absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"></div>
                <div className="w-60 h-72 border absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"></div>
                <div className="w-60 h-72 border absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"></div>
                <div className="w-60 h-72 border absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"></div>
            </div>
            <div className="flex justify-center items-center bg-yellow-300 rounded-[30px] py-10 border-2 border-black">
                <div className="flex flex-col gap-4 w-2/5 items-start">
                    <div className="flex flex-col gap-1 items-center">
                        <h2 className="text-4xl font-medium">
                            SUBSCRIBE TO NEWSLETTER
                        </h2>
                        <p className="text-gray-400 text-sm">
                            to receive notifications about new collections, news
                            and special offers
                        </p>
                    </div>
                    <form action="POST" className="flex gap-2 w-full">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="E-mail"
                            className="border border-black focus:outline-none px-4 py-2 w-full placeholder:text-sm"
                        />
                        <button className="bg-black px-4 py-2 text-white text-xs">
                            SUBSCRIBE
                        </button>
                    </form>
                    <div className="flex gap-2 items-center">
                        <span className="w-[12px] h-[12px] border border-black flex justify-center items-center">
                            <input
                                type="checkbox"
                                name="agreement"
                                id="agreement"
                                className="appearance-none m-auto w-[7px] h-[7px] checked:bg-black"
                            />
                        </span>

                        <p className="text-xs">
                            I agree to{" "}
                            <Link href="" className="underline">
                                {" "}
                                personal data protection policy
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collections;
