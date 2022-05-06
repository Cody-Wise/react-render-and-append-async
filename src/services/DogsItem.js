import React from 'react';

export default function DogsItem({ dog }) {
  return (
    <div className="dog-item">
      <p>{dog.name}</p>
      <p>Breed: {dog.breed}</p>
      <p>Price: {dog.price}</p>
      <p>Life Expectancy: {dog.life_expectancy}</p>
    </div>
  );
}
