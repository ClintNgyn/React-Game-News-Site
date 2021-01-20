import axios from 'axios';

import { getPopularGames, getUpComingGames, getNewGames } from '../../api';

export const loadGames = () => async (dispatch) => {
  const popularGames = axios.get(getPopularGames());
  const upComingGames = axios.get(getUpComingGames());
  const newGames = axios.get(getNewGames());

  const [
    popularGamesData,
    upComingGamesData,
    newGamesData,
  ] = await Promise.all([popularGames, upComingGames, newGames]);

  dispatch({
    type: 'FETCH_GAMES',
    payload: {
      popularGames: popularGamesData.data.results,
      upcomingGames: upComingGamesData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};
