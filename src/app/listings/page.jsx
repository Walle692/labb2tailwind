import React from 'react';
import InfiniteScroll from '../InfiniteScroll';

const ListingsPage = () => {
    return (
        <main className="p-4">
            <h1 className="text-2xl font-bold mb-4">Listings</h1>
            <InfiniteScroll />
        </main>
    );
};

export default ListingsPage;