import styled from 'styled-components';
import { motion } from 'framer-motion';

import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { changeImageResolution, paragraphFormatter } from '../utils';
import { platformImages } from '../images';

// Styled Components
const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 110vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.8);
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
  width: 70%;
  margin: 1rem auto;
  padding: 2rem 5rem;
  background: #fff;
  position: absolute;
  left: 15%;
  z-index: 10;
  color: #000;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    padding: 0;
    font-size: 1.4rem;
  }
`;
const Info = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  h3 {
    font-size: 1.05rem;
    margin: auto 0;
  }
`;
const Platforms = styled(motion.div)`
  img {
    width: 1.4rem;
    height: 1.4rem;
    margin: 0.3rem 0;
    margin-left: 0.8rem;
    display: inline;
  }
`;

const Media = styled(motion.div)`
  margin-top: 2rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 3rem 0rem;
  text-shadow: 1px 1px 2px rgba(207, 207, 207, 0.6);
  h4 {
    padding: 0.5rem 0;
  }
`;

const Gallery = styled(motion.div)`
  h4 {
    padding: 0.5rem 0;
  }

  img {
    margin: 0.3rem 0;
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
        <Stats>
          <div className='ratings'>
            <motion.h3 layoutId={`title${pathId}`}>{name}</motion.h3>
            <p>Rating: {rating}</p>
          </div>

          <Info>
            <h3>Platforms</h3>
            <Platforms>
              {parent_platforms?.map(({ platform }) => (
                <img
                  key={platform.id}
                  src={platformImages[platform.name] ?? platformImages.gamepad}
                  alt={platform.name}
                />
              ))}
            </Platforms>
          </Info>
        </Stats>

        <Media>
          <motion.img
            layoutId={`image${pathId}`}
            src={changeImageResolution(background_image)}
            alt={name}
          />
        </Media>

        <Description>
          <h4>Description</h4>
          {paragraphFormatter(description_raw)}
        </Description>

        <Gallery>
          <h4>Screenshots</h4>

          {screenshots.map(({ id, image }) => (
            <img key={id} src={changeImageResolution(image)} alt={name} />
          ))}
        </Gallery>
      </Detail>
    </CardShadow>
  );
};

export default GameDetails;
