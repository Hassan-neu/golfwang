import React from "react";
import { useState, useEffect } from "react";
const useWindowSize = () => {
    const [size, setSize] = useState(0);
    const smallScreen = size <= 1024;
    const largeScreen = size > 1024;
    useEffect(() => {
        window.addEventListener("resize", () => setSize(window.innerWidth));
        return () =>
            window.removeEventListener("resize", () =>
                setSize(window.innerWidth)
            );
    });
    return { size, smallScreen, largeScreen };
};

export default useWindowSize;
