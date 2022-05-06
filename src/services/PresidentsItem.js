import React from 'react';

export default function PresidentsItem({ president }) {
  return (
    <div className="president-item">
      <p>{president.name}</p>
      <p>Party: {president.party}</p>
      <p>Year Born: {president.year_born}</p>
      <p>Year Elected: {president.year_elected}</p>
    </div>
  );
}
