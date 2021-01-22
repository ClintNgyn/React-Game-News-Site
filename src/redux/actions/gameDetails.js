import axios from 'axios';
import { getGameDetails, getGameScreenshots } from '../../utils/api';

export const loadGameDetails = (id) => async (dispatch) => {
  const { data: game } = await axios.get(getGameDetails(id));
  const {
    data: { results: screenshots },
  } = await axios.get(getGameScreenshots(id));

  dispatch({
    type: 'GET_DETAILS',
    payload: {
      game,
      screenshots,
    },
  });
};
