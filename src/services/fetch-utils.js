import { client } from './client.js';

export async function getBasketballPlayers() {
  const response = await client.from('basketball_players').select('*');
  return response.body;
}

export async function getCandies() {
  const response = await client.from('candies').select('*');
  return response.body;
}

export async function getDogs() {
  const response = await client.from('dogs').select('*');
  return response.body;
}

export async function getPresidents() {
  const response = await client.from('presidents').select('*');
  return response.body;
}
