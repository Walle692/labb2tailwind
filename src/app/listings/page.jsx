import React from 'react';
import InfiniteScroll from '../components/InfiniteScroll';

const ListingsPage = () => {
    return (
        <main className="p-4">
            <div className="flex justify-center">
                <div className="w-full md:w-3/4 lg:w-1/2">
                <h1 className="text-2xl font-bold mb-4">Listings</h1>
                <p className="text-gray-600 mb-4">Explore our listings below:</p>
                    <InfiniteScroll />
                </div>
            </div>
        </main>
    );
};

export default ListingsPage;