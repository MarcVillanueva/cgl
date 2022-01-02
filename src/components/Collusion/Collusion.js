import React, { useEffect, useState } from 'react';
import './Collusion.css';

const Collusion = (props) => {
// TODO: Fetch matchups in all weeks

// 1. CHECK MISSING POSITION
// For each player check if starts.contains "0". Empty position
// If player contains starter with "0" then add to missing player array { RosterId, MissingPositions[indices of starter with id 0], Week Number}

// 2. CHECK STARTER ON BYE
// For each player check if starter_points contains "0". Then check if corresponding player ID's BYE week === current week
// If player contains starter with "0" then add to missing player array { RosterId, PlayersOnBye[ID of players on BYE], Week Number}
// Users endpoint only returns CURRENT STATUS. No way to check if someone was on BYE on a particular week unless we add a lookup table.
//  -- Can we get this information from some other API and utilize that?

// 3. CHECK STARTER COVID/INJURED. 
// For each player check if starter_points contains "0". Then check if corresponding player ID's status was INJURED/COVID during current week
// If player contains starter with "0" then add to missing player array { RosterId, PlayersOnBye[ID of players on BYE], Week Number}
// Users endpoint only returns CURRENT STATUS. No way to check if someone was on COVID/IR on a particular week unless we add a lookup table.
//  -- Can we get this information from some other API and utilize that?

  const [startWeek, setStartWeek] = useState(null);
  const [missingPositions, setMissingPositions] = useState(null);
  const maxWeekNumber = 17

  useEffect(() => {
  async function getStartWeek(leagueId) {
    const response = await fetch(`https://api.sleeper.app/v1/league/${leagueId}`);
    const league = await response.json();
    setStartWeek(league.settings.start_week);
  }
  getStartWeek(props.leagueId);
  }, [props.leagueId])

  useEffect(() => {
  async function getMissingPositions(leagueId) {
      const newMissingPositions = []

      const rosters = await fetch(`https://api.sleeper.app/v1/league/${leagueId}/rosters`).
                                    then(response => response.json())        
      
      const users = await fetch(`https://api.sleeper.app/v1/league/${leagueId}/users`).
                                  then(response => response.json())

      // This operation takes a very long time to complete. Figure out a way to improve the UI when this is executing...
      // - Can we get the rosterList and userList as props from a component which already fetched it?
      for (var weekNumber = startWeek; weekNumber <= maxWeekNumber; weekNumber++) {
        const matchup = await fetch(`https://api.sleeper.app/v1/league/${leagueId}/matchups/${weekNumber}`).
                              then(response => response.json())
       
        const matchupsWithMissingPlayers = matchup?.filter(matchup => matchup.starters.includes("0"))
        
        matchupsWithMissingPlayers?.forEach(function(matchup) {
        var roster = rosters.find(roster => roster.roster_id === matchup.roster_id)
        var user = users.find(user => user.user_id === roster.owner_id)
        newMissingPositions?.push(
          {
            Username: user.display_name,
            WeekNumber: weekNumber
          }
          )
        })  
      }

      setMissingPositions(newMissingPositions);
  }
  getMissingPositions(props.leagueId);
  }, [props.leagueId])

  return (
    <div >
      {missingPositions !== null ? 
      missingPositions.map((matchup) => (
        <div > 
          <label>Roster ID: {matchup.Username}</label>
          <br />
          <label>Weeknumber: {matchup.WeekNumber}</label>
          <br />
        </div>
      )) : null}
    </div>
  )
};

Collusion.propTypes = {};

Collusion.defaultProps = {};

export default Collusion;
