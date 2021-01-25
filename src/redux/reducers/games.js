const initState = {
  popularGames: [],
  upComingGames: [],
  newGames: [],
  searchedGames: [],
};

const gamesReducer = (state = initState, { type, payload }) => {
  const { popularGames, upComingGames, newGames, searchedGames } = payload ?? {};

  switch (type) {
    case 'FETCH_GAMES':
      return {
        ...state,
        popularGames,
        upComingGames,
        newGames,
      };

    case 'FETCH_SEARCH':
      return {
        ...state,
        searchedGames,
      };

    default:
      return state;
  }
};

export default gamesReducer;
