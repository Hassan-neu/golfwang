import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
const useHandleQuery = () => {
    const router = useRouter();
    const path = usePathname();
    const searchParams = useSearchParams();
    const sortMethod = (value) => {
        const params = new URLSearchParams(searchParams);
        params.set("sort", value);
        params.toString();
        return router.replace(`${path}?${params}`, { scroll: false });
    };
    const [filterOption, setFilterOption] = useState({
        key: "",
        value: [],
    });
    const resetFilter = () => {
        setFilterOption({ key: "", value: [] });
    };
    const handleFilter = (e) => {
        setFilterOption((prev) => {
            if (e.target.checked) {
                if (prev.key && e.target.name !== prev.key) {
                    return { key: e.target.name, value: [e.target.value] };
                } else
                    return {
                        key: e.target.name,
                        value: [...prev.value, e.target.value],
                    };
            } else {
                return {
                    key: prev.key,
                    value: prev.value.filter((val) => val !== e.target.value),
                };
            }
        });
    };

    const filterMethod = () => {
        const params = new URLSearchParams(searchParams);
        params.set("filter", filterOption.value.join(","));
        params.toString();
        return router.replace(`${filterOption.key}?${params}`, {
            scroll: false,
        });
    };

    return {
        filterOption,
        resetFilter,
        handleFilter,
        sortMethod,
        filterMethod,
    };
};

export default useHandleQuery;
