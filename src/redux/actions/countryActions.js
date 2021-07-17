import axios from 'axios';
import {
  FETCH_COUNTRY_REQUEST,
  FETCH_COUNTRY_SUCCESS,
  FETCH_COUNTRY_FAILURE,
} from './actionTypes';

const getCountryData = ({ nation }) => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_COUNTRY_REQUEST,
    });
    const response = await axios.get(
      `https://covid-api.mmediagroup.fr/v1/cases?country=${nation}`,
    );
    const {
      country,
      confirmed,
      recovered,
      deaths,
      abbreviation,
      population,
      continent,
      capitalCity,
      updated,
    } = response.data.All;

    dispatch({
      type: FETCH_COUNTRY_SUCCESS,
      payload: {
        data: [confirmed, recovered, deaths],
        label: country,
        labels: ['Confirmed', 'Recovered', 'Deaths'],
        abbreviation,
        population,
        continent,
        capitalCity,
        updated,
        country,
        confirmed,
        recovered,
        deaths,
      },
    });
  } catch (error) {
    dispatch({
      type: FETCH_COUNTRY_FAILURE,
    });
  }
};

export default getCountryData;
