const initState = {
  popularGames: [],
  upComingGames: [],
  newGames: [],
  searchedGames: [],
};

const gamesReducer = (state = initState, { type, payload }) => {
  const { popularGames, upComingGames, newGames } = payload ?? {};

  switch (type) {
    case 'FETCH_GAMES':
      return {
        ...state,
        popularGames,
        upComingGames,
        newGames,
      };
    default:
      return state;
  }
};

export default gamesReducer;
