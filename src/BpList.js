import React from 'react';
import BpItem from './BpItem';

export default function BpList({ basketballPlayers }) {
  return (
    <div className="bb">
      {basketballPlayers.map((basketballPlayer, i) => (
        <BpItem key={basketballPlayer + i} basketballPlayer={basketballPlayer} />
      ))}{' '}
    </div>
  );
}
