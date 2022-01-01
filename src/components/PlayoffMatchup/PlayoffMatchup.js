import React, { useEffect, useState } from 'react'
import './PlayoffMatchup.css'

const PlayoffMatchup = (props) => {
  const [matchupRosters, setMatchupRosters] = useState(null);

  // TODO: Add the bye weeks if this is the first round of playoffs
  useEffect(() => {
    async function getMatchupRosters(leagueId, playoffStartWeek, playoffRounderNumber) {
      if (leagueId && (playoffStartWeek !== 0 && playoffStartWeek !== null)) {
        var playoffWeek = playoffStartWeek + (playoffRounderNumber - 1)
        const response = await fetch(`https://api.sleeper.app/v1/league/${leagueId}/matchups/${playoffWeek}`);
        const matchups = await response.json();
        const matchup = matchups.filter(matchup => 
                                          matchup.roster_id === props.matchup.t1 ||
                                          matchup.roster_id === props.matchup.t2)

        const rostersList = await fetch(`https://api.sleeper.app/v1/league/${leagueId}/rosters`).
                                  then(response => response.json()) 

        const usersList = await fetch(`https://api.sleeper.app/v1/league/${leagueId}/users`).
                                  then(response => response.json()) 
        var matchupRosters = []

        if (matchup) {
          matchup?.forEach(function(matchup) {
            var ownerId = rostersList?.find(roster => roster.roster_id === matchup.roster_id).owner_id
            matchupRosters.push(
              {
                RosterId: matchup.roster_id,
                Points: matchup.points,
                Username: usersList?.find(user => user.user_id === ownerId).display_name
              }
              )
          }
          )
        }

        setMatchupRosters(matchupRosters)
      }
  }

  getMatchupRosters(props.leagueId, props.playoffStartWeek, props.roundNumber);
  }, [props.leagueId, props.playoffStartWeek, props.roundNumber])

  return (
    <div className="matchup">
      {matchupRosters != null ? 
      matchupRosters.map((user) => (
        <div > 
          <label>{user.Username}</label>
          <br />
          <label>{user.Points}</label>
          <br />
        </div>
      )) : null}
    </div>
  )
};

PlayoffMatchup.propTypes = {};

PlayoffMatchup.defaultProps = {};

export default PlayoffMatchup;
