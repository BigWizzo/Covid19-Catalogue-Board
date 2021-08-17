import * as types from './actionTypes';

export const countriesRequest = () => ({
  type: types.FETCH_COUNTRIES_REQUEST,
});

export const countriesSuccess = (data) => ({
  type: types.FETCH_COUNTRIES_SUCCESS,
  payload: data,
});

export const countriesFailure = (error) => ({
  type: types.FETCH_COUNTRIES_FAILURE,
  payload: error,
});

export const countryRequest = () => ({
  type: types.FETCH_COUNTRY_REQUEST,
});

export const countrySuccess = (data) => ({
  type: types.FETCH_COUNTRY_SUCCESS,
  payload: data,
});

export const countryFailure = (error) => ({
  type: types.FETCH_COUNTRY_FAILURE,
  payload: error,
});
