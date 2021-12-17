import React from 'react';
import "./League.css";

const League = (props) => (
  <div >
    <label >{props.name}</label>
    <br />
    <img 
    src={`https://sleepercdn.com/avatars/thumbs/${props.avatar}`}
    alt="new"
    className="avatar"
    />
  </div>
);

League.propTypes = {};

League.defaultProps = {};

export default League;
