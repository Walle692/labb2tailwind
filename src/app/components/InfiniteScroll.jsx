'use client';
import React, { useState, useEffect } from 'react';
import Card from './Card';
import SearchBox from './searchbox';
import Router from 'next/navigation';
import { useRouter } from 'next/router'; // Correct import for useRouter

const InfiniteScroll = () => {
    const [data, setData] = useState([]);
    const [offset, setOffset] = useState(0); // Use offset for pagination
    const [filters, setFilters] = useState({ price: '', zipcode: '', sqfoot: '', sortBy: '' });
    const itemsPerPage = 20; // Number of items to fetch per page

    const fetchData = async (offset, filters) => {
        try {
            const queryParams = new URLSearchParams({
                offset, // Use offset for pagination
                limit: itemsPerPage, // Limit the number of items per request
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

    const handleCardClick = (cardData) => {
        Router.push(`/listings/${cardData.salesID}`);
    }

    return (
        <div className="p-4 space-y-4">
            <SearchBox onSearch={handleSearch} />
            {data.map((item, index) => (
                <Card key={index} data={item} onCardClick={handleCardClick} />
            ))}
            <button onClick={loadMore} className="mt-4 p-2 bg-blue-500 text-white">
                Load More
            </button>
        </div>
    );
};

export default InfiniteScroll;