import moment from 'moment';

const year = new Date().getFullYear();
const _month_day = moment().format(`-MM-DD`);

const fullUrl = (dates, ordering, page_size = 15) => {
  return `http://api.rawg.io/api/games?dates=${dates}&ordering=-${ordering}&page_size=${page_size}`;
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
