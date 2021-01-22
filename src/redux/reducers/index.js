import { combineReducers } from 'redux';

import gamesReducer from './games';
import gameDetailsReducer from './gameDetails';

const rootReducer = combineReducers({
  games: gamesReducer,
  gameDetails: gameDetailsReducer,
});

export default rootReducer;
