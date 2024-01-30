/* eslint-disable react/prop-types */
import { useState } from "react";

const Sort = ({ sortFun }) => {
    const [sortVal, setSortVal] = useState("all");
    const handleSort = e => {
        setSortVal(e.target.value);
        sortFun(e.target.value);
    };

    return (
        <>
            <div className="flex items-stretch space-x-3">
                {/* <!-- Sort --> */}
                <select
                    onChange={handleSort}
                    value={sortVal}
                    className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
                    name="sortBy"
                    id="sortBy"
                >
                    <option value="all">Sort</option>
                    <option value="name_asc">Name (A-Z)</option>
                    <option value="name_desc">Name (Z-A)</option>
                    {/* <option value="year_asc">Publication Year (Oldest)</option>
                    <option value="year_desc">Publication Year (Newest)</option> */}
                </select>
            </div>
        </>
    );
};

export default Sort;
