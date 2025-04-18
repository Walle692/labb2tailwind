import React from 'react';

const Card = ({ data }) => {
    return (
        <div className="flex flex-col md:flex-row border rounded-lg overflow-hidden shadow-md">
            <img
                src={data.Image}
                alt={`Price: $${SalePrice}`}
                className="w-full md:w-1/3 object-cover"
            />
            <div className="p-4 flex flex-col justify-center">
                <h2 className="text-xl font-bold mb-2">Price: ${SalePrice}</h2>
                <p className="text-gray-600">Zip Code: {zip_code}, SqFt: {SqFtTotLiving}</p>
            </div>
        </div>
    );
};

export default Card;