'use client';
import React, { useState, useEffect } from 'react';
import Card from './Card';
import SearchBox from './searchbox';
import Router from 'next/navigation';
import { useRouter } from 'next/router'; // Correct import for useRouter

const InfiniteScroll = () => {
    const [data, setData] = useState([]);
    const [offset, setOffset] = useState(0); // Use offset for pagination
    const [filters, setFilters] = useState({ type: '', bathrooms: '', bedrooms: '', price: '', zipcode: '', sqfoot: '', sortBy: '' });
    const [hasMore, setHasMore] = useState(true); // State to track if more data is available
    const itemsPerPage = 20; // Number of items to fetch per page

    const fetchData = async (offset, filters) => {
        try {
            const queryParams = new URLSearchParams({
                offset, // Use offset for pagination
                limit: itemsPerPage, // Limit the number of items per request
                type: filters.type,
                bedrooms: filters.bedrooms,
                bathrooms: filters.bathrooms,
                price: filters.price,
                zip_code: filters.zipcode,
                SqFtTotLiving: filters.sqfoot,
                sortBy: filters.sortBy,
            });
            const response = await fetch(`/api/housesales?${queryParams}`);
            const result = await response.json();
            console.log('API response:', result);

            if (result.length > 0) {
                setData((prevData) => [...prevData, ...result]);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData(offset, filters);
    }, [offset, filters]);

    const loadMore = () => {
        setOffset((prevOffset) => prevOffset + itemsPerPage); // Increment offset by itemsPerPage
    };

    const handleSearch = (searchFilters) => {
        setFilters(searchFilters);
        setData([]); // Reset data for new search
        setOffset(0); // Reset offset for new search
    };


    return (
        <div className="p-4 space-y-4">
            <SearchBox onSearch={handleSearch} />
            {data.map((item, index) => (
                <Card key={index} data={item} />
            ))}
            {hasMore ? 
                (
                <button onClick={loadMore} className="rounded-lg bg-indigo-600 px-4 py-2 text-base font-semibold text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">
                Load More
                </button>) : (
                    <p className="text-center text-gray-500">No more listings available.</p>
                )}
        </div>
    );
};

export default InfiniteScroll;