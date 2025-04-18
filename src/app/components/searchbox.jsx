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
                className="p-2 border"
            />
            <input
                type="text"
                placeholder="Zip Code"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
                className="p-2 border"
            />
            <input
                type="number"
                placeholder="Min SqFt"
                value={sqfoot}
                onChange={(e) => setSqfoot(e.target.value)}
                className="p-2 border"
            />
            <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="p-2 border"
            >
                <option value="">Sort By</option>
                <option value="SalePrice">Price</option>
                <option value="SqFtTotLiving">Square Footage</option>
                <option value="zip_code">Zip Code</option>
            </select>
            <button onClick={handleSearch} className="p-2 bg-blue-500 text-white">
                Search
            </button>
        </div>
    );
};

export default SearchBox;