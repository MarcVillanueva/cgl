import React from 'react'
import styles from './PlayoffRound.css'
import PlayoffMatchup from '../PlayoffMatchup/PlayoffMatchup'
const Matchup = (props) => {
  return (
    <div className={styles.Matchup}>
      {props.matchup !== null ? 
        <h2>Week {props.playoffStartWeek + (props.playoffRound - 1)}</h2> : null
      }
      {props.matchup != null ? 
      props.matchup.map((matchup) => (
          <div className="playoff-round"> 
            <PlayoffMatchup playoffStartWeek={props.playoffStartWeek} roundNumber={matchup.r} matchupId={matchup.m}></PlayoffMatchup>
          </div>
      )) : null}
    </div>
  )
};

Matchup.propTypes = {};

Matchup.defaultProps = {};

export default Matchup;
