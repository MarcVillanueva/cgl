import React from 'react';
import PropTypes from 'prop-types';
import "./League.css";

const League = (props) => (
  <div >
    {/* TODO: Programmatically populate League name */}
    <label >League name</label>
    <br />
    <img 
    src="https://sleepercdn.com/avatars/thumbs/1407b3c042b1344c9500c2534e02c1ad"
    alt="new"
    className="avatar"
    />
    {console.log("Logging props in League")}
    {console.log(props)}
  </div>
);

League.propTypes = {};

League.defaultProps = {};

export default League;
