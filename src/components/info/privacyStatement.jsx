import React from "react";

const PrivacyStatement = () => {
    return (
        <div className="flex flex-col gap-4 w-full md:w-3/5">
            <div className="flex flex-col gap-2">
                <h2 className="font-bold text-xs md:text-sm">GENERAL</h2>
                <p className="text-xs md:text-sm lg:text-base">
                    Golfwang.com stive to ensure that its services are
                    accessible to people with disabilities. Golfwang.com has
                    invested a significant amount of resources to help ensure
                    that its website is made easier to use andd more accessible
                    for people with disabilities, with the strong belif that
                    every person has the right to live with dignity, equality,
                    comfort and independence. Golfwang.com is taking measures to
                    ensure that all of the pages on the website meet W3C,
                    WAI&apos;s most recent Web Content Accessibilty Guidelines,
                    Levels A.
                </p>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="font-bold text-xs md:text-sm">DISCLAIMER</h2>
                <p className="text-xs md:text-sm lg:text-base">
                    Golfwang.com continues its effort to constantly improve the
                    accessiblity of its site and services in the belief that it
                    is our collective moral obligation to allow seamless,
                    accessible and unhindered use also for those of us with
                    disabilities. Despite our efforts to make all pages and
                    content on Golfwang fully accessible, this is a work in
                    progress. To the extent any content is not fully accessible,
                    this may be a result of Golfwang.com not having found or
                    identified the most appropriate technological solution.
                    Under such circumstances, we will work diligently to remedy
                    any inaccessibility.
                </p>
            </div>

            <div className="flex flex-col gap-2">
                <h2 className="font-bold text-xs md:text-sm">HERE FOR YOU</h2>
                <p className="text-xs md:text-sm lg:text-base">
                    If you are experiencing difficulty with any content on
                    Golgwang.com or require any assistance with any part of our
                    site, please contact us during normal business hours as
                    detailed below and we will be happ to assist.
                </p>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="font-bold text-xs md:text-sm">CONTACT US</h2>
                <p className="text-xs md:text-sm lg:text-base">
                    If you wish to report an accessiblity issue, have any
                    questions or need assistance, please contact Golfwang.com
                    via Customer Support.
                </p>
            </div>
        </div>
    );
};

export default PrivacyStatement;
