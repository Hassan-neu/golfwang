import React, { useRef } from "react";

const Banner = ({ banner }) => {
    return (
        <div
            ref={banner}
            className="w-full h-96 border mt-5  bg-[url('/shop/shop2.png')] bg-[size:calc(100%_+_100vh)] bg-[position:50%_50%] bg-no-repeat "
        ></div>
    );
};

export default Banner;
