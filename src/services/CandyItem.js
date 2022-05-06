import React from 'react';

export default function CandyItem({ candy }) {
  return (
    <div className="candy-item">
      <p>{candy.name}</p>
      <p>Type: {candy.type}</p>
      <p>Price: {candy.price}</p>
      <p>Genre: {candy.genre}</p>
    </div>
  );
}
