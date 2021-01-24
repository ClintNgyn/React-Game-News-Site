import styled from 'styled-components';
import { motion } from 'framer-motion';

import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { cropImage } from '../utils';

// Styled Components
const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: #f2f2f2;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 20rem;
  background: #fff;
  position: absolute;
  left: 10%;
  color: #000;
  img {
    width: 100%;
  }
`;

const GameDetails = () => {
  const history = useHistory();
  const { game, screenshots } = useSelector((state) => state.gameDetails);
  const { name, rating, platforms, description_raw, background_image } = game ?? {};

  const cardUnfocusedHandler = ({ target: { className } }) => {
    history.push('/');
    className.includes('shadow') && (document.body.style.overflow = 'visible');
  };

  return (
    <CardShadow className='shadow' onClick={cardUnfocusedHandler}>
      <Detail>
        <div className='stats'>
          <div className='ratings'>
            <h3>{name}</h3>
            <p>Rating: {rating}</p>
          </div>

          <div className='info'>
            <h3>Platform</h3>
            <div className='platforms'>
              {platforms?.map(({ platform }) => (
                //replace w images later
                <h3 key={platform.id}>{platform.name}</h3>
              ))}
            </div>
          </div>
        </div>

        <div className='media'>
          <img src={cropImage(background_image)} alt={name} />
        </div>

        <div className='description'>
          <p>{description_raw}</p>
        </div>

        <div className='gallery'>
          {screenshots.map(({ id, image }) => (
            <img key={id} src={cropImage(image)} alt={name} />
          ))}
        </div>
      </Detail>
    </CardShadow>
  );
};

export default GameDetails;
