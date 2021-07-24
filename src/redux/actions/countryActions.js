import axios from 'axios';
import { countryFailure, countryRequest, countrySuccess } from './actions';

const getCountryData = ({ nation }) => async (dispatch) => {
  try {
    dispatch(countryRequest());
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

    dispatch(
      countrySuccess({
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
      }),
    );
  } catch (error) {
    dispatch(countryFailure(error));
  }
};

export default getCountryData;
