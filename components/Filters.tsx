import React, { useState } from 'react';

const Filters = () => {


const Filter = ({ onFilterChange }) => {
  const [priceFilter, setPriceFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handlePriceChange = (e) => {
    setPriceFilter(e.target.value);
    onFilterChange({ price: e.target.value, rating: ratingFilter });
  };

  const handleRatingChange = (e) => {
    setRatingFilter(e.target.value);
    onFilterChange({ price: priceFilter, rating: e.target.value });
  };
    return (
        <div>
            <div className="flex justify-center items-center space-x-4 mb-4">
      <div>
        <label htmlFor="price">Filter by Price:</label>
        <select id="price" value={priceFilter} onChange={handlePriceChange}>
          <option value="">All</option>
          <option value="low">$0 - $50</option>
          <option value="medium">$51 - $100</option>
          <option value="high">$101 - $200</option>
        </select>
      </div>
      <div>
        <label htmlFor="rating">Filter by Rating:</label>
        <select id="rating" value={ratingFilter} onChange={handleRatingChange}>
          <option value="">All</option>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>
      </div>
    </div>
        </div>
    );
}

export default Filters;