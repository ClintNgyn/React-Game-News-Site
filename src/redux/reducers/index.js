import gamesReducer from './games';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  games: gamesReducer,
});

export default rootReducer;
