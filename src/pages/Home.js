import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../redux/actions';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Game } from '../components';

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

  const { popularGames, upcomingGames, newGames } = useSelector(
    (state) => state.games
  );

  return (
    <div>
      <GameList>
        <h2>Upcoming Games</h2>
        <Games>
          {upcomingGames.map(({ id, name, released, background_image }) => (
            <Game
              key={id}
              id={id}
              name={name}
              released={released}
              background_image={background_image}
            />
          ))}
        </Games>

        <h2>Popular Games</h2>
        <Games>
          {popularGames.map(({ id, name, released, background_image }) => (
            <Game
              key={id}
              id={id}
              name={name}
              released={released}
              background_image={background_image}
            />
          ))}
        </Games>

        <h2>New Games</h2>
        <Games>
          {newGames.map(({ id, name, released, background_image }) => (
            <Game
              key={id}
              id={id}
              name={name}
              released={released}
              background_image={background_image}
            />
          ))}
        </Games>
      </GameList>
    </div>
  );
};

export default Home;
