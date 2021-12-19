import React from 'react'
import "./League.css"
import DefaultLogo from '../../assets/default_league_logo.png'
import {Link} from 'react-router-dom'

const League = (props) => (
  <Link
    className = "league-link"
    to={{
      pathname: `/league/${props.leagueId}`,
      state: { leagueid: props.leagueId }
    }}>
    <div className="league">
      <label className="league-name">{props.name}</label>
      <img
      src={props.avatar === null ? DefaultLogo : `https://sleepercdn.com/avatars/thumbs/${props.avatar}`}
      alt="new"
      className="avatar"
      />
   </div>
  </Link>
);

League.propTypes = {};

League.defaultProps = {};

export default League;
