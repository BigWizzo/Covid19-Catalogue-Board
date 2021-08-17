import {
  FETCH_COUNTRY_REQUEST,
  FETCH_COUNTRY_SUCCESS,
  FETCH_COUNTRY_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  data: {},
};

const countryReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_COUNTRY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COUNTRY_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case FETCH_COUNTRY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          labels: payload.labels,
          datasets: [
            {
              label: payload.label,
              data: payload.data,
              backgroundColor: ['#9e8402', 'rgba(0, 128, 0, 0.5)', 'red'],
              borderColor: ['rgb(0, 128, 0)'],
              borderWidth: 1,
            },
          ],
        },
        description: {
          confirmed: payload.confirmed,
          recovered: payload.recovered,
          deaths: payload.deaths,
          label: payload.label,
          abbreviation: payload.abbreviation,
          population: payload.population,
          continent: payload.continent,
          capitalCity: payload.capitalCity,
          updated: payload.updated,
        },
      };
    default:
      break;
  }
  return state;
};

export default countryReducer;
