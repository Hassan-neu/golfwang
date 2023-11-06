"use client";
import React, { useState, useEffect } from "react";

const ZustandHydration = ({ children }) => {
    const [isHydrated, setIsHydrated] = useState(false);
    useEffect(() => {
        setIsHydrated(true);
    }, []);
    return <>{isHydrated ? <>{children}</> : null}</>;
};

export default ZustandHydration;
