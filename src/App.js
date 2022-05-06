import './App.css';
import { useEffect, useState } from 'react';
import { getCandies, getDogs, getPresidents, getBasketballPlayers } from './services/fetch-utils';
import BpList from './BpList';
import CandiesList from './services/CandiesList';
import DogsList from './services/DogsList';
import PresidentsList from './services/PresidentsList';
import Spinner from './Spinner';

function App() {
  const [basketballPlayers, setBasketballPlayers] = useState([]);
  const [candies, setCandies] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [presidents, setPresidents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    setIsLoading(true);
    const basketBallPlayersResponse = await getBasketballPlayers();
    const candiesResponse = await getCandies();
    const dogResponse = await getDogs();
    const presidentResponse = await getPresidents();
    setIsLoading(false);
    setBasketballPlayers(basketBallPlayersResponse);
    setCandies(candiesResponse);
    setDogs(dogResponse);
    setPresidents(presidentResponse);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {isLoading ? (
          <Spinner />
        ) : (
          <div>
            <BpList basketballPlayers={basketballPlayers} />
            <CandiesList candies={candies} />
            <DogsList dogs={dogs} />
            <PresidentsList president={presidents} />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
