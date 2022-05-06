import React from 'react';

export default function DogsItem({ dog }) {
  return (
    <div className="dog-item">
      <p>{dog.name}</p>
      <p>{dog.breed}</p>
      <p>{dog.price}</p>
      <p>{dog.life_expectancy}</p>
    </div>
  );
}
