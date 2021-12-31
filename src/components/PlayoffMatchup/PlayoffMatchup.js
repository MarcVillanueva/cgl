import React, { useEffect, useState } from 'react'
import './PlayoffMatchup.css'

const PlayoffMatchup = (props) => {
  const [matchup, setMatchup] = useState(null);

  // TODO: Add the bye weeks if this is the first round of playoffs
  useEffect(() => {
    async function getMatchup(leagueId, playoffStartWeek, playoffRounderNumber) {
      if (leagueId && (playoffStartWeek !== 0 && playoffStartWeek !== null)) {
        var playoffWeek = playoffStartWeek + (playoffRounderNumber - 1)
        const response = await fetch(`https://api.sleeper.app/v1/league/${leagueId}/matchups/${playoffWeek}`);
        const matchups = await response.json();
        const matchup = matchups.filter(matchup => 
                                          matchup.roster_id === props.matchup.t1 ||
                                          matchup.roster_id === props.matchup.t2)
        setMatchup(matchup);
      }
  }

  getMatchup(props.leagueId, props.playoffStartWeek, props.roundNumber);
  }, [props.leagueId, props.playoffStartWeek, props.roundNumber])

  return (
    <div>
      {matchup != null ? 
      matchup.map((user) => (
        <div className="parent-roster-list"> 
          <label>Roster: {user.roster_id}</label>
          <br />
          <label>{user.points}</label>
        </div>
      )) : null}
    </div>
  )
};

PlayoffMatchup.propTypes = {};

PlayoffMatchup.defaultProps = {};

export default PlayoffMatchup;
