import React from 'react';
import DogsItem from './DogsItem';

export default function DogsList({ dogs }) {
  return (
    <div className="dogs-list">
      {dogs.map((dog, i) => (
        <DogsItem key={dog + i} dog={dog} />
      ))}
    </div>
  );
}
