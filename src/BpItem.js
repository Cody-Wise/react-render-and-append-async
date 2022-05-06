import React from 'react';

export default function BpItem({ basketballPlayer }) {
  return (
    <div className="bb-player">
      <p>{basketballPlayer.name}</p>
      <p>{basketballPlayer.year_drafted}</p>
      <p>{basketballPlayer.team_first_played_for}</p>
      <p>{basketballPlayer.year_retired}</p>
    </div>
  );
}
