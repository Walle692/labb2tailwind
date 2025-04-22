'use client';
import React, { useState, useEffect } from 'react';

const HousePage = ({ params }) => {
    const [houseData, setHouseData] = useState(null);
    const [id, setId] = useState(null);
    const [avgPricePerSqFt, setAvgPricePerSqFt] = useState(null);

    useEffect(() => {
        const unwrapParams = async () => {
            const unwrappedParams = await params;
            setId(unwrappedParams.id);
        };
        unwrapParams();
    }, [params]);

    useEffect(() => {
        const fetchHouseData = async () => {
            try {
                const response = await fetch(`/api/housesales/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch house details');
                }
                const data = await response.json();
                setHouseData(data);
            } catch (error) {
                console.error('Error fetching house details:', error);
            }
        };

        if (id) {
            fetchHouseData();
        }
    }, [id]);

    useEffect(() => {
        if (houseData) {
            const fetchAvgPricePerSqFt = async () => {
                try {
                    const response = await fetch(
                        `/api/houseCompare?zipcode=${houseData.zip_code}&propertytype=${houseData.PropertyType}`
                    );
                    if (!response.ok) {
                        throw new Error('Failed to fetch average price per SqFt');
                    }
                    const data = await response.json();
                    setAvgPricePerSqFt(data.AvgPricePerSqFt);
                } catch (error) {
                    console.error('Error fetching average price per SqFt:', error);
                }
            };

            fetchAvgPricePerSqFt();
        }
    }, [houseData]);

    useEffect(() => {
        if (houseData) {
            const loadGoogleMaps = async () => {
                try {
                    // Dynamically load the Google Maps API
                    const script = document.createElement('script');
                    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA5FMhi5ZeDPpQ3ckKqhgt3YyZv8zCJRBg`;
                    script.async = true;
                    script.defer = true;
                    script.onload = () => {
                        // Initialize the map after the script is loaded
                        const position = { lat: houseData.latitude, lng: houseData.longitude }; // Replace with actual coordinates
                        const map = new google.maps.Map(document.getElementById('map'), {
                            zoom: 12,
                            center: position,
                        });
                        new google.maps.Marker({
                            position,
                            map,
                            title: 'House Location',
                        });
                    };
                    document.body.appendChild(script);
                } catch (error) {
                    console.error('Error loading Google Maps:', error);
                }
            };

            loadGoogleMaps();
        }
    }, [houseData]);

    if (!houseData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4">
            <div className="bg-gray-100 dark:bg-gray-800 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="md:flex-1 px-4">
                            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                <img
                                    src={`/256x256/${houseData.Image}.jpg`}
                                    alt={`House Image for ${houseData.SalePrice}`}
                                    className="w-full h-auto mb-4"
                                />
                            </div>
                        </div>
                        <div className="md:flex-1 px-4">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                                {houseData.PropertyType}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                                ante justo. Integer euismod libero id mauris malesuada tincidunt.
                            </p>
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                                    <span className="text-gray-600 dark:text-gray-300">${houseData.SalePrice}</span>
                                </div>
                            </div>
                            <div>
                                <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                    sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
                                    lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
                                    ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
                                    sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">Bedrooms: {houseData.Bedrooms}</p>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">Bathrooms: {houseData.Bathrooms}</p>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">Living area: {houseData.SqFtTotLiving} SqFt</p>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">Price/SqFt: ${Math.round(houseData.SalePrice / houseData.SqFtTotLiving)}</p>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">Lot area: {houseData.SqFtLot} sqft</p>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">New construction: {houseData.NewConstruction === 1 ? 'Yes' : 'No'}</p>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">Construction Year: {houseData.YrBuilt}</p>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">Renovated: {houseData.YrRenovated === 0 ? 'No' : houseData.YrRenovated}</p>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">Zip Code: {houseData.zip_code}</p>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">Average price per SqFt in zipcode for this property type {avgPricePerSqFt ? `$${avgPricePerSqFt.toFixed(2)}` : 'Loading...'}</p>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                    <div id="map" className="md:flex-1 px-4 h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mt-4 md:mt-0"></div>
                </div>
            </div>
        </div>
    );
};

export default HousePage;