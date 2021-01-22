import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { useSelector } from 'react-redux';

const GameDetails = () => {
  const {
    game: { name, rating, platforms, background_image },
    screenshots,
  } = useSelector((state) => state.gameDetails);

  return (
    <div className='card-shadow'>
      <div className='details'>
        <div className='stats'>
          <div className='ratings'>
            <h3>{name}</h3>
            <p>Rating: {rating}</p>
          </div>

          <div className='info'>
            <h3>Platform</h3>
            <div className='platforms'>
              {platforms.map(({ platform }) => (
                //replace w images later
                <h3 key={platform.id}>{platform.name}</h3>
              ))}
            </div>
          </div>
        </div>

        <div className='media'>
          <img src={background_image} alt={name} />
        </div>

        <div className='gallery'>
          {screenshots.map(({ id, image }) => (
            <img key={id} src={image} alt={name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
