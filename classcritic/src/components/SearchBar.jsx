import React, { useState } from "react";

function SearchBar({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        const newFilter = data.filter((value) => {
            return value?.classID?.toLowerCase().includes(searchWord.toLowerCase());

        });
        setFilteredData(newFilter);
    };
    return (

        <div className="search">
<           h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Search for classes            
            </h1>            
            <div className="searchInputs">
                <input
                    placeholder={placeholder} onChange={handleFilter}
                    type="text"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />

            </div>
            {filteredData.length !== 0 &&
                <div className="bg-rgb(4, 118, 16)">
                    {filteredData.slice(0, 5).map((value, key) => {
                        return <a className="w-full h-50 flex items-center text-black" href="(value.link)" target="_blank">
                            <p>{value.classID}</p>
                        </a>

                    })}
                </div>
            }
        </div>



    );


}
export default SearchBar;


