import React, { useState } from 'react';

const SearchBox = ({ onSearch }) => {
    const [price, setPrice] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [sqfoot, setSqfoot] = useState('');
    const [sortBy, setSortBy] = useState(''); // New state for sorting

    const handleSearch = () => {
        onSearch({ price, zipcode, sqfoot, sortBy });
    };

    return (
        <div className="flex space-x-4">
            <input
                type="number"
                placeholder="Max Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="flex p-2 border rounded-lg"
            />
            <input
                type="text"
                placeholder="Zip Code"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
                className="flex p-2 border rounded-lg"
            />
            <input
                type="number"
                placeholder="Min SqFt"
                value={sqfoot}
                onChange={(e) => setSqfoot(e.target.value)}
                className="flex p-2 border rounded-lg"
            />
            <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="p-2 border rounded-lg"
            >
                <option value="">Sort By</option>
                <option value="SalePrice">Price</option>
                <option value="SqFtTotLiving">Square Footage</option>
                <option value="zip_code">Zip Code</option>
            </select>
            <button onClick={handleSearch} className=" rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">
                Search
            </button>
        </div>
    );
};

export default SearchBox;