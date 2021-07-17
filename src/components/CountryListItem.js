import React from 'react';
import { Link } from 'react-router-dom';

const CountryListItem = ({ nation }) => {
  const { country, population, confirmed, recovered, deaths } = nation.All;
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <Link className="text-decoration-none" to={country}>
        <div className="card border-dark mb-3">
          <h5 className="card-header text-success text-center">{country}</h5>
          <div className="card-body text-dark">
            <p className="card-text">
              <span className="text-success">Population: </span>
              <span>{population} People</span>
            </p>
            <p className="card-text">
              <span className="text-success">confirmed: </span>
              <span>{confirmed} cases</span>
            </p>
            <p className="card-text">
              <span className="text-success">recovered: </span>
              <span>{recovered} cases</span>
            </p>
            <p className="card-text">
              <span className="text-success">deaths: </span>
              <span>{deaths} cases</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CountryListItem;
