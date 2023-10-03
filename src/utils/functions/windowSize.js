import React from "react";
import { useState, useEffect } from "react";
const useWindowSize = () => {
    const [size, setSize] = useState(0);
    const smallScreen = size <= 1024;
    const largeScreen = size > 1024;
    useEffect(() => {
        if (typeof window !== undefined) {
            function checkWindowSize() {
                setSize(window.innerWidth);
            }
            window.addEventListener("resize", () => checkWindowSize);
            checkWindowSize();
            return () =>
                window.removeEventListener("resize", () => checkWindowSize);
        }
    }, []);
    return { size, smallScreen, largeScreen };
};

export default useWindowSize;
