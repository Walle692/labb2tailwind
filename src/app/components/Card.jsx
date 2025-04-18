import React from 'react';

const Card = ({ data }) => {
    return (
        <div className="card">
            <img src={data.Image} alt={`House ${data.salesID}`} className="w-full h-auto" />
            <div className="p-4">
                <h2 className="text-lg font-bold">Price: ${data.SalePrice}</h2>
                <p>Zip Code: {data.zip_code}</p>
                <p>Square Footage: {data.SqFtTotLiving} sqft</p>
            </div>
        </div>
    );
};

export default Card;