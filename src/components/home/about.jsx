import React from "react";
import Btn from "../buttons/btn";
import Image from "next/image";

const About = () => {
    return (
        <div className="flex h-[80vh] justify-center items-start px-10 border-b rounded-b-3xl border-gray-400 relative mt-5">
            <div className="flex flex-col justify-center h-[450px] w-full gap-16  bg-[url('/home/bgbox.png')] bg-contain p-6 pr-10 bg-no-repeat">
                <div className="flex justify-between">
                    <div className="text-2xl font-semibold">
                        <h2>ABOUT US</h2>
                    </div>
                    <Btn>READ MORE</Btn>
                </div>
                <div className="flex gap-2 justify-between items-center flex-wrap">
                    <div className="w-72 h-48 border shrink-0">
                        <Image
                            src={"/home/tylerhome7.png"}
                            width={300}
                            height={400}
                            alt="about-us-tyler"
                            className="w-full h-full"
                        />
                    </div>
                    <div className="w-2/3 text-justify text-3xl font-medium indent-28 relative">
                        <p>
                            Golf Wang is an american streetwear brand
                            established in 2011 by american musician Tyler, The
                            Creator, Golf wang is know for its colorful visual
                            aesthetic. The brand has since expanded beyond its
                            odd future affiliation and has established itself in
                            the fashion industry.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
