'use client';
import React, { useState, useEffect } from 'react';
import Card from './Card';
import Papa from 'papaparse';
import SearchBox from './searchbox';

const InfiniteScroll = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [visibleData, setVisibleData] = useState([]);
    const [page, setPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        Papa.parse('/HouseSalesSeattle.csv', {
            download: true,
            header: true,
            complete: (result) => {
                const parsedData = result.data.map((item) => {
                    const lastField = Object.values(item).pop(); // Get the last field value
                    return {
                        ...item,
                        Image: `/256x256/${lastField}.jpg`, // Construct the image path
                    };
                });
                setData(parsedData);
                setFilteredData(parsedData);
                setVisibleData(parsedData.slice(0, itemsPerPage));
            },
        });
    }, []);

    const loadMore = () => {
        const nextPage = page + 1;
        const nextVisibleData = filteredData.slice(0, nextPage * itemsPerPage);
        setVisibleData(nextVisibleData);
        setPage(nextPage);
    };

    const handleSearch = (searchTerm) => {
        const lowerCaseTerm = searchTerm.toLowerCase();
        const filtered = data.filter((item) =>
            Object.values(item).some((value) =>
                String(value).toLowerCase().includes(lowerCaseTerm)
            )
        );
        setFilteredData(filtered);
        setVisibleData(filtered.slice(0, itemsPerPage));
        setPage(1);
    };

    const handleSort = (sortField) => {
        const sorted = [...filteredData].sort((a, b) => {
            if (!sortField) return 0;
            if (sortField === 'SalePrice' || sortField === 'SqFtTotLiving') {
                return parseFloat(a[sortField]) - parseFloat(b[sortField]);
            }
            return String(a[sortField]).localeCompare(String(b[sortField]));
        });
        setFilteredData(sorted);
        setVisibleData(sorted.slice(0, page * itemsPerPage));
    };

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop >=
                document.documentElement.offsetHeight - 100
            ) {
                loadMore();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [page, filteredData]);

    return (
        <div className="p-4 space-y-4">
            <SearchBox onSearch={handleSearch} onSort={handleSort} />
            {visibleData.map((item, index) => (
                <Card key={index} data={item} />
            ))}
        </div>
    );
};

export default InfiniteScroll;