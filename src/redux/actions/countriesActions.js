import axios from 'axios';
import {
  countriesFailure,
  countriesRequest,
  countriesSuccess,
} from './actions';

const getCountriesData = () => async (dispatch) => {
  try {
    dispatch(countriesRequest());
    const response = await axios.get(
      'https://covid-api.mmediagroup.fr/v1/cases',
    );

    const data = Object.values(response.data);

    dispatch(countriesSuccess(data));
  } catch (error) {
    dispatch(countriesFailure());
  }
};

export default getCountriesData;
