import React from 'react';

export default function BpItem({ basketballPlayer }) {
  return (
    <div className="bb-player">
      <p>{basketballPlayer.name}</p>
      <p>Year Drafted: {basketballPlayer.year_drafted}</p>
      <p>Team First Played For: {basketballPlayer.team_first_played_for}</p>
      <p>Year Retired: {basketballPlayer.year_retired}</p>
    </div>
  );
}
