import React from 'react';

const Card = ({ image, title, description }) => {
    return (
        <div className="flex flex-col md:flex-row border rounded-lg overflow-hidden shadow-md">
            <img
                src={image}
                alt={title}
                className="w-full md:w-1/3 object-cover"
            />
            <div className="p-4 flex flex-col justify-center">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default Card;