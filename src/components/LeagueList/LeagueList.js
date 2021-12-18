import React from 'react';
import League from '../League/League';
import "./LeagueList.css";

const LeagueList = (props) => {
  return(
    <div className="league-list">
      {props.leagues.map((league) => (
          <League
            name={league.name}
            avatar={league.avatar}
            key={league.league_id}
          />
        ))}
    </div>
  )
  };

LeagueList.propTypes = {};

LeagueList.defaultProps = {};

export default LeagueList;
