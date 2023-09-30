import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
const useHandleFilter = () => {
    const router = useRouter();
    const path = usePathname();
    const searchParams = useSearchParams();
    const sortMethod = (value) => {
        const params = new URLSearchParams(searchParams);
        params.set("sort", value);
        params.toString();
        return router.push(`${path}?${params}`);
    };
    const [filterOption, setFilterOption] = useState({
        key: "",
        value: [],
    });
    const resetFilter = () => {
        setFilterOption({ key: "", value: [] });
    };
    const handleFilter = (e) => {
        setFilterOption((prev) =>
            e.target.checked
                ? {
                      key: e.target.name,
                      value: [...prev.value, e.target.value],
                  }
                : {
                      key: prev.key,
                      value: prev.value.filter((val) => val !== e.target.value),
                  }
        );
    };

    const filterMethod = () => {
        const params = new URLSearchParams(searchParams);
        params.set("filter", filterOption.value.join(","));
        params.toString();
        return router.push(`${filterOption.key}?${params}`);
    };

    return {
        filterOption,
        resetFilter,
        handleFilter,
        sortMethod,
        filterMethod,
    };
};

export default useHandleFilter;
