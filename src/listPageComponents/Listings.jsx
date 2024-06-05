import React from 'react';
import ListingCard from './ListingCard';

const Listings = ({ listings }) => {
  return (
    <div className="flex flex-col gap-4 mt-8">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
};

export default Listings;