import React, { useState } from 'react';

const SearchBox = ({ onSearch }) => {
    const [type, setType] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [price, setPrice] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [sqfoot, setSqfoot] = useState('');
    const [sortBy, setSortBy] = useState('');

    const handleSearch = () => {
        onSearch({ type, bedrooms, bathrooms, price, zipcode, sqfoot, sortBy });
    };

    return (
        <div className="container mx-auto p-4">
            {/* Search Box */}
            <div className="flex flex-col xl:flex-row xl:w-3/5 w-full mx-auto items-center space-y-4 xl:space-y-0 xl:space-x-4 mb-8">
                <input
                    type="text"
                    placeholder="What are you looking for?"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="flex-grow p-2 border rounded-lg w-full"
                />
                <button
                    onClick={handleSearch}
                    className="rounded-lg bg-indigo-600 px-4 py-2 text-base font-semibold text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                >
                    Search
                </button>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <input
                    type="number"
                    placeholder="Bedrooms"
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                    className="p-2 border rounded-lg w-full"
                />
                <input
                    type="number"
                    placeholder="Bathrooms"
                    value={bathrooms}
                    onChange={(e) => setBathrooms(e.target.value)}
                    className="p-2 border rounded-lg w-full"
                />
                <input
                    type="number"
                    placeholder="Max Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="p-2 border rounded-lg w-full"
                />
                <input
                    type="text"
                    placeholder="Zip Code"
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                    className="p-2 border rounded-lg w-full"
                />
                <input
                    type="number"
                    placeholder="Min SqFt"
                    value={sqfoot}
                    onChange={(e) => setSqfoot(e.target.value)}
                    className="p-2 border rounded-lg w-full"
                />
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="p-2 border rounded-lg w-full"
                >
                    <option value="">Sort By</option>
                    <option value="SalePrice DESC">Most expensive</option>
                    <option value="SalePrice ASC">Least expensive</option>
                    <option value="SqFtTotLiving ASC">Least Square Footage</option>
                    <option value="SqFtTotLiving DESC">Most Square Footage</option>
                    <option value="YrBuilt ASC">Oldest</option>
                    <option value="YrBuilt DESC">Newest</option>
                </select>
            </div>
        </div>
    );
};

export default SearchBox;