import React from 'react';
import PropTypes from 'prop-types';

const CountryDescription = ({ description }) => (
  <div className="mb-3">
    <div className="row g-0">
      <div className="col-md-8">
        <div className="card-body text-left">
          <p className="country-wrap font-22">
            <span>Country Name: </span>
            <span className="country-code green-800 font-22">
              {description?.label.toUpperCase()}
            </span>
          </p>
          <p className="card-text">
            <span>Country Code: </span>
            <span className="card-title">{description?.abbreviation}</span>
          </p>
          <p className="mute-p">
            <p className="text-muted">
              {description?.label} has a population of {description?.population}
              . It has so far recorded {description?.deaths} deaths.{' '}
              {description?.confirmed} cases have been confirmed and{' '}
              {description?.recovered} people have recovered from the virus.
            </p>
          </p>
        </div>
      </div>
      <div className="col-md-4 text-center">
        <h4 className="card-hed font-italic">{description?.continent}</h4>
        <hr />
        <div className="card-body">
          <div className="icon-div py-3">
            <div className="icon-span ">
              <div className="">
                <p className="font-10 text-success">Last Updated</p>
                <p className="increase">
                  <i className="fas fa-pen-square font-22 text-success" />
                </p>
                <p className="font-12 text-success">{description?.updated}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

CountryDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

export default CountryDescription;
