import moment from 'moment';

const base_url = 'https://api.rawg.io/api';

const year = new Date().getFullYear();
const _month_day = moment().format(`-MM-DD`);

const fullUrl = (dates, ordering, page_size = 10) => {
  return `${base_url}/games?dates=${dates}&ordering=-${ordering}&page_size=${page_size}`;
};

export const getSearchedGames = (search, page_size = 15) => {
  return `${base_url}/games?search=${search}&page_size=${page_size}`;
};

export const getPopularGames = () => {
  const dates = `${year - 1 + _month_day},${year + _month_day}`;
  return fullUrl(dates, 'rating');
};

export const getUpComingGames = () => {
  const dates = `${year + _month_day},${year + 1 + _month_day}`;
  return fullUrl(dates, 'added');
};

export const getNewGames = () => {
  const dates = `${year - 1 + _month_day},${year + _month_day}`;
  return fullUrl(dates, 'released');
};

export const getGameDetails = (id) => {
  return `${base_url}/games/${id}`;
};

export const getGameScreenshots = (id) => {
  return `${base_url}/games/${id}/screenshots`;
};
