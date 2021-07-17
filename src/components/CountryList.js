import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getCountriesData from '../redux/actions/countriesActions';
import CountryListItem from './CountryListItem';

const reg = [
  'Search by Region',
  'Africa',
  'Europe',
  'Asia',
  'North America',
  'South America',
  'Oceania',
];

const CountryList = () => {
  const [nat, setNat] = useState('');
  const [region, setRegion] = useState('');

  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.data);

  const fetchCountries = () => {
    dispatch(getCountriesData());
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const checkCountries = (byCountry) => {
    if (byCountry.All.country && byCountry.All.continent) {
      const selectByRegion = Object.values(byCountry.All.continent)
        .join('')
        .toLowerCase()
        .includes(region.toLowerCase());

      const selectByCountry = Object.values(byCountry.All.country)
        .join('')
        .toLowerCase()
        .includes(nat.toLowerCase());

      if (region.length > 0 && nat === '') {
        return selectByRegion;
      }
      if (nat.length > 0 && region === '') {
        return selectByCountry;
      }
      if (nat.length > 0 && region.length > 0) {
        return selectByCountry;
      }
    }
  };

  const filteredCountries = () => {
    if (nat === '' && region === '') {
      return countries;
    }
    return countries.filter((country) => checkCountries(country));
  };

  return (
    <div className="main">
      <h1 className="py-4 text-center">Covid19 Catalogue Board 1</h1>
      <form className="country-form m-auto mb-5">
        <div className="">
          <input
            className="form-control form-outline"
            type="text"
            value={nat}
            placeholder="Search by Country"
            onChange={(e) => setNat(e.target.value)}
          />
          <select
            className="form-select p-2"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            aria-label="Default select example"
          >
            {reg.map((x) => (
              <option value={x} key={x}>
                {x}
              </option>
            ))}
          </select>
        </div>
      </form>
      <div className="content">
        {countries.loading && <h4 className="text-center">Loading...</h4>}
        <div className="row g-0">
          {filteredCountries().map(
            (country) =>
              country.All.country && (
                <CountryListItem nation={country} key={country.All.country} />
              ),
          )}
        </div>
      </div>
      <div className="circle-small-4 br-50 pos-abs" />
      <div className="circle-small-5 br-50 pos-abs" />
      <div className="circle-small-2 br-50 pos-abs" />
    </div>
  );
};

export default CountryList;
