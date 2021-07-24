import * as types from './actionTypes';

export const countriesRequest = () => ({
  type: types.FETCH_COUNTRIES_REQUEST,
});

export const countriesSuccess = (data) => ({
  type: types.FETCH_COUNTRIES_SUCCESS,
  payload: data,
});

export const countriesFailure = () => ({
  type: types.FETCH_COUNTRIES_FAILURE,
});
