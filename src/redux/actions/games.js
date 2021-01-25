import axios from 'axios';

import { getPopularGames, getUpComingGames, getNewGames, getSearchedGames } from '../../api';

export const loadGames = () => async (dispatch) => {
  const [popularGames, upComingGames, newGames] = await Promise.all([
    axios.get(getPopularGames()),
    axios.get(getUpComingGames()),
    axios.get(getNewGames()),
  ]);

  dispatch({
    type: 'FETCH_GAMES',
    payload: {
      popularGames: popularGames.data.results,
      upComingGames: upComingGames.data.results,
      newGames: newGames.data.results,
    },
  });
};

export const fetchSearch = (search) => async (dispatch) => {
  const searchedGames = await axios.get(getSearchedGames(search));

  dispatch({
    type: 'FETCH_SEARCH',
    payload: {
      searchedGames: searchedGames.data.results,
    },
  });
};
