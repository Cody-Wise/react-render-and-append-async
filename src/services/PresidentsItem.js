import React from 'react';

export default function PresidentsItem({ president }) {
  return (
    <div className="president-item">
      <p>{president.name}</p>
      <p>{president.party}</p>
      <p>{president.year_born}</p>
      <p>{president.year_elected}</p>
    </div>
  );
}
