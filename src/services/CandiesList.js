import React from 'react';
import CandyItem from './CandyItem';

export default function CandiesList({ candies }) {
  return (
    <div className="candy-list">
      {candies.map((candy, i) => (
        <CandyItem key={candy + i} candy={candy} />
      ))}{' '}
    </div>
  );
}
