import React from 'react'
import './PlayoffRound.css'
import PlayoffMatchup from '../PlayoffMatchup/PlayoffMatchup'
const Matchup = (props) => {
  return (
    <div className="playoff-rounds-panel">
      {props.matchup !== null ? 
        <h2 className="playoff-week-header">Week {props.playoffStartWeek + (props.playoffRound - 1)}</h2> : null
      }
      {props.matchup != null ? 
      props.matchup.map((matchup) => (
          <div className="playoff-round"> 
            <PlayoffMatchup leagueId={props.leagueId} playoffStartWeek={props.playoffStartWeek} roundNumber={matchup.r} matchup={matchup}></PlayoffMatchup>
          </div>
      )) : null}
    </div>
  )
};

Matchup.propTypes = {};

Matchup.defaultProps = {};

export default Matchup;
