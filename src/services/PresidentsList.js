import React from 'react';
import PresidentsItem from './PresidentsItem';

export default function PresidentsList({ presidents }) {
  return (
    <div className="president-list">
      {presidents.map((president, i) => (
        <PresidentsItem key={president + i} president={president} />
      ))}
    </div>
  );
}
