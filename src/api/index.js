const moment = require('moment');

const base_url = 'http://api.rawg.io/api';
const monthDay = moment().format('MM-DD');
const year = moment().format('YYYY');

export const popularGames = () => {
  //return popular games from last year to this year
  return `${base_url}/games?dates=${
    year - 1
  }-${monthDay},${year}-${monthDay}&ordering=-rating&page_size=15`;
};

// console.log(popularGames());
