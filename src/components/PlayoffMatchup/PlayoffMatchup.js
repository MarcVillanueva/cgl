import React, { useEffect, useState } from 'react'
import styles from './PlayoffMatchup.css'

const PlayoffMatchup = (props) => {
  const [matchup, setMatchup] = useState(null);

  useEffect(() => {
    async function getMatchup(leagueId, playoffStartWeek, playoffRounderNumber) {
      if (leagueId) {
        var playoffWeek = playoffStartWeek + (playoffRounderNumber - 1)
        const response = await fetch(`https://api.sleeper.app/v1/league/${leagueId}/matchups/${playoffWeek}`);
        const matchup = await response.json();
        setMatchup(matchup);
      }
  }

  getMatchup(props.leagueId, props.playoffStartWeek, props.roundNumber);
  }, [props.leagueId, props.playoffStartWeek, props.roundNumber])

  return (
    <div className={styles.PlayoffMatchup}>
      <label >{props.roundNumber}</label>
      <label >{props.matchupId}</label>
    </div>
  )
};

PlayoffMatchup.propTypes = {};

PlayoffMatchup.defaultProps = {};

export default PlayoffMatchup;
