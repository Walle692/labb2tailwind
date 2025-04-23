import React from 'react';
import InfiniteScroll from '../components/InfiniteScroll';

const ListingsPage = () => {
    return (
        <main className="p-4 bg-gray-100">
            <div className="flex justify-center">
                <div className="w-full md:w-3/4 lg:w-1/2">
                    <div className="flex flex-col items-center mb-4">
                        <h1 className="text-2xl font-bold mb-4">Our Listings</h1>
                        <p className="text-gray-600 mb-4">Find your dream home below!</p>
                    </div>
                    <InfiniteScroll />
                </div>
            </div>
        </main>
    );
};

export default ListingsPage;