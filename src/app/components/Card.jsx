import React from 'react';
import { useRouter } from 'next/navigation';

const Card = ({ data }) => {
    const router = useRouter(); // Initialize the router

    const handleCardClick = () => {
        router.push(`/listings/${data.salesID}`); 
    };

    return (
        <div className="flex flex-col md:flex-row border rounded-lg overflow-hidden shadow-md cursor-pointer" 
        onClick={handleCardClick}>
            <img
                src={`/256x256/${data.Image}.jpg`} // Corrected path
                alt={`Price: $${data.SalePrice}`}
                className="w-full md:w-1/3 object-cover"
            />
            <div className="p-4 flex flex-col justify-center">
                <h2 className="text-xl font-bold mb-2">Price: ${data.SalePrice}</h2>
                <p className="text-gray-600">Zip Code: {data.zip_code}, SqFt: {data.SqFtTotLiving}</p>
            </div>
        </div>
    );
};

export default Card;