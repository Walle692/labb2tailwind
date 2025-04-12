'use client';
import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import Papa from 'papaparse';

const InfiniteScroll = () => {
    const [data, setData] = useState([]);
    const [visibleData, setVisibleData] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        // Load CSV data
        Papa.parse('/path-to-your-data.csv', {
            download: true,
            header: true,
            complete: (result) => {
                setData(result.data);
                setVisibleData(result.data.slice(0, 10)); // Initial load
            },
        });
    }, []);

    const loadMore = () => {
        const nextPage = page + 1;
        const newVisibleData = data.slice(0, nextPage * 10);
        setVisibleData(newVisibleData);
        setPage(nextPage);
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
    }, [page, data]);

    return (
        <div className="p-4 space-y-4">
            {visibleData.map((item, index) => (
                <Card
                    key={index}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </div>
    );
};

export default InfiniteScroll;