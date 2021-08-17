import { combineReducers } from 'redux';
import countriesReducer from './countriesReducer';
import countryReducer from './countryReducer';

const rootReducer = combineReducers({
  country: countryReducer,
  countries: countriesReducer,
});

export default rootReducer;
