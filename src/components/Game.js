import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { popup } from '../utils';

import { useDispatch } from 'react-redux';
import { loadGameDetails } from '../redux/actions';

import { changeImageResolution } from '../utils';

// Styled Components
const StyledGame = styled(motion.div)`
  overflow: hidden;
  text-align: center;
  cursor: pointer;
  min-height: 30vh;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
  h3 {
    color: #333;
  }
  p {
    padding: 0.5rem;
  }
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
    document.body.style.overflow = 'hidden';
  };

  return (
    <StyledGame
      variants={popup}
      initial='hidden'
      animate='show'
      layoutId={id}
      onClick={loadDetailsHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title${id}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image${id}`}
          src={changeImageResolution(background_image)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};

export default Game;
