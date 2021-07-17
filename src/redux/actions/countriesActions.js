import axios from 'axios';
import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
} from './actionTypes';

const getCountriesData = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_COUNTRIES_REQUEST,
    });
    const response = await axios.get(
      'https://covid-api.mmediagroup.fr/v1/cases',
    );

    const data = Object.values(response.data);

    dispatch({
      type: FETCH_COUNTRIES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_COUNTRIES_FAILURE,
    });
  }
};

export default getCountriesData;
