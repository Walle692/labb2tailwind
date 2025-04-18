'use client';
import React, { useState, useEffect } from 'react';
import Card from './Card';
import SearchBox from './searchbox';

const InfiniteScroll = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [filters, setFilters] = useState({ price: '', zipcode: '', sqfoot: '', sortBy: '' });
    const itemsPerPage = 20; // Fetch one item at a time

    const fetchData = async (page, filters) => {
        try {
            const queryParams = new URLSearchParams({
                salesID: page,
                price: filters.price,
                zip_code: filters.zipcode, // Use zip_code for database column
                SqFtTotLiving: filters.sqfoot, // Use SqFtTotLiving for database column
                sortBy: filters.sortBy, // Include sortBy in the query
            });
            const response = await fetch(`/api/housesales?${queryParams}`);
            const result = await response.json();
            console.log('API response:', result);

            if (result.length > 0) {
                const parsedData = result.map((item) => ({
                    ...item,
                    Image: `/256x256/${item.Image}.jpg`, // Construct image path
                }));
                setData((prevData) => [...prevData, ...parsedData]);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData(page, filters);
    }, [page, filters]);

    const loadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const handleSearch = (searchFilters) => {
        setFilters(searchFilters);
        setData([]); // Reset data for new search
        setPage(1); // Reset pagination
    };

    return (
        <div className="p-4 space-y-4">
            <SearchBox onSearch={handleSearch} />
            {data.map((item, index) => (
                <Card key={index} data={item} />
            ))}
            <button onClick={loadMore} className="mt-4 p-2 bg-blue-500 text-white">
                Load More
            </button>
        </div>
    );
};

export default InfiniteScroll;