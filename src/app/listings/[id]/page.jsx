'use client'
import React, { useState, useEffect } from 'react';

const HousePage = ({ params }) => {
    const { id } = params; // Correctly extract 'id' from params
    const [houseData, setHouseData] = useState(null);

    useEffect(() => {
        const fetchHouseData = async () => {
            try {
                const response = await fetch(`/api/housesales/${id}`); // Fetch house details using 'id'
                if (!response.ok) {
                    throw new Error('Failed to fetch house details');
                }
                const data = await response.json();
                setHouseData(data);
            } catch (error) {
                console.error('Error fetching house details:', error);
            }
        };

        fetchHouseData();
    }, [id]);

    if (!houseData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">House Details</h1>
            <img
                src={`/256x256/${houseData.Image}`}
                alt={`House Image for ${houseData.SalePrice}`}
                className="w-full h-auto mb-4"
            />
            <p>Price: ${houseData.SalePrice}</p>
            <p>Zip Code: {houseData.zip_code}</p>
            <p>Square Footage: {houseData.SqFtTotLiving}</p>
            {/* Add more details as needed */}
        </div>
    );
};

export default HousePage;