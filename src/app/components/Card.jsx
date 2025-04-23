import React from 'react';
import { useRouter } from 'next/navigation';

const Card = ({ data }) => {
    const router = useRouter(); // Initialize the router

    const handleCardClick = () => {
        router.push(`/listings/${data.SalesID}`); 
    };

    return (
        <div className="flex flex-col md:flex-row border rounded-lg overflow-hidden shadow-md cursor-pointer" 
        onClick={handleCardClick}>
            <img
                src={`/256x256/${data.Image}.jpg`} // Corrected path
                alt={`Price: $${data.PropertyType}`}
                className="w-full md:w-1/3 object-cover"
            />
            <div className="p-4 flex flex-col justify-center">
                <h1 className="text-xl font-bold mb-2">{data.PropertyType}</h1>
                <h2 className="text-gray-600">Price: ${data.SalePrice}</h2>
                <p className="text-gray-600">Bedrooms: {data.Bedrooms}, Bathrooms: {data.Bathrooms}</p>
                <p className="text-gray-600">Zip Code: {data.zip_code}, SqFt: {data.SqFtTotLiving}</p>
            </div>
        </div>
    );
};

export default Card;