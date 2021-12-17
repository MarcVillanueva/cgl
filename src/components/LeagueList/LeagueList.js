import React from 'react';
import PropTypes from 'prop-types';
import League from '../League/League';

const LeagueList = (props) => {
  return(
    <div>
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
