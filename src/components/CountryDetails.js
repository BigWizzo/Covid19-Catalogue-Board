import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pie } from 'react-chartjs-2';
import { useParams, Link } from 'react-router-dom';
import getCountryData from '../redux/actions/countryActions';
import CountryDescription from './CountryDescription';

const CountryDetails = () => {
  const countryParam = useParams();
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country);
  const fetchCountry = () => {
    dispatch(
      getCountryData({
        nation: countryParam.country,
      }),
    );
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  return (
    <div>
      <p className="text-success m-3">
        <Link className="text-success text-decoration-none bold" to="/">
          Go Home
        </Link>
      </p>
      <h1 className="text-center mt-3">{countryParam.country}</h1>
      {country.data ? (
        <div className="main-content-wrapper row m-0 p-3">
          <div className="chart-wrapper col-md-6">
            <Pie className="w-75 m-auto" data={country.data} />
          </div>
          <div className="country-desc col-md-6">
            <CountryDescription description={country.description} />
          </div>
        </div>
      ) : (
        <div className="empty text-center">
          {!country.loading && (
            <h4 className="no-entry p-3">
              Please enter Country Name and hit Submit
            </h4>
          )}
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
