import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  data: [],
};

const countrriesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_COUNTRIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COUNTRIES_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    default:
      break;
  }
  return state;
};

export default countrriesReducer;
