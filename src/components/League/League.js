import React from 'react'
import "./League.css"
import DefaultLogo from '../../assets/default_league_logo.png'

const League = (props) => (
  <a className = "anchor" href="">
    <div className="league">
      <label className="league-name">{props.name}</label>
      <img
      src={props.avatar === null ? DefaultLogo : `https://sleepercdn.com/avatars/thumbs/${props.avatar}`}
      alt="new"
      className="avatar"
      />
  </div>
  </a>
);

League.propTypes = {};

League.defaultProps = {};

export default League;
