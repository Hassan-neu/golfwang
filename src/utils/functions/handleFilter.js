import { useState } from "react";
const useHandleFilter = () => {
    const [filterOption, setFilterOption] = useState({
        key: "",
        value: [],
    });
    const [sort, setSort] = useState("NEWEST");
    const resetFilter = (status) => {
        !status && setFilterOption({ key: "", value: [] });
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
    const handleSort = (value) => {
        setSort(value);
    };
    return { filterOption, resetFilter, handleFilter, handleSort, sort };
};

export default useHandleFilter;
