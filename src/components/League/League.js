import React from 'react';
import PropTypes from 'prop-types';
import "./League.css";

const League = () => (
  <div >
    {/* TODO: Programmatically populate League name */}
    <label >League name</label>
    <br />
    <img 
    src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
    alt="new"
    className="photo"
    />
  </div>
);

League.propTypes = {};

League.defaultProps = {};

export default League;
