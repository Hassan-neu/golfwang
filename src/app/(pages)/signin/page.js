"use client";
import Btn from "@/components/shared/buttons/btn";
import React from "react";
import { BiLogoGoogle } from "react-icons/bi";
import { signIn } from "next-auth/react";
const page = () => {
    return (
        <div className="h-screen flex justify-center items-center bg-yellow-400">
            <div className="w-[calc(100%_-_4rem)] max-w-[384px] h-52 border flex flex-col justify-center gap-2 items-center rounded-lg bg-white relative">
                <div>
                    Sign in to
                    <span className="font-extrabold">GOLFWANG by HASSAN</span>
                    with:
                </div>
                <Btn
                    className={
                        "flex gap-3 items-center border rounded bg-black text-yellow-400 active:scale-95"
                    }
                    onClick={() => signIn("google")}
                >
                    Google <BiLogoGoogle />
                </Btn>
            </div>
        </div>
    );
};

export default page;
