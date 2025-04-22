'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const HousePage = ({ params }) => {
    const { id } = params; // Corrected to use 'id' instead of 'SalesID'
    const [houseData, setHouseData] = useState(null);

    useEffect(() => {
        const fetchHouseData = async () => {
            try {
                const response = await fetch(`/api/housesales/${id}`); // Use 'id' in the API call
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setHouseData(data);
            } catch (error) {
                console.error('Error fetching house data:', error);
            }
        };

        fetchHouseData();
    }, [id]); // Updated dependency to 'id'

    return (
        <div className="p-4">
            {houseData ? (
                <div className="border rounded-lg p-4 shadow-md">
                    <h2 className="text-2xl font-bold mb-2">House Details</h2>
                    <img
                        src={`/256x256/${houseData.Image}`}
                        alt={`Price: $${houseData.SalePrice}`}
                        className="w-full h-auto mb-4"
                    />
                    <p className="text-lg">Price: ${houseData.SalePrice}</p>
                    <p className="text-lg">Zip Code: {houseData.zip_code}</p>
                    <p className="text-lg">SqFt: {houseData.SqFtTotLiving}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};