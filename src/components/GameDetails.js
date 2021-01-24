import styled from 'styled-components';
import { motion } from 'framer-motion';

import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { changeImageResolution } from '../utils';
import { gamepad, platformImgAlias } from '../images';

// Styled Components
const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 110vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
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
  margin: 1rem 0 100rem 0;
  padding: 2rem 10rem;
  background: #fff;
  position: absolute;
  left: 10%;
  z-index: 10;
  color: #000;
  img {
    width: 100%;
  }
`;

const GameDetails = ({ pathId }) => {
  // Variables
  const history = useHistory();

  const { game, screenshots } = useSelector((state) => state.gameDetails);
  const { name, rating, parent_platforms, description_raw, background_image } = game ?? {};

  // Functions
  const cardUnfocusedHandler = ({ target: { className } }) => {
    history.push('/');
    className.includes('shadow') && (document.body.style.overflow = 'visible');
  };

  return (
    <CardShadow className='shadow' onClick={cardUnfocusedHandler}>
      <Detail layoutId={pathId}>
        <div className='stats'>
          <div className='ratings'>
            <motion.h3 layoutId={`title${pathId}`}>{name}</motion.h3>
            <p>Rating: {rating}</p>
          </div>

          <div className='info'>
            <h3>Platform</h3>
            <div className='platforms'>
              {parent_platforms?.map(({ platform }) => (
                <img
                  key={platform.id}
                  src={platformImgAlias[platform.name] ?? platformImgAlias[gamepad]}
                  alt={platform.name}
                />
              ))}
            </div>
          </div>
        </div>

        <div className='media'>
          <motion.img layoutId={`image${pathId}`} src={changeImageResolution(background_image)} alt={name} />
        </div>

        <div className='description'>
          <p>{description_raw}</p>
        </div>

        <div className='gallery'>
          {screenshots.map(({ id, image }) => (
            <img key={id} src={changeImageResolution(image)} alt={name} />
          ))}
        </div>
      </Detail>
    </CardShadow>
  );
};

export default GameDetails;
