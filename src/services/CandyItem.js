import React from 'react';

export default function CandyItem({ candy }) {
  return (
    <div className="candy-item">
      <p>{candy.name}</p>
      <p>{candy.type}</p>
      <p>{candy.price}</p>
      <p>{candy.genre}</p>
    </div>
  );
}
