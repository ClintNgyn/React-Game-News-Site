import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled Components
const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  overflow: hidden;
  text-align: center;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

const Game = ({ id, name, released, background_image }) => {
  return (
    <StyledGame>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={background_image} alt={name} />
    </StyledGame>
  );
};

export default Game;
