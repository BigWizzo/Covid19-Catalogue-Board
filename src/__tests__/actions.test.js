import * as actions from '../redux/actions/actions';
import * as types from '../redux/actions/actionTypes';

describe('countries action', () => {
  test('It should return COUNTRIES_REQUEST action type', () => {
    const action = actions.countriesRequest();

    expect(action.type).toBe(types.FETCH_COUNTRIES_REQUEST);
  });

  test('It should not return an empty action type', () => {
    const action = actions.countriesRequest();

    expect(action.type).not.toBe('');
  });

  test('It should return MEALS ACTIONS SUCCESS action type', () => {
    const action = actions.countriesSuccess();

    expect(action.type).toBe(types.FETCH_COUNTRIES_SUCCESS);
  });

  test('It should return a payload', () => {
    const action = actions.countriesFailure('data');

    expect(action.payload).toBe('data');
  });

  test('It should return and empty action type', () => {
    const action = actions.countriesSuccess();

    expect(action.type).not.toBe('');
  });

  test('It should return COUNTRIES actiontype', () => {
    const action = actions.countriesFailure();

    expect(action.type).toBe(types.FETCH_COUNTRIES_FAILURE);
  });

  test('It should return empty action type', () => {
    const action = actions.countriesFailure();

    expect(action.type).not.toBe('');
  });

  test('It should return a payload', () => {
    const action = actions.countriesFailure('error');

    expect(action.payload).toBe('error');
  });
});

describe('country action', () => {
  test('It should return COUNTRY_REQUEST action type', () => {
    const action = actions.countryRequest();

    expect(action.type).toBe(types.FETCH_COUNTRY_REQUEST);
  });

  test('It should not return an empty action type', () => {
    const action = actions.countryRequest();

    expect(action.type).not.toBe('');
  });

  test('It should return MEALS ACTIONS SUCCESS action type', () => {
    const action = actions.countrySuccess();

    expect(action.type).toBe(types.FETCH_COUNTRY_SUCCESS);
  });

  test('It should return a payload', () => {
    const action = actions.countryFailure('data');

    expect(action.payload).toBe('data');
  });

  test('It should return and empty action type', () => {
    const action = actions.countrySuccess();

    expect(action.type).not.toBe('');
  });

  test('It should return COUNTRY actiontype', () => {
    const action = actions.countryFailure();

    expect(action.type).toBe(types.FETCH_COUNTRY_FAILURE);
  });

  test('It should return empty action type', () => {
    const action = actions.countryFailure();

    expect(action.type).not.toBe('');
  });

  test('It should return a payload', () => {
    const action = actions.countryFailure('error');

    expect(action.payload).toBe('error');
  });
});
