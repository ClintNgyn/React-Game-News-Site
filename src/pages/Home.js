import { useEffect } from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../redux/actions';

import { Game, GameDetails } from '../components';

// Styled Components
const GameList = styled(motion.div)`
  margin-bottom: 2rem;
  padding: 0 3rem;
  h2 {
    padding: 5rem 0 3rem 0;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

const Home = () => {
  const dispatch = useDispatch();

  // Fetch data
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  // Variables from State
  const { popularGames, upComingGames, newGames } = useSelector(
    (state) => state.games
  );

  // Functions
  const displayGames = (games = []) => {
    return games.map(({ id, name, released, background_image }) => (
      <Game
        key={id}
        id={id}
        name={name}
        released={released}
        background_image={background_image}
      />
    ));
  };

  return (
    <div>
      {/* <GameDetails /> */}

      <GameList>
        <h2>Upcoming Games</h2>
        <Games>{displayGames(upComingGames)}</Games>

        <h2>Popular Games</h2>
        <Games>{displayGames(popularGames)}</Games>

        <h2>New Games</h2>
        <Games>{displayGames(newGames)}</Games>
      </GameList>
    </div>
  );
};

export default Home;
