import Image from "next/image";
import React from "react";

const Loading = () => {
    return (
        <div className="h-screen flex justify-center items-center bg-yellow-400">
            <div className="w-16 h-16 lg:w-40 lg:h-40 relative animate-spin">
                <Image
                    src={"/golfwang.svg"}
                    alt={"golfwang-logo"}
                    fill={true}
                />
            </div>
        </div>
    );
};

export default Loading;
