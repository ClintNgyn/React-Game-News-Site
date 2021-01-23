import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import { useDispatch } from 'react-redux';
import { loadGameDetails } from '../redux/actions';

// Styled Components
const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  overflow: hidden;
  text-align: center;
  cursor: pointer;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

const Game = ({ id, name, released, background_image }) => {
  const dispatch = useDispatch();

  const loadDetailsHandler = () => {
    dispatch(loadGameDetails(id));
  };

  return (
    <StyledGame onClick={loadDetailsHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={background_image} alt={name} />
      </Link>
    </StyledGame>
  );
};

export default Game;
