import React, { useState } from 'react';

const SearchBox = ({ onSearch, onSort }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortField, setSortField] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };

    const handleSort = (e) => {
        setSortField(e.target.value);
        onSort(e.target.value);
    };

    return (
        <div className="mb-4 flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
                className="border rounded px-4 py-2 w-full md:w-1/2"
            />
            <select
                value={sortField}
                onChange={handleSort}
                className="border rounded px-4 py-2 w-full md:w-1/4"
            >
                <option value="">Sort By</option>
                <option value="SalePrice">Price</option>
                <option value="zip_code">Zip Code</option>
                <option value="SqFtTotLiving">Square Footage</option>
                {/* Add more options as needed */}
            </select>
        </div>
    );
};

export default SearchBox;